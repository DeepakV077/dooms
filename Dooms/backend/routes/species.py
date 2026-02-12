from flask import Blueprint, request, jsonify
from services.species_service import get_species_data, predict_species_impact

species_bp = Blueprint('species', __name__)

@species_bp.route('/list', methods=['GET'])
def list_species():
    """Get list of species with vulnerability data"""
    try:
        region = request.args.get('region', 'global')
        species = get_species_data(region)
        return jsonify(species), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@species_bp.route('/predict', methods=['POST'])
def predict_impact():
    """Predict species impact based on environmental changes"""
    try:
        data = request.json
        prediction = predict_species_impact(data)
        return jsonify(prediction), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
