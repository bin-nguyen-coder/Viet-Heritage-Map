import uuid
from datetime import datetime
from typing import List, Optional
from sqlalchemy import (
    String,
    Text,
    Integer,
    DateTime,
    Boolean,
    ForeignKey,
    JSON,
    Enum as SQLEnum,
)
from sqlalchemy.orm import Mapped, mapped_column, relationship
from typing import TYPE_CHECKING
from app.core.database import Base

if TYPE_CHECKING:
    from app.models.site import HeritageSite


class ArtisanPersona(Base):
    __tablename__ = "artisan_personas"

    id: Mapped[str] = mapped_column(
        String(36), primary_key=True, default=lambda: str(uuid.uuid4())
    )
    name_vi: Mapped[str] = mapped_column(String(255), nullable=False)
    name_en: Mapped[str] = mapped_column(String(255), nullable=False)
    birth_year: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    region: Mapped[Optional[str]] = mapped_column(String(100), nullable=True)
    specialty: Mapped[Optional[str]] = mapped_column(String(100), nullable=True)
    bio_vi: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    bio_en: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    avatar_url: Mapped[Optional[str]] = mapped_column(String(500), nullable=True)
    voice_sample_url: Mapped[Optional[str]] = mapped_column(String(500), nullable=True)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    # Relationships
    knowledge_chunks: Mapped[List["KnowledgeChunk"]] = relationship(
        "KnowledgeChunk", back_populates="persona", cascade="all, delete-orphan"
    )
    responses: Mapped[List["ArtisanResponse"]] = relationship(
        "ArtisanResponse", back_populates="persona", cascade="all, delete-orphan"
    )


class KnowledgeChunk(Base):
    __tablename__ = "knowledge_chunks"

    id: Mapped[str] = mapped_column(
        String(36), primary_key=True, default=lambda: str(uuid.uuid4())
    )
    site_id: Mapped[Optional[str]] = mapped_column(
        String(36), ForeignKey("heritage_sites.id"), nullable=True
    )
    artisan_persona_id: Mapped[Optional[str]] = mapped_column(
        String(36), ForeignKey("artisan_personas.id"), nullable=True
    )
    category: Mapped[str] = mapped_column(
        SQLEnum(
            "history",
            "technique",
            "meaning",
            "ritual",
            "lyrics",
            "general",
            name="knowledge_category_enum",
        ),
        nullable=False,
        default="general",
    )
    content_vi: Mapped[str] = mapped_column(Text, nullable=False)
    content_en: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    source_type: Mapped[str] = mapped_column(
        SQLEnum(
            "interview",
            "document",
            "recording",
            "unesco",
            "academic",
            name="source_type_enum",
        ),
        nullable=False,
    )
    verified_by: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)
    verified_at: Mapped[Optional[str]] = mapped_column(String(50), nullable=True)
    chunk_metadata: Mapped[Optional[dict]] = mapped_column(JSON, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    # Relationships
    site: Mapped[Optional["HeritageSite"]] = relationship(
        "HeritageSite", back_populates="knowledge_chunks"
    )
    persona: Mapped[Optional["ArtisanPersona"]] = relationship(
        "ArtisanPersona", back_populates="knowledge_chunks"
    )


class ArtisanResponse(Base):
    __tablename__ = "artisan_responses"

    id: Mapped[str] = mapped_column(
        String(36), primary_key=True, default=lambda: str(uuid.uuid4())
    )
    persona_id: Mapped[str] = mapped_column(
        String(36), ForeignKey("artisan_personas.id"), nullable=False
    )
    question_intent: Mapped[str] = mapped_column(String(255), nullable=False)
    question_vi: Mapped[Optional[str]] = mapped_column(String(500), nullable=True)
    question_en: Mapped[Optional[str]] = mapped_column(String(500), nullable=True)
    answer_vi: Mapped[str] = mapped_column(Text, nullable=False)
    answer_en: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    audio_url_vi: Mapped[Optional[str]] = mapped_column(String(500), nullable=True)
    audio_url_en: Mapped[Optional[str]] = mapped_column(String(500), nullable=True)
    confidence: Mapped[float] = mapped_column(default=1.0)
    citations: Mapped[Optional[List[str]]] = mapped_column(JSON, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    # Relationships
    persona: Mapped["ArtisanPersona"] = relationship(
        "ArtisanPersona", back_populates="responses"
    )