from datetime import datetime
from typing import Optional

from pydantic import BaseModel, Field


class VisitCreate(BaseModel):
    session_id: str
    page: str
    referrer: Optional[str] = None


class EventCreate(BaseModel):
    session_id: str
    event_type: str
    element: Optional[str] = Field(default=None, alias="element_id")

    class Config:
        populate_by_name = True


class VisitOut(BaseModel):
    id: int
    session_id: str
    page: str
    ip_address: Optional[str]
    user_agent: Optional[str]
    referrer: Optional[str]
    timestamp: datetime
    time_on_page: Optional[int]

    class Config:
        from_attributes = True


class EventOut(BaseModel):
    id: int
    visit_id: Optional[int]
    event_type: str
    element: Optional[str]
    timestamp: datetime

    class Config:
        from_attributes = True


class StatsOut(BaseModel):
    total_visits: int
    unique_visitors: int
    total_events: int


class LoginRequest(BaseModel):
    username: str
    password: str


class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"