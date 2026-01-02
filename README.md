# ⚙️ Motor Fault Detection System

A full-stack **Machine Learning–powered web application** to detect motor faults based on input parameters like power, current, and temperature.

The project is fully **Dockerized** and runs with a single command using **Docker Compose**.

---

## 🚀 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Served via Nginx (production build)

### Backend
- FastAPI
- Python 3.11
- ML model loaded using `joblib`
- Uvicorn ASGI server

### DevOps
- Docker
- Docker Compose
- Multi-container setup


## ✅ Prerequisites

Make sure you have the following installed:

- **Docker**
- **Docker Compose**

No need to install:
- Node.js
- Python
- pip
- virtualenv

Everything runs inside Docker.

---

## ▶️ Run the Application (One Command)


docker-compose up --build

🌐 Access the App

Frontend → http://localhost:5173

Backend API → http://localhost:8000

🧪 API Endpoint

POST /api/predict

Example payload:

{
  "power": 120,
  "current": 15,
  "temperature": 75
}


Response:

{
  "status": "Fault detected"
}

🧠 How It Works

User enters motor parameters in the UI

Frontend sends data to FastAPI backend

Backend loads trained ML model

Model predicts motor fault condition

Result is displayed on the UI

🐳 Docker Details

Frontend is built using Node and served via Nginx

Backend runs on FastAPI + Uvicorn

Containers communicate via Docker network

Ports exposed:

5173 → Frontend

8000 → Backend

📌 Notes

The ML model file (model.joblib) is included in the repository to ensure the app runs immediately after cloning.

No environment variables are required for basic local usage.

If ports 5173 or 8000 are busy, stop the conflicting services or update docker-compose.yml.

🧑‍💻 Run for Development

If you want to run without Docker (optional):

Backend
cd server
pip install -r requirements.txt
uvicorn app.main:app --reload

Frontend
cd client
npm install
npm run dev
