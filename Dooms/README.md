# 🌍 Doomsphere - Climate Impact Visualization Platform

Interactive platform for visualizing climate change impacts on ecosystems and species.

## 🏗️ Architecture

```
React (UI)
    ↓
Flask REST API
    ↓
ML Logic (NumPy + Pandas)
    ↓
Pretrained Models (.pkl)
```

## 🚀 Quick Start

### Backend Setup

1. **Navigate to backend folder**
```bash
cd backend
```

2. **Create virtual environment**
```bash
python -m venv venv
```

3. **Activate virtual environment**

**Windows:**
```bash
venv\Scripts\activate
```

**Mac/Linux:**
```bash
source venv/bin/activate
```

4. **Install dependencies**
```bash
pip install -r requirements.txt
```

5. **Run Flask server**
```bash
python app.py
```

Backend will run on `http://127.0.0.1:5000`

---

### Frontend Setup

1. **Navigate to frontend folder**
```bash
cd frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

---

## 📁 Project Structure

```
Dooms/
│
├── backend/                    # Flask REST API
│   ├── app.py                 # Main Flask application
│   ├── routes/                # API endpoints
│   │   ├── species.py
│   │   ├── stability.py
│   │   ├── simulation.py
│   │   └── chatbot.py
│   ├── services/              # Business logic
│   │   ├── species_service.py
│   │   ├── stability_service.py
│   │   ├── simulation_service.py
│   │   └── chatbot_service.py
│   ├── utils/                 # Utility functions
│   │   ├── preprocessing.py
│   │   └── scoring.py
│   ├── models/                # ML models (.pkl files)
│   ├── data/                  # Sample data
│   └── requirements.txt
│
└── frontend/                  # React UI
    ├── src/
    │   ├── components/        # React components
    │   │   ├── ai/           # AI Assistant
    │   │   ├── cards/        # Data cards
    │   │   ├── layout/       # Layout components
    │   │   ├── map/          # Map visualizations
    │   │   └── simulation/   # Simulation components
    │   ├── pages/            # Page components
    │   ├── services/         # API services
    │   ├── hooks/            # Custom hooks
    │   └── context/          # React context
    └── package.json
```

## 🔌 API Endpoints

### Species
- `GET /api/species/list?region=<region>` - Get species data
- `POST /api/species/predict` - Predict species impact

### Stability
- `POST /api/stability/score` - Calculate ecosystem stability
- `GET /api/stability/hazards?region=<region>` - Get hazard data

### Simulation
- `POST /api/simulation/run` - Run climate simulation
- `GET /api/simulation/results/<id>` - Get simulation results

### Chatbot
- `POST /api/chatbot/ask` - Ask AI assistant

## 🛠️ Tech Stack

### Backend
- Flask - Web framework
- Flask-CORS - Cross-origin resource sharing
- NumPy - Numerical computing
- Pandas - Data manipulation
- scikit-learn - Machine learning
- joblib - Model persistence

### Frontend
- React - UI library
- Vite - Build tool
- Tailwind CSS - Styling
- Axios - HTTP client
- React Router - Routing
- Zustand - State management
- Day.js - Date handling

## 📝 Development Workflow

1. **Start Backend** (Terminal 1)
```bash
cd backend
venv\Scripts\activate  # Windows
python app.py
```

2. **Start Frontend** (Terminal 2)
```bash
cd frontend
npm run dev
```

3. **Access Application**
- Frontend: http://localhost:5173
- Backend API: http://127.0.0.1:5000

## 🎯 Features

- 🌡️ Climate impact simulation
- 🐾 Species vulnerability tracking
- 🗺️ Interactive map visualizations
- 📊 Real-time stability scoring
- 🤖 AI-powered assistant
- 📈 Data visualization dashboards

## 🤝 Contributing

This is a hackathon project. Feel free to extend and improve!

## 📄 License

MIT License
