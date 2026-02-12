import numpy as np
import pandas as pd
from datetime import datetime
import uuid

# In-memory storage for demo - replace with database
simulation_cache = {}

def run_simulation(data):
    """
    Run climate impact simulation
    """
    simulation_id = str(uuid.uuid4())
    
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

def get_simulation_results(simulation_id):
    """
    Retrieve simulation results by ID
    """
    if simulation_id in simulation_cache:
        return simulation_cache[simulation_id]
    else:
        raise ValueError(f"Simulation {simulation_id} not found")
