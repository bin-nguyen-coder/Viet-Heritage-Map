from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from app.core.database import get_db
from app.models.site import HeritageSite, ArtifactModel
from app.models.audio_asset import AudioAsset
from app.models.artisan import ArtisanPersona, KnowledgeChunk
from app.schemas.site import SiteSummary, SiteDetail, ArtifactModelResponse, AudioAssetResponse, ArtisanPersonaResponse

router = APIRouter(prefix="/sites", tags=["sites"])


@router.get("", response_model=List[SiteSummary])
async def list_sites(
    layer: Optional[str] = Query(None, description="Filter by cultural layer"),
    db: AsyncSession = Depends(get_db),
):
    query = select(HeritageSite)
    if layer and layer != "all":
        query = query.where(HeritageSite.cultural_layers.contains([layer]))
    result = await db.execute(query)
    sites = result.scalars().all()
    return [SiteSummary.model_validate(site) for site in sites]


@router.get("/{site_id}", response_model=SiteDetail)
async def get_site(site_id: str, db: AsyncSession = Depends(get_db)):
    query = (
        select(HeritageSite)
        .options(
            selectinload(HeritageSite.audio_assets),
            selectinload(HeritageSite.knowledge_chunks),
        )
        .where(HeritageSite.id == site_id)
    )
    result = await db.execute(query)
    site = result.scalar_one_or_none()
    if not site:
        raise HTTPException(status_code=404, detail="Site not found")
    return SiteDetail.model_validate(site)