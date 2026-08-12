import uuid
from datetime import datetime
from typing import List, Optional
from sqlalchemy import (
    String,
    Text,
    Float,
    Integer,
    DateTime,
    Enum as SQLEnum,
    JSON,
    ForeignKey,
)
from sqlalchemy.orm import Mapped, mapped_column, relationship
from typing import TYPE_CHECKING
from app.core.database import Base

if TYPE_CHECKING:
    from app.models.site import HeritageSite


class AudioAsset(Base):
    __tablename__ = "audio_assets"

    id: Mapped[str] = mapped_column(
        String(36), primary_key=True, default=lambda: str(uuid.uuid4())
    )
    site_id: Mapped[str] = mapped_column(
        String(36), ForeignKey("heritage_sites.id"), nullable=False
    )
    title_vi: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)
    title_en: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)
    description_vi: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    description_en: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    url: Mapped[str] = mapped_column(String(500), nullable=False)
    duration_seconds: Mapped[Optional[float]] = mapped_column(Float, nullable=True)
    sample_rate: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    channels: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    genre: Mapped[Optional[str]] = mapped_column(
        SQLEnum(
            "quan_ho",
            "ca_tru",
            "nha_nhac",
            "don_ca_tai_tu",
            "ho",
            name="genre_enum",
        ),
        nullable=True,
    )
    instruments: Mapped[List[str]] = mapped_column(JSON, default=list)
    techniques: Mapped[List[str]] = mapped_column(JSON, default=list)
    transcription_text: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    waveform_data: Mapped[List[float]] = mapped_column(JSON, default=list)
    created_at: Mapped[datetime] = mapped_column(
        DateTime, default=datetime.utcnow
    )

    # Relationships
    site: Mapped["HeritageSite"] = relationship(
        "HeritageSite", back_populates="audio_assets"
    )