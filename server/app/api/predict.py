from fastapi import APIRouter
from app.schemas.input import MotorInput
from app.services.inference import predict_fault

router = APIRouter()

@router.post("/predict")
def predict(data: MotorInput):
    result = predict_fault(data)

    return {
        "fault": bool(result),
        "status": "Fault detected" if result else "Motor healthy"
    }
