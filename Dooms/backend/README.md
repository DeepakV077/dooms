# Doomsphere Backend

Flask-based REST API for climate impact visualization and species tracking.

## Setup

### 1. Create Virtual Environment
```bash
python -m venv venv
```

### 2. Activate Virtual Environment

**Windows:**
```bash
venv\Scripts\activate
```

**Mac/Linux:**
```bash
source venv/bin/activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Run the Server
```bash
python app.py
```

The API will be available at `http://127.0.0.1:5000`

## API Endpoints

### Species
- `GET /api/species/list?region=<region>` - Get species data
- `POST /api/species/predict` - Predict species impact

### Stability
- `POST /api/stability/score` - Calculate stability score
- `GET /api/stability/hazards?region=<region>` - Get hazard data

### Simulation
- `POST /api/simulation/run` - Run climate simulation
- `GET /api/simulation/results/<id>` - Get simulation results

### Chatbot
- `POST /api/chatbot/ask` - Ask AI assistant

## Project Structure
```
backend/
├── app.py              # Main Flask application
├── routes/             # API route handlers
├── services/           # Business logic
├── utils/              # Utility functions
├── models/             # ML models (add .pkl files here)
├── data/               # Sample data
└── requirements.txt    # Python dependencies
```
