"""
Trip suggestion API — powers the booking wizard and the local chatbot.

POST /api/v1/trip/suggest → suggest sites + festivals from date/region/interests.
"""
from typing import List, Optional
from fastapi import APIRouter
from pydantic import BaseModel

from app.services.trip_planner import trip_planner_service

router = APIRouter(prefix="/trip", tags=["trip"])


class TripSuggestRequest(BaseModel):
    start_date: Optional[str] = None
    region: Optional[str] = None
    interests: List[str] = []
    lang: str = "vi"


@router.post("/suggest")
async def suggest_trip(request: TripSuggestRequest):
    result = trip_planner_service.suggest(
        start_date=request.start_date,
        region=request.region,
        interests=request.interests,
        lang=request.lang,
    )
    return result
