import { useState, useEffect, useCallback } from 'react';
import { fetchSpecies, calculateSpeciesImpact } from '../services/speciesService';

export const useSpecies = (region = 'global') => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [species, setSpecies] = useState([]);
  const [count, setCount] = useState(0);

  const loadSpecies = useCallback(async (newRegion) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchSpecies(newRegion || region);
      setSpecies(data.species || []);
      setCount(data.count || 0);
      return data;
    } catch (err) {
      setError(err.message || 'Failed to load species');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [region]);

  const predictImpact = useCallback(async (impactData) => {
    setLoading(true);
    setError(null);
    
    try {
      const prediction = await calculateSpeciesImpact(impactData);
      return prediction;
    } catch (err) {
      setError(err.message || 'Failed to predict impact');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadSpecies(region);
  }, [region, loadSpecies]);

  return {
    loading,
    error,
    species,
    count,
    loadSpecies,
    predictImpact
  };
};

export default useSpecies;
