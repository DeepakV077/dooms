from flask import Blueprint, jsonify, request

dashboard_bp = Blueprint('dashboard', __name__)

# Region-specific data mapping
REGION_DATA = {
    "Bay of Bengal": {
        "stability": 82,
        "speciesProbability": 76,
        "hazardRisk": "Moderate",
        "trend": [
            {"year": "2025", "temperature": 1.2, "seaLevel": 0.4, "salinity": 35},
            {"year": "2030", "temperature": 1.5, "seaLevel": 0.6, "salinity": 35.4},
            {"year": "2035", "temperature": 1.8, "seaLevel": 0.8, "salinity": 35.8}
        ]
    },
    "Great Barrier Reef": {
        "stability": 62,
        "speciesProbability": 68,
        "hazardRisk": "High",
        "trend": [
            {"year": "2025", "temperature": 1.3, "seaLevel": 0.45, "salinity": 35.2},
            {"year": "2030", "temperature": 1.7, "seaLevel": 0.65, "salinity": 35.5},
            {"year": "2035", "temperature": 2.1, "seaLevel": 0.9, "salinity": 36.0}
        ]
    },
    "Mediterranean Sea": {
        "stability": 71,
        "speciesProbability": 74,
        "hazardRisk": "Moderate",
        "trend": [
            {"year": "2025", "temperature": 1.1, "seaLevel": 0.35, "salinity": 38.5},
            {"year": "2030", "temperature": 1.4, "seaLevel": 0.55, "salinity": 38.8},
            {"year": "2035", "temperature": 1.7, "seaLevel": 0.75, "salinity": 39.2}
        ]
    },
    "Arctic Ocean": {
        "stability": 45,
        "speciesProbability": 52,
        "hazardRisk": "Critical",
        "trend": [
            {"year": "2025", "temperature": 2.5, "seaLevel": 0.8, "salinity": 32.0},
            {"year": "2030", "temperature": 3.2, "seaLevel": 1.1, "salinity": 31.5},
            {"year": "2035", "temperature": 4.1, "seaLevel": 1.5, "salinity": 31.0}
        ]
    }
}

@dashboard_bp.route('', methods=['GET', 'POST', 'OPTIONS'])
def get_dashboard_data():
    """Get dynamic dashboard metrics - supports both region lookup and manual input"""
    if request.method == 'OPTIONS':
        return {}, 200
    
    # Handle POST request with manual input
    if request.method == 'POST':
        data = request.get_json()
        
        # Validate required fields
        stability = data.get('stability')
        species_probability = data.get('speciesProbability')
        hazard_risk = data.get('hazardRisk')
        trend = data.get('trend', [])
        region = data.get('region', 'Custom Region')
        
        # Validate data types
        if stability is not None and isinstance(stability, (int, float)):
            stability = min(100, max(0, stability))
        else:
            stability = 50
            
        if species_probability is not None and isinstance(species_probability, (int, float)):
            species_probability = min(100, max(0, species_probability))
        else:
            species_probability = 50
            
        if not isinstance(hazard_risk, str):
            hazard_risk = "Moderate"
        
        return jsonify({
            "region": region,
            "stability": stability,
            "speciesProbability": species_probability,
            "hazardRisk": hazard_risk,
            "trend": trend if isinstance(trend, list) else []
        }), 200
    
    # Handle GET request with region parameter
    region = request.args.get('region', 'Bay of Bengal')
    
    # Get region-specific data or default to Bay of Bengal
    region_data = REGION_DATA.get(region, REGION_DATA['Bay of Bengal'])
    
    return jsonify({
        "region": region,
        "stability": region_data["stability"],
        "speciesProbability": region_data["speciesProbability"],
        "hazardRisk": region_data["hazardRisk"],
        "trend": region_data["trend"]
    }), 200
