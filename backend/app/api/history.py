"""Company history API routes"""
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.history import CompanyHistory

router = APIRouter(prefix="/api/history", tags=["history"])

@router.get("")
async def get_history(db: Session = Depends(get_db)):
    """Get all company history events, ordered by order field"""
    history = db.query(CompanyHistory).order_by(CompanyHistory.order).all()
    return [item.to_dict() for item in history]
