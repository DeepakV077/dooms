import numpy as np

def calculate_vulnerability_score(factors):
    """
    Calculate vulnerability score based on multiple factors
    """
    temp_impact = factors.get('temp', 0) * 0.4
    precip_impact = factors.get('precip', 0) * 0.3
    habitat_impact = factors.get('habitat', 0) * 0.3
    
    score = min(1.0, abs(temp_impact) + abs(precip_impact) + abs(habitat_impact))
    return round(score, 3)

def calculate_ecosystem_stability(factors):
    """
    Calculate ecosystem stability score
    """
    biodiversity = factors.get('biodiversity', 0.5)
    resilience = factors.get('resilience', 0.5)
    interdependence = factors.get('interdependence', 0.5)
    
    # Weighted average
    stability = (biodiversity * 0.4 + resilience * 0.35 + interdependence * 0.25)
    
    return round(stability, 3)

def calculate_climate_impact(temperature_change, time_horizon):
    """
    Calculate climate impact over time
    """
    # Exponential impact model
    base_impact = 0.1
    impact = base_impact * (1 + temperature_change) ** (time_horizon / 10)
    
    return min(1.0, round(impact, 3))

def calculate_species_loss_rate(current_loss, temperature_increase):
    """
    Calculate species loss rate based on temperature increase
    """
    # Research-based approximation: ~10% species loss per 1°C
    loss_rate = current_loss + (temperature_increase * 0.10)
    
    return min(1.0, round(loss_rate, 3))

def calculate_risk_score(hazard_severity, exposure, vulnerability):
    """
    Calculate overall risk score
    Risk = Hazard × Exposure × Vulnerability
    """
    risk = hazard_severity * exposure * vulnerability
    
    return round(risk, 3)

def normalize_score(value, min_val=0, max_val=100):
    """
    Normalize a score to 0-1 range
    """
    if max_val == min_val:
        return 0.5
    
    normalized = (value - min_val) / (max_val - min_val)
    return round(max(0, min(1, normalized)), 3)
