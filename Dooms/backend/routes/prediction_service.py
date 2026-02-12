import numpy as np
import joblib

model = joblib.load("models/multispecies_model.pkl")

def run_species_prediction(data):

    features = np.array([[
        float(data["temperature"]),
        float(data["salinity"]),
        float(data["depth"]),
        float(data["chlorophyll"]),
        float(data["trendIndex"])
    ]])

    probabilities = model.predict_proba(features)[0]
    species_names = model.classes_

    ranked_species = sorted(
        [
            {"name": species_names[i], "score": round(probabilities[i] * 100, 2)}
            for i in range(len(species_names))
        ],
        key=lambda x: x["score"],
        reverse=True
    )

    suitability_probability = ranked_species[0]["score"]

    return {
        "suitabilityProbability": suitability_probability,
        "habitatStabilityScore": 82,  # from stability model later
        "speciesFullList": ranked_species
    }
