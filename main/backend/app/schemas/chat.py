from typing import List, Optional, Literal
from pydantic import BaseModel, Field
from uuid import UUID


class Citation(BaseModel):
    chunk_id: UUID
    source_type: Literal["interview", "document", "recording", "unesco", "academic"]
    excerpt_vi: str
    excerpt_en: Optional[str] = None


class ArtisanAskRequest(BaseModel):
    question: str = Field(..., max_length=500)
    persona_id: str
    lang: Literal["vi", "en"] = "vi"


class ArtisanResponse(BaseModel):
    text: str
    lang: Literal["vi", "en"]
    confidence: float = Field(..., ge=0.0, le=1.0)
    citations: List[Citation] = []
    audio_url: Optional[str] = None

    class Config:
        from_attributes = True