import os
import requests
from flask import Blueprint, request, jsonify
from dotenv import load_dotenv

load_dotenv()

chatbot_bp = Blueprint("chatbot", __name__)

CEREBRAS_API_KEY = os.getenv("CEREBRAS_API_KEY")
CEREBRAS_URL = "https://api.cerebras.ai/v1/chat/completions"

@chatbot_bp.route("", methods=["POST", "OPTIONS"])
def chat():
    # Handle CORS preflight requests
    if request.method == "OPTIONS":
        return {}, 200
    
    try:
        data = request.json
        user_message = data.get("message")

        headers = {
            "Authorization": f"Bearer {CEREBRAS_API_KEY}",
            "Content-Type": "application/json"
        }

        payload = {
            "model": "llama3.1-8b",
            "messages": [
                {"role": "system", "content": "You are a marine ecosystem AI assistant for V-Forge."},
                {"role": "user", "content": user_message}
            ],
            "max_tokens": 500,
            "temperature": 0.7
        }

        response = requests.post(CEREBRAS_URL, headers=headers, json=payload)
        result = response.json()

        return jsonify({
            "reply": result["choices"][0]["message"]["content"]
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500
