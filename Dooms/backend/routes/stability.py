from flask import Blueprint, request, jsonify
from services.stability_service import calculate_stability_score, get_hazard_data

stability_bp = Blueprint('stability', __name__)

@stability_bp.route('/score', methods=['POST'])
def get_stability_score():
    """Calculate ecosystem stability score"""
    try:
        data = request.json
        score = calculate_stability_score(data)
        return jsonify(score), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@stability_bp.route('/hazards', methods=['GET'])
def get_hazards():
    """Get hazard data for a region"""
    try:
        region = request.args.get('region', 'global')
        hazards = get_hazard_data(region)
        return jsonify(hazards), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
