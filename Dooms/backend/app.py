from flask import Flask
from flask_cors import CORS

from routes.species import species_bp
from routes.stability import stability_bp
from routes.simulation import simulation_bp
from routes.chatbot import chatbot_bp
from routes.dashboard import dashboard_bp

app = Flask(__name__)

# Disable strict slash enforcement to avoid redirects on CORS preflight
app.url_map.strict_slashes = False

# Configure CORS to allow requests from frontend
CORS(app, resources={
    r"/api/*": {
        "origins": ["http://localhost:5173", "http://127.0.0.1:5173", "http://localhost:3000"],
        "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"],
        "supports_credentials": True
    }
})

app.register_blueprint(species_bp, url_prefix="/api/species")
app.register_blueprint(stability_bp, url_prefix="/api/stability")
app.register_blueprint(simulation_bp, url_prefix="/api/simulation")
app.register_blueprint(chatbot_bp, url_prefix="/api/chatbot")
app.register_blueprint(dashboard_bp, url_prefix="/api/dashboard")

@app.route('/')
def home():
    return {"message": "Doomsphere API is running"}

if __name__ == "__main__":
    app.run(debug=True)
