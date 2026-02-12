import numpy as np
import pandas as pd

def preprocess_climate_data(data):
    """
    Preprocess climate data for model input
    """
    # Normalize temperature values
    if 'temperature' in data:
        data['temperature_normalized'] = (data['temperature'] - 15) / 10
    
    # Normalize precipitation
    if 'precipitation' in data:
        data['precipitation_normalized'] = data['precipitation'] / 1000
    
    return data

def clean_species_data(species_df):
    """
    Clean and validate species data
    """
    # Remove duplicates
    species_df = species_df.drop_duplicates()
    
    # Fill missing values
    species_df['vulnerability_score'] = species_df['vulnerability_score'].fillna(0.5)
    
    # Validate ranges
    species_df['vulnerability_score'] = species_df['vulnerability_score'].clip(0, 1)
    
    return species_df

def aggregate_regional_data(data, region):
    """
    Aggregate data by region
    """
    if isinstance(data, pd.DataFrame):
        return data[data['region'] == region]
    return data

def format_time_series(data, frequency='monthly'):
    """
    Format time series data
    """
    if isinstance(data, pd.DataFrame) and 'date' in data.columns:
        data['date'] = pd.to_datetime(data['date'])
        data = data.sort_values('date')
    
    return data
