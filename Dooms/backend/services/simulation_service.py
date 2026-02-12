import numpy as np
import pandas as pd
from datetime import datetime
import uuid

# In-memory storage for demo - replace with database
simulation_cache = {}

def run_simulation(data):
    """
    Run climate impact simulation or marine species prediction
    """
    simulation_id = str(uuid.uuid4())
    
    # Check if this is a marine prediction (has latitude/longitude)
    if 'latitude' in data and 'longitude' in data:
        return run_marine_prediction(simulation_id, data)
    
    # Otherwise, it's a climate simulation
    # Extract parameters
    years = data.get('years', 10)
    temperature_increase = data.get('temperature_increase', 2.0)
    emission_scenario = data.get('emission_scenario', 'moderate')
    region = data.get('region', 'global')
    
    # Run simulation (simplified)
    timeline = []
    for year in range(years + 1):
        temp_change = (temperature_increase / years) * year
        species_loss = min(0.95, 0.1 * temp_change + np.random.uniform(-0.05, 0.05))
        ecosystem_stability = max(0.05, 1.0 - (0.15 * temp_change) + np.random.uniform(-0.05, 0.05))
        
        timeline.append({
            "year": year,
            "temperature_change": round(temp_change, 2),
            "species_loss_percentage": round(species_loss * 100, 2),
            "ecosystem_stability": round(ecosystem_stability, 2),
            "sea_level_rise_cm": round(year * 0.3 * (temperature_increase / 2), 1)
        })
    
    result = {
        "simulation_id": simulation_id,
        "parameters": {
            "years": years,
            "temperature_increase": temperature_increase,
            "emission_scenario": emission_scenario,
            "region": region
        },
        "timeline": timeline,
        "summary": {
            "total_species_loss": round(timeline[-1]["species_loss_percentage"], 2),
            "final_stability": round(timeline[-1]["ecosystem_stability"], 2),
            "total_sea_level_rise": round(timeline[-1]["sea_level_rise_cm"], 1)
        },
        "created_at": datetime.now().isoformat()
    }
    
    # Cache result
    simulation_cache[simulation_id] = result
    
    return result

def run_marine_prediction(simulation_id, data):
    """
    Run marine species suitability prediction with environmental parameters
    """
    # Extract marine parameters
    latitude = float(data.get('latitude', 0))
    longitude = float(data.get('longitude', 0))
    temperature = float(data.get('temperature', 15))
    salinity = float(data.get('salinity', 35))
    depth = float(data.get('depth', 100))
    chlorophyll = float(data.get('chlorophyll', 1.0))
    density = float(data.get('density', 1025))
    trend_index = float(data.get('trendIndex', 0.5))
    
    # Normalize parameters for scoring
    temp_score = max(0, min(100, 50 + (temperature - 15) * 5))
    salinity_score = max(0, min(100, 100 - abs(salinity - 35) * 3))
    depth_score = max(0, min(100, 100 - (depth / 5000) * 50))
    chlorophyll_score = max(0, min(100, chlorophyll * 20))
    density_score = max(0, min(100, 100 - abs(density - 1025) * 0.1))
    
    # Calculate overall suitability
    suitability_probability = int((temp_score + salinity_score + depth_score + chlorophyll_score + density_score) / 5)
    
    # Generate species list with suitability scores
    species_list = [
        {"name": "Great White Shark", "score": max(20, suitability_probability - 15)},
        {"name": "Sea Turtle", "score": max(25, suitability_probability - 10)},
        {"name": "Coral Polyp", "score": max(30, min(80, suitability_probability + 10))},
        {"name": "Tuna", "score": max(35, suitability_probability - 5)},
        {"name": "Dolphin", "score": max(40, suitability_probability)},
        {"name": "Jellyfish", "score": max(50, suitability_probability + 20)},
        {"name": "Crab", "score": max(45, suitability_probability + 5)},
        {"name": "Octopus", "score": max(38, suitability_probability - 8)},
    ]
    
    # Sort by score
    species_list.sort(key=lambda x: x['score'], reverse=True)
    
    result = {
        "simulation_id": simulation_id,
        "type": "marine_prediction",
        "parameters": {
            "latitude": latitude,
            "longitude": longitude,
            "temperature": temperature,
            "salinity": salinity,
            "depth": depth,
            "chlorophyll": chlorophyll,
            "density": density,
            "trendIndex": trend_index
        },
        "suitabilityProbability": suitability_probability,
        "habitatStability": max(20, min(95, suitability_probability - int(trend_index * 20))),
        "environmentalQuality": max(0, min(100, (temp_score + salinity_score + depth_score) / 3)),
        "speciesFullList": species_list,
        "created_at": datetime.now().isoformat()
    }
    
    # Cache result
    simulation_cache[simulation_id] = result
    
    return result

def get_simulation_results(simulation_id):
    """
    Retrieve simulation results by ID
    """
    if simulation_id in simulation_cache:
        return simulation_cache[simulation_id]
    else:
        raise ValueError(f"Simulation {simulation_id} not found")
