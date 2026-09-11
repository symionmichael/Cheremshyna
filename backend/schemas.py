from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict, Field


class VisitCreate(BaseModel):
    session_id: str = Field(min_length=1, max_length=128)
    page: str = Field(min_length=1, max_length=2048)
    referrer: Optional[str] = Field(default=None, max_length=2048)


class EventCreate(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    session_id: str = Field(min_length=1, max_length=128)
    event_type: str = Field(min_length=1, max_length=64)
    element: Optional[str] = Field(default=None, alias="element_id", max_length=512)


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
    username: str = Field(min_length=1, max_length=128)
    password: str = Field(min_length=1, max_length=1024)


class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"
