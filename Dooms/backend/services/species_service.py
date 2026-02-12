import numpy as np
import pandas as pd
from utils.scoring import calculate_vulnerability_score

def get_species_data(region='global'):
    """
    Get species data for a given region
    """
    # Sample data - replace with actual database/model
    species_list = [
        {
            "id": 1,
            "name": "Polar Bear",
            "scientific_name": "Ursus maritimus",
            "habitat": "Arctic",
            "vulnerability_score": 0.85,
            "population_trend": "declining",
            "threats": ["habitat_loss", "food_scarcity"]
        },
        {
            "id": 2,
            "name": "Coral Reefs",
            "scientific_name": "Anthozoa",
            "habitat": "Tropical Oceans",
            "vulnerability_score": 0.92,
            "population_trend": "declining",
            "threats": ["ocean_acidification", "temperature_rise"]
        },
        {
            "id": 3,
            "name": "Amazon Rainforest Trees",
            "scientific_name": "Various",
            "habitat": "Amazon",
            "vulnerability_score": 0.78,
            "population_trend": "declining",
            "threats": ["deforestation", "drought"]
        }
    ]
    
    if region != 'global':
        species_list = [s for s in species_list if region.lower() in s['habitat'].lower()]
    
    return {"species": species_list, "count": len(species_list)}

def predict_species_impact(data):
    """
    Predict species impact based on environmental changes
    Using ML model or calculations
    """
    temperature_change = data.get('temperature_change', 0)
    precipitation_change = data.get('precipitation_change', 0)
    habitat_loss = data.get('habitat_loss', 0)
    
    # Simple calculation - replace with actual ML model
    impact_score = calculate_vulnerability_score({
        'temp': temperature_change,
        'precip': precipitation_change,
        'habitat': habitat_loss
    })
    
    return {
        "impact_score": impact_score,
        "severity": "high" if impact_score > 0.7 else "medium" if impact_score > 0.4 else "low",
        "recommendations": [
            "Monitor population closely",
            "Implement conservation measures",
            "Protect existing habitats"
        ]
    }
