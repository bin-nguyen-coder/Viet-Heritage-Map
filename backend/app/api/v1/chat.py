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
    "Vietnamese cultural heritage. Your responsibility is to interact naturally with "
    "tourists, asking about their preferences (budget, duration, pace) and suggesting "
    "customized heritage routes in Vietnam. Keep your tone polite, warm, and helpful. "
    "Respond in the same language the user writes in. When "
    "suggesting a route, structure it clearly with day-by-day stops and mention "
    "heritage sites, festivals, and practical tips."
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