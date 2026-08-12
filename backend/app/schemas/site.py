from typing import List, Optional
from pydantic import BaseModel, Field
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


class AudioAssetResponse(BaseModel):
    id: UUID
    title_vi: Optional[str] = None
    title_en: Optional[str] = None
    url: str
    duration_seconds: Optional[float] = None
    waveform_data: List[float] = Field(default_factory=list, min_length=100, max_length=100)

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


class ArtisanPersonaResponse(BaseModel):
    id: UUID
    name_vi: str
    name_en: str
    specialty: Optional[str] = None
    region: Optional[str] = None
    avatar_url: Optional[str] = None
    voice_sample_url: Optional[str] = None

    class Config:
        from_attributes = True


class SiteDetail(SiteSummary):
    description_vi: Optional[str] = None
    description_en: Optional[str] = None
    images: List[str] = []
    audio_assets: List[AudioAssetResponse] = []
    artifact_model: Optional[ArtifactModelResponse] = None
    artisans: List[ArtisanPersonaResponse] = []

    class Config:
        from_attributes = True
