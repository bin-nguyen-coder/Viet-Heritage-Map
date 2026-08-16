"""
AI Tour Curator chat proxy — calls Google Gemini server-side so the API key
is never exposed to the browser and CORS is handled by our own backend.

POST /api/v1/chat → returns a structured JSON envelope:
    {
      "reply": "human-readable markdown for the chat bubble",
      "plan": { ... }   # populated only when the user confirms a plan
    }

The response is produced with Gemini's native structured output
(responseMimeType=application/json + responseSchema), so the API itself
guarantees schema-valid JSON — eliminating malformed-JSON failures at the
source instead of patching them in the frontend.
"""
from __future__ import annotations

import asyncio
import json
import logging
from typing import Any, List

import httpx
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.core.config import settings

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/chat", tags=["chat"])

GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta/models"

# Retry policy for transient failures (429 rate-limit, 5xx).
MAX_ATTEMPTS = 3
RETRY_BASE_DELAY_S = 1.0
RETRYABLE_STATUS = {429, 500, 502, 503, 504}

# BLOCK_ONLY_HIGH reduces spurious blocking on benign travel content while
# still filtering genuinely harmful output.
SAFETY_SETTINGS = [
    {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_ONLY_HIGH"},
    {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_ONLY_HIGH"},
    {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_ONLY_HIGH"},
    {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_ONLY_HIGH"},
]

# Structured-output schema: the API guarantees the model returns JSON that
# conforms to this shape, so the frontend never parses JSON out of prose.
RESPONSE_SCHEMA = {
    "type": "OBJECT",
    "properties": {
        "reply": {"type": "STRING"},
        "plan": {
            "type": "OBJECT",
            "properties": {
                "plan_confirmed": {"type": "BOOLEAN"},
                "summary": {"type": "STRING"},
                "locations": {
                    "type": "ARRAY",
                    "items": {
                        "type": "OBJECT",
                        "properties": {
                            "name": {"type": "STRING"},
                            "lat": {"type": "NUMBER"},
                            "lng": {"type": "NUMBER"},
                            "day": {"type": "INTEGER"},
                        },
                        "required": ["name", "lat", "lng", "day"],
                    },
                },
                "accommodation_links": {
                    "type": "ARRAY",
                    "items": {
                        "type": "OBJECT",
                        "properties": {
                            "city": {"type": "STRING"},
                            "checkin": {"type": "STRING"},
                            "checkout": {"type": "STRING"},
                        },
                        "required": ["city", "checkin", "checkout"],
                    },
                },
                "transport_segments": {
                    "type": "ARRAY",
                    "items": {
                        "type": "OBJECT",
                        "properties": {
                            "from": {"type": "STRING"},
                            "to": {"type": "STRING"},
                            "type": {"type": "STRING"},
                        },
                        "required": ["from", "to", "type"],
                    },
                },
            },
            "required": [
                "plan_confirmed",
                "summary",
                "locations",
                "accommodation_links",
                "transport_segments",
            ],
        },
    },
    "required": ["reply", "plan"],
}

_SYSTEM_INSTRUCTION = (
    "You are the AI Tour Curator for 'Viet Heritage', a digital map platform for "
    "Vietnamese cultural heritage. You are a passionate, warm local guide who loves "
    "sharing the beauty of Vietnam's heritage. Interact naturally with tourists, "
    "asking about their preferences (budget, duration, pace, region, dates) and "
    "suggesting customized heritage routes. Keep your tone polite, warm, helpful, "
    "and enthusiastic. Respond in the same language the user writes in.\n\n"
    "You must reply in JSON with exactly two top-level fields:\n"
    "  - \"reply\": a string of Markdown for the chat bubble. When suggesting a "
    "route, structure it clearly with day-by-day stops and mention heritage sites, "
    "festivals, and practical tips.\n"
    "  - \"plan\": an object describing a finalized tour. Populate it with real "
    "data ONLY when the user explicitly agrees, approves, or confirms a proposed "
    "plan (e.g. 'Chốt plan', 'Đồng ý', 'Ok', 'Ok chốt', 'chốt luôn', or any clear "
    "approval). Otherwise set plan_confirmed to false, summary to an empty string, "
    "and locations/accommodation_links/transport_segments to empty arrays.\n\n"
    "When the user confirms, in the same reply:\n"
    "  1. Confirm enthusiastically as a passionate local guide (e.g. 'Tuyệt vời! "
    "Hành trình của bạn đã sẵn sàng!').\n"
    "  2. Provide a beautiful, short Markdown summary of the finalized tour in "
    "\"reply\" (title, day-by-day highlights, key heritage sites, and a friendly "
    "closing line inviting them to book).\n"
    "  3. Fill \"plan\" with the finalized itinerary: plan_confirmed=true, a short "
    "summary, real Vietnamese place names with approximate lat/lng coordinates and "
    "real day numbers in locations, accommodation checkin/checkout dates matched to "
    "the itinerary, and transport segments between the cities. Only emit a "
    "confirmed plan when the user genuinely confirms — never before."
)


class ChatMessage(BaseModel):
    role: str
    text: str


class ChatRequest(BaseModel):
    messages: List[ChatMessage]


def _build_contents(messages: List[ChatMessage]) -> List[dict[str, Any]]:
    contents = []
    for m in messages:
        role = "model" if m.role == "assistant" else "user"
        contents.append({"role": role, "parts": [{"text": m.text}]})
    return contents


def _build_payload(messages: List[ChatMessage]) -> dict[str, Any]:
    return {
        "systemInstruction": {"parts": [{"text": _SYSTEM_INSTRUCTION}]},
        "contents": _build_contents(messages),
        "safetySettings": SAFETY_SETTINGS,
        "generationConfig": {
            "temperature": 0.3,
            "maxOutputTokens": settings.GEMINI_MAX_OUTPUT_TOKENS,
            "responseMimeType": "application/json",
            "responseSchema": RESPONSE_SCHEMA,
        },
    }


async def _post_with_retry(url: str, payload: dict[str, Any]) -> httpx.Response:
    """POST to Gemini with exponential backoff on transient failures."""
    for attempt in range(MAX_ATTEMPTS):
        try:
            async with httpx.AsyncClient(timeout=60.0) as client:
                resp = await client.post(url, json=payload)
        except httpx.HTTPError as e:
            logger.warning("Gemini request failed (attempt %d): %s", attempt + 1, e)
            if attempt == MAX_ATTEMPTS - 1:
                raise
            await asyncio.sleep(RETRY_BASE_DELAY_S * (2 ** attempt))
            continue

        if resp.status_code in RETRYABLE_STATUS and attempt < MAX_ATTEMPTS - 1:
            logger.warning(
                "Gemini transient error %s (attempt %d); retrying",
                resp.status_code,
                attempt + 1,
            )
            await asyncio.sleep(RETRY_BASE_DELAY_S * (2 ** attempt))
            continue

        return resp

    # Unreachable: the loop always returns or raises.
    raise RuntimeError("unreachable")


def _extract_reply(data: dict[str, Any]) -> str:
    candidates = data.get("candidates", [])
    if not candidates:
        raise HTTPException(status_code=502, detail="Gemini returned no candidates.")

    candidate = candidates[0]
    finish_reason = candidate.get("finishReason", "STOP")

    if finish_reason == "MAX_TOKENS":
        raise HTTPException(
            status_code=502,
            detail="Gemini response was truncated (max output tokens reached).",
        )
    if finish_reason in ("SAFETY", "RECITATION", "PROHIBITED_CONTENT"):
        raise HTTPException(
            status_code=502,
            detail=f"Gemini blocked the response ({finish_reason}).",
        )

    parts = candidate.get("content", {}).get("parts", [])
    if not parts:
        raise HTTPException(status_code=502, detail="Gemini returned an empty reply.")

    text = parts[0].get("text", "")
    if not text:
        raise HTTPException(status_code=502, detail="Gemini returned an empty reply.")
    return text


def _parse_envelope(text: str) -> dict[str, Any]:
    try:
        envelope = json.loads(text)
    except json.JSONDecodeError as e:
        logger.error("Gemini returned invalid JSON: %s", e)
        raise HTTPException(status_code=502, detail="Gemini returned invalid JSON.")

    if not isinstance(envelope, dict):
        raise HTTPException(status_code=502, detail="Gemini returned an unexpected shape.")

    reply = envelope.get("reply")
    if not isinstance(reply, str) or not reply.strip():
        raise HTTPException(status_code=502, detail="Gemini returned an empty reply.")

    plan = envelope.get("plan")
    if plan is None:
        plan = {
            "plan_confirmed": False,
            "summary": "",
            "locations": [],
            "accommodation_links": [],
            "transport_segments": [],
        }

    if not isinstance(plan, dict):
        raise HTTPException(status_code=502, detail="Gemini returned an invalid plan.")

    # A confirmed plan must actually carry route data.
    if plan.get("plan_confirmed") and not plan.get("locations"):
        raise HTTPException(
            status_code=502,
            detail="Gemini confirmed a plan but returned no locations.",
        )

    return {"reply": reply, "plan": plan}


@router.post("")
async def chat(request: ChatRequest):
    if not settings.GEMINI_API_KEY:
        raise HTTPException(
            status_code=503,
            detail="Gemini API key is not configured on the server (set GEMINI_API_KEY in backend/.env).",
        )

    url = (
        f"{GEMINI_BASE}/{settings.GEMINI_MODEL}:generateContent"
        f"?key={settings.GEMINI_API_KEY}"
    )
    payload = _build_payload(request.messages)

    try:
        resp = await _post_with_retry(url, payload)
    except httpx.HTTPError as e:
        logger.error("Gemini request failed after retries: %s", e)
        raise HTTPException(status_code=502, detail="Failed to reach Gemini API.")

    if resp.status_code != 200:
        logger.error("Gemini returned %s: %s", resp.status_code, resp.text[:500])
        raise HTTPException(
            status_code=resp.status_code,
            detail="Gemini API request failed.",
        )

    data = resp.json()
    text = _extract_reply(data)
    return _parse_envelope(text)