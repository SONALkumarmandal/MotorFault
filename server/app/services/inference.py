import joblib
import numpy as np

model = joblib.load("./app/model/motorCO.joblib")

def predict_fault(data):
    features = np.array([[
        data.power,
        data.current,
        data.temperature
    ]])

    prediction = model.predict(features)
    return prediction[0]
