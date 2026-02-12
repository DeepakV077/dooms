from flask import Blueprint, jsonify, request

dashboard_bp = Blueprint('dashboard', __name__)

@dashboard_bp.route('', methods=['GET', 'OPTIONS'])
def get_dashboard_data():
    """Get comprehensive dashboard metrics"""
    if request.method == 'OPTIONS':
        return {}, 200
    
    return jsonify({
        "stability": 82,
        "ecosystemHealth": "Moderate",
        "speciesProbability": 76,
        "hazardRisk": "Moderate",
        "climateImpact": {
            "temperatureRise": 1.8,
            "seaLevel": 0.7,
            "salinityShift": 0.4
        },
        "projections": [
            {"year": "2025", "temperature": 1.2, "riskLevel": 35},
            {"year": "2030", "temperature": 1.5, "riskLevel": 48},
            {"year": "2035", "temperature": 1.8, "riskLevel": 62},
            {"year": "2040", "temperature": 2.1, "riskLevel": 75},
            {"year": "2050", "temperature": 2.8, "riskLevel": 88}
        ],
        "topThreats": [
            {"name": "Ocean Acidification", "severity": 92},
            {"name": "Coral Bleaching", "severity": 88},
            {"name": "Temperature Rise", "severity": 85}
        ]
    }), 200
