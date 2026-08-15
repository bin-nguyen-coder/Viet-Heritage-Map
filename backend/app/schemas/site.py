from typing import List, Optional
from pydantic import BaseModel
from uuid import UUID


class SiteSummary(BaseModel):
    id: UUID
    name_vi: str
    name_en: Optional[str] = None
    latitude: float
    longitude: float
    province: Optional[str] = None
    heritage_type: str
    unesco_status: str
    cultural_layers: List[str] = []
    cover_image: Optional[str] = None
    audio_preview: Optional[str] = None

    class Config:
        from_attributes = True


class ArtifactModelResponse(BaseModel):
    id: str
    name_vi: str
    name_en: str
    model_url: str
    scale: str
    position: str

    class Config:
        from_attributes = True


class SiteDetail(SiteSummary):
    description_vi: Optional[str] = None
    description_en: Optional[str] = None
    images: List[str] = []
    artifact_model: Optional[ArtifactModelResponse] = None

    class Config:
        from_attributes = True
