import numpy as np
import pandas as pd
from utils.scoring import calculate_ecosystem_stability

def calculate_stability_score(data):
    """
    Calculate ecosystem stability score based on various factors
    """
    biodiversity = data.get('biodiversity', 0.5)
    climate_resilience = data.get('climate_resilience', 0.5)
    species_interdependence = data.get('species_interdependence', 0.5)
    
    stability_score = calculate_ecosystem_stability({
        'biodiversity': biodiversity,
        'resilience': climate_resilience,
        'interdependence': species_interdependence
    })
    
    return {
        "stability_score": stability_score,
        "status": "stable" if stability_score > 0.7 else "at_risk" if stability_score > 0.4 else "critical",
        "factors": {
            "biodiversity": biodiversity,
            "climate_resilience": climate_resilience,
            "species_interdependence": species_interdependence
        }
    }

def get_hazard_data(region='global'):
    """
    Get hazard data for a specific region
    """
    # Sample hazard data - replace with actual data source
    hazards = [
        {
            "type": "drought",
            "severity": 0.75,
            "affected_areas": ["Sub-Saharan Africa", "Mediterranean"],
            "impact": "Water scarcity, crop failure"
        },
        {
            "type": "flooding",
            "severity": 0.68,
            "affected_areas": ["Southeast Asia", "Coastal regions"],
            "impact": "Habitat destruction, displacement"
        },
        {
            "type": "heatwave",
            "severity": 0.82,
            "affected_areas": ["Europe", "North America"],
            "impact": "Species stress, ecosystem disruption"
        },
        {
            "type": "ocean_acidification",
            "severity": 0.90,
            "affected_areas": ["Global oceans"],
            "impact": "Coral bleaching, marine life decline"
        }
    ]
    
    if region != 'global':
        hazards = [h for h in hazards if region in str(h['affected_areas'])]
    
    return {"hazards": hazards, "count": len(hazards)}
