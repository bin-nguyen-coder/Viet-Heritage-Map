import uuid
from datetime import datetime
from typing import List, Optional
import enum
from sqlalchemy import (
    String,
    Text,
    Float,
    DateTime,
    Enum as SQLEnum,
    JSON,
    ForeignKey,
)
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.core.database import Base


class HeritageType(str, enum.Enum):
    INTANGIBLE = "intangible"
    TANGIBLE = "tangible"
    MIXED = "mixed"


class UNESCOStatus(str, enum.Enum):
    INSCRIBED = "inscribed"
    TENTATIVE = "tentative"
    NATIONAL = "national"
    NONE = "none"


class HeritageSite(Base):
    __tablename__ = "heritage_sites"

    id: Mapped[str] = mapped_column(
        String(36), primary_key=True, default=lambda: str(uuid.uuid4())
    )
    name_vi: Mapped[str] = mapped_column(String(255), nullable=False)
    name_en: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)
    description_vi: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    description_en: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    latitude: Mapped[float] = mapped_column(Float, nullable=False)
    longitude: Mapped[float] = mapped_column(Float, nullable=False)
    province: Mapped[Optional[str]] = mapped_column(String(100), nullable=True)
    district: Mapped[Optional[str]] = mapped_column(String(100), nullable=True)
    heritage_type: Mapped[str] = mapped_column(
        SQLEnum(HeritageType), nullable=False, default=HeritageType.INTANGIBLE
    )
    unesco_status: Mapped[str] = mapped_column(
        SQLEnum(UNESCOStatus), nullable=False, default=UNESCOStatus.NONE
    )
    cultural_layers: Mapped[List[str]] = mapped_column(JSON, default=list)
    cover_image: Mapped[Optional[str]] = mapped_column(String(500), nullable=True)
    audio_preview: Mapped[Optional[str]] = mapped_column(String(500), nullable=True)
    artifact_model_id: Mapped[Optional[str]] = mapped_column(
        String(36), ForeignKey("artifact_models.id"), nullable=True
    )
    created_at: Mapped[datetime] = mapped_column(
        DateTime, default=datetime.utcnow
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime, default=datetime.utcnow, onupdate=datetime.utcnow
    )

    # Relationships
    artifact_model: Mapped[Optional["ArtifactModel"]] = relationship(
        "ArtifactModel", back_populates="sites", lazy="selectin"
    )
    audio_assets: Mapped[List["AudioAsset"]] = relationship(
        "AudioAsset", back_populates="site", cascade="all, delete-orphan", lazy="selectin"
    )
    knowledge_chunks: Mapped[List["KnowledgeChunk"]] = relationship(
        "KnowledgeChunk", back_populates="site", cascade="all, delete-orphan", lazy="selectin"
    )


class ArtifactModel(Base):
    __tablename__ = "artifact_models"

    id: Mapped[str] = mapped_column(
        String(36), primary_key=True, default=lambda: str(uuid.uuid4())
    )
    name_vi: Mapped[str] = mapped_column(String(255), nullable=False)
    name_en: Mapped[str] = mapped_column(String(255), nullable=False)
    description_vi: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    description_en: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    model_url: Mapped[str] = mapped_column(String(500), nullable=False)
    scale: Mapped[str] = mapped_column(String(50), default="0.5 0.5 0.5")
    position: Mapped[str] = mapped_column(String(50), default="0 0 -1")
    created_at: Mapped[datetime] = mapped_column(
        DateTime, default=datetime.utcnow
    )

    # Relationships
    sites: Mapped[List["HeritageSite"]] = relationship(
        "HeritageSite", back_populates="artifact_model"
    )