"""
Booking API — create and list trip bookings.

POST /api/v1/bookings   → create a booking (persisted to SQLite)
GET  /api/v1/bookings   → list all bookings
"""
from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.models.booking import Booking
from app.schemas.booking import BookingCreate, BookingResponse

router = APIRouter(prefix="/bookings", tags=["bookings"])


def _to_response(b: Booking) -> BookingResponse:
    return BookingResponse(
        id=b.id,
        full_name=b.full_name,
        email=b.email,
        phone=b.phone,
        travelers=b.travelers,
        start_date=b.start_date,
        end_date=b.end_date,
        region=b.region,
        interests=b.interests or [],
        selected_sites=b.selected_sites or [],
        notes=b.notes,
        status=b.status,
        created_at=b.created_at.isoformat() if b.created_at else "",
    )


@router.post("", response_model=BookingResponse, status_code=201)
async def create_booking(payload: BookingCreate, db: AsyncSession = Depends(get_db)):
    if not payload.full_name.strip():
        raise HTTPException(status_code=400, detail="Full name is required")
    if not payload.email.strip():
        raise HTTPException(status_code=400, detail="Email is required")
    if payload.travelers < 1:
        raise HTTPException(status_code=400, detail="Travelers must be at least 1")

    booking = Booking(
        full_name=payload.full_name.strip(),
        email=payload.email.strip(),
        phone=payload.phone,
        travelers=payload.travelers,
        start_date=payload.start_date,
        end_date=payload.end_date,
        region=payload.region,
        interests=payload.interests,
        selected_sites=payload.selected_sites,
        notes=payload.notes,
        status="confirmed",
    )
    db.add(booking)
    await db.commit()
    await db.refresh(booking)
    return _to_response(booking)


@router.get("", response_model=List[BookingResponse])
async def list_bookings(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Booking).order_by(Booking.created_at.desc()))
    bookings = result.scalars().all()
    return [_to_response(b) for b in bookings]
