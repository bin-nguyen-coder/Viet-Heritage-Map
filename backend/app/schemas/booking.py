from typing import List, Optional
from pydantic import BaseModel


class BookingCreate(BaseModel):
    full_name: str
    email: str
    phone: Optional[str] = None
    travelers: int = 1
    start_date: str
    end_date: Optional[str] = None
    region: Optional[str] = None
    interests: List[str] = []
    selected_sites: List[dict] = []
    notes: Optional[str] = None


class BookingResponse(BaseModel):
    id: str
    full_name: str
    email: str
    phone: Optional[str] = None
    travelers: int
    start_date: str
    end_date: Optional[str] = None
    region: Optional[str] = None
    interests: List[str] = []
    selected_sites: List[dict] = []
    notes: Optional[str] = None
    status: str
    created_at: str

    class Config:
        from_attributes = True
