import { getSpeciesList, predictSpeciesImpact } from './api';

export const fetchSpecies = async (region = 'global') => {
  try {
    const response = await getSpeciesList(region);
    return response.data;
  } catch (error) {
    console.error('Error fetching species:', error);
    throw error;
  }
};

export const calculateSpeciesImpact = async (data) => {
  try {
    const response = await predictSpeciesImpact(data);
    return response.data;
  } catch (error) {
    console.error('Error calculating species impact:', error);
    throw error;
  }
};

export const formatSpeciesData = (species) => {
  return species.map(s => ({
    ...s,
    vulnerabilityLevel: s.vulnerability_score >= 0.8 ? 'critical' : 
                       s.vulnerability_score >= 0.6 ? 'high' : 
                       s.vulnerability_score >= 0.4 ? 'medium' : 'low'
  }));
};
