"""
Recommendation API — MCQ survey endpoint.

POST /api/v1/recommend with MCQ answers → top-5 heritage recommendations.
GET  /api/v1/recommend/questions → MCQ question set for the frontend.
"""
from typing import Optional
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.services.recommendation import recommendation_service

router = APIRouter(prefix="/recommend", tags=["recommend"])


class RecommendRequest(BaseModel):
    """MCQ answers from the survey. All fields optional."""
    genre: Optional[str] = None
    region: Optional[str] = None
    status: Optional[str] = None
    era: Optional[str] = None
    lang: str = "vi"


class RecommendItem(BaseModel):
    id: int
    name: str
    location: str
    genre: str
    status: str
    year: str
    badge: str
    desc: str
    score: float
    lat: Optional[float] = None
    lng: Optional[float] = None
    link: str


class RecommendResponse(BaseModel):
    recommendations: list[RecommendItem]
    total: int
    lang: str


class QuestionSet(BaseModel):
    questions: list[dict]


@router.get("/questions", response_model=QuestionSet)
async def get_questions(lang: str = "vi"):
    """Get the MCQ question set for the frontend survey."""
    questions = recommendation_service.get_mcq_questions(lang)
    return QuestionSet(questions=questions)


@router.post("", response_model=RecommendResponse)
async def recommend(request: RecommendRequest):
    """
    Get top-5 heritage recommendations based on MCQ answers.
    All answers are optional — missing answers don't affect scoring.
    """
    # Validate genre if provided
    valid_genres = {"instrumental", "singings", "belief", "festival", "craft"}
    if request.genre and request.genre not in valid_genres:
        raise HTTPException(status_code=400, detail=f"Invalid genre. Must be one of: {valid_genres}")

    # Validate region if provided
    valid_regions = {"north", "central", "south", "highlands"}
    if request.region and request.region not in valid_regions:
        raise HTTPException(status_code=400, detail=f"Invalid region. Must be one of: {valid_regions}")

    # Validate status if provided
    valid_statuses = {"inscribed", "urgent", "national"}
    if request.status and request.status not in valid_statuses:
        raise HTTPException(status_code=400, detail=f"Invalid status. Must be one of: {valid_statuses}")

    # Validate era if provided
    valid_eras = {"early", "mid", "recent"}
    if request.era and request.era not in valid_eras:
        raise HTTPException(status_code=400, detail=f"Invalid era. Must be one of: {valid_eras}")

    results = recommendation_service.recommend(
        genre=request.genre,
        region=request.region,
        status=request.status,
        era=request.era,
        top_n=5,
        lang=request.lang,
    )

    return RecommendResponse(
        recommendations=[RecommendItem(**r) for r in results],
        total=len(results),
        lang=request.lang,
    )