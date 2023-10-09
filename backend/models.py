from pydantic import Field, BaseModel
import uuid
from datetime import datetime, timezone


class TermModel(BaseModel):
    id: str = Field(default_factory=uuid.uuid4)
    value: str = Field()
    part_of_speech: str = Field(default="noun")
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
