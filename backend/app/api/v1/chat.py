"""
AI Tour Curator chat proxy — calls Google Gemini server-side so the API key
is never exposed to the browser and CORS is handled by our own backend.

POST /api/v1/chat → returns Gemini's text reply for a chat history.
"""
from __future__ import annotations

import logging
from typing import Any, List

import httpx
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.core.config import settings

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/chat", tags=["chat"])

GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta/models"


class ChatMessage(BaseModel):
    role: str
    text: str


class ChatRequest(BaseModel):
    messages: List[ChatMessage]


_SYSTEM_INSTRUCTION = (
    "You are the AI Tour Curator for 'Viet Heritage', a digital map platform for "
    "Vietnamese cultural heritage. You are a passionate, warm local guide who loves "
    "sharing the beauty of Vietnam's heritage. Interact naturally with tourists, "
    "asking about their preferences (budget, duration, pace, region, dates) and "
    "suggesting customized heritage routes. Keep your tone polite, warm, helpful, "
    "and enthusiastic. Respond in the same language the user writes in. When "
    "suggesting a route, structure it clearly with day-by-day stops and mention "
    "heritage sites, festivals, and practical tips.\n\n"
    "CONFIRMATION MODE:\n"
    "When the user explicitly agrees, approves, or confirms a proposed plan — for "
    "example they say 'Chốt plan', 'Đồng ý', 'Ok', 'Ok chốt', 'chốt luôn', or any "
    "clear approval — you MUST do all of the following in a single reply:\n"
    "  1. Confirm enthusiastically as a passionate local guide (e.g. 'Tuyệt vời! "
    "Hành trình của bạn đã sẵn sàng!').\n"
    "  2. Provide a beautiful, short Markdown summary of the finalized tour "
    "(title, day-by-day highlights, key heritage sites, and a friendly closing "
    "line inviting them to book).\n"
    "  3. At the very end of your response, append a hidden JSON block wrapped "
    "exactly like this (do not add anything after the closing tag):\n"
    "<FINAL_PLAN_JSON>\n"
    "{\n"
    '  "plan_confirmed": true,\n'
    '  "summary": "Chuyến đi 3 ngày Cố đô Huế & Hội An",\n'
    '  "locations": [\n'
    '    {"name": "Đại Nội Huế", "lat": 16.4686, "lng": 107.5776, "day": 1},\n'
    '    {"name": "Chùa Thiên Mụ", "lat": 16.4527, "lng": 107.5452, "day": 1},\n'
    '    {"name": "Phố cổ Hội An", "lat": 15.8801, "lng": 108.3380, "day": 2}\n'
    "  ],\n"
    '  "accommodation_links": [\n'
    '    {"city": "Huế", "checkin": "2026-09-01", "checkout": "2026-09-02"},\n'
    '    {"city": "Hội An", "checkin": "2026-09-02", "checkout": "2026-09-03"}\n'
    "  ],\n"
    '  "transport_segments": [\n'
    '    {"from": "Hà Nội", "to": "Huế", "type": "flight_or_train"},\n'
    '    {"from": "Huế", "to": "Hội An", "type": "bus_or_car"}\n'
    "  ]\n"
    "}\n"
    "</FINAL_PLAN_JSON>\n"
    "The JSON block is consumed programmatically by the frontend map, so it must "
    "be valid JSON. Use real Vietnamese place names with approximate lat/lng "
    "coordinates and real day numbers. Match the accommodation checkin/checkout "
    "dates and transport segments to the itinerary you actually recommend. Only "
    "emit FINAL_PLAN_JSON when the user genuinely confirms a plan — never before."
)


def _build_contents(messages: List[ChatMessage]) -> List[dict[str, Any]]:
    contents = []
    for m in messages:
        role = "model" if m.role == "assistant" else "user"
        contents.append({"role": role, "parts": [{"text": m.text}]})
    return contents


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
    payload = {
        "systemInstruction": {"parts": [{"text": _SYSTEM_INSTRUCTION}]},
        "contents": _build_contents(request.messages),
        "generationConfig": {
            "temperature": 0.8,
            "maxOutputTokens": 1024,
        },
    }

    try:
        async with httpx.AsyncClient(timeout=60.0) as client:
            resp = await client.post(url, json=payload)
    except httpx.HTTPError as e:
        logger.error("Gemini request failed: %s", e)
        raise HTTPException(status_code=502, detail="Failed to reach Gemini API.")

    if resp.status_code != 200:
        logger.error("Gemini returned %s: %s", resp.status_code, resp.text[:500])
        raise HTTPException(
            status_code=resp.status_code,
            detail="Gemini API request failed.",
        )

    data = resp.json()
    try:
        candidates = data.get("candidates", [])
        text = (
            candidates[0]
            .get("content", {})
            .get("parts", [{}])[0]
            .get("text", "")
        )
    except (IndexError, KeyError, AttributeError) as e:
        logger.error("Unexpected Gemini response shape: %s", data)
        raise HTTPException(status_code=502, detail="Unexpected Gemini response.")

    if not text:
        raise HTTPException(status_code=502, detail="Gemini returned an empty reply.")

    return {"reply": text}