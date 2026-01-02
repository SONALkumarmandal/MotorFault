from pydantic import BaseModel

class MotorInput(BaseModel):
    power: float
    current: float
    temperature: float
