from flask import Blueprint, request, jsonify
from services.simulation_service import run_simulation, get_simulation_results

simulation_bp = Blueprint('simulation', __name__)

@simulation_bp.route('/run', methods=['POST'])
def run_climate_simulation():
    """Run climate impact simulation"""
    try:
        data = request.json
        result = run_simulation(data)
        return jsonify(result), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@simulation_bp.route('/results/<simulation_id>', methods=['GET'])
def get_results(simulation_id):
    """Get simulation results by ID"""
    try:
        results = get_simulation_results(simulation_id)
        return jsonify(results), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
