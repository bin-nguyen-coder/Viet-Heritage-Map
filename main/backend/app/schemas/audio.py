from typing import Literal
from pydantic import BaseModel, Field


class AudioScoreResponse(BaseModel):
    """Response model for vocal similarity scoring."""
    score: float = Field(..., ge=0.0, le=100.0, description="Similarity score (0-100)")
    feedback: str = Field(..., description="Human-readable feedback on the performance")
    processing_time_ms: int = Field(..., ge=0, description="Processing time in milliseconds")