from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class VisitCreate(BaseModel):
    session_id: str
    page: str
    referrer: Optional[str] = None


class EventCreate(BaseModel):
    session_id: str
    event_type: str
    element_id: Optional[str] = None


class VisitOut(BaseModel):
    id: int
    session_id: str
    page: str
    ap_address: str
    user_agent: str
    referrer: Optional[str]
    timestamp: datetime
    time_on_page: Optional[int]

    class Config:
        from_attributes = True


class LoginRequest(BaseModel):
    username: str
    password: str


class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"