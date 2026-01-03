"""Company history model"""
from datetime import datetime
from sqlalchemy import Column, Integer, String, DateTime
from app.database import Base

class CompanyHistory(Base):
    """Company history events"""
    __tablename__ = "company_history"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    date = Column(String, nullable=False)  # e.g., "2023年4月"
    event_jp = Column(String, nullable=False)  # Japanese
    event_en = Column(String, nullable=False)  # English
    event_cn = Column(String, nullable=False)  # Chinese
    order = Column(Integer, nullable=False, default=0)  # Display order
    created_at = Column(DateTime, default=datetime.utcnow)

    def to_dict(self):
        """Convert to dictionary"""
        return {
            "id": self.id,
            "date": self.date,
            "event_jp": self.event_jp,
            "event_en": self.event_en,
            "event_cn": self.event_cn,
            "order": self.order
        }
