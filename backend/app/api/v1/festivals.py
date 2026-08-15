"""
Festival calendar API.

GET /api/v1/festivals          → list all festivals (optional month/region filter)
GET /api/v1/festivals/months   → summary of festivals grouped by month
"""
from __future__ import annotations

import json
import logging
from pathlib import Path
from typing import Optional

from fastapi import APIRouter, Query

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/festivals", tags=["festivals"])

_FESTIVALS_PATH = Path(__file__).resolve().parents[2] / "data" / "festivals.json"
_FESTIVALS: list[dict] | None = None


def _load_festivals() -> list[dict]:
    global _FESTIVALS
    if _FESTIVALS is None:
        try:
            _FESTIVALS = json.loads(_FESTIVALS_PATH.read_text(encoding="utf-8"))
            logger.info("Loaded %d festivals from %s", len(_FESTIVALS), _FESTIVALS_PATH)
        except Exception as e:
            logger.error("Failed to load festivals.json: %s", e)
            _FESTIVALS = []
    return _FESTIVALS


@router.get("")
async def list_festivals(
    month: Optional[int] = Query(None, ge=1, le=12, description="Filter by Gregorian month (1-12)"),
    region: Optional[str] = Query(None, description="Filter by region: north|central|south|highlands|nationwide"),
):
    festivals = _load_festivals()
    if month:
        festivals = [f for f in festivals if f.get("month") == month]
    if region:
        festivals = [f for f in festivals if f.get("region") == region]
    return {"festivals": festivals, "total": len(festivals)}


@router.get("/months")
async def festival_months():
    """Return festivals grouped by Gregorian month for the calendar view."""
    festivals = _load_festivals()
    months = {}
    for f in festivals:
        m = f.get("month", 1)
        months.setdefault(m, []).append(f)
    result = [
        {"month": m, "festivals": months.get(m, [])}
        for m in range(1, 13)
    ]
    return {"months": result}
