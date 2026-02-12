import { useState, useCallback } from 'react';
import { getStabilityScore, getHazards } from '../services/api';

export const useStability = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [stabilityData, setStabilityData] = useState(null);
  const [hazards, setHazards] = useState([]);

  const calculateStability = useCallback(async (data) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await getStabilityScore(data);
      setStabilityData(response.data);
      return response.data;
    } catch (err) {
      setError(err.message || 'Failed to calculate stability');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const loadHazards = useCallback(async (region = 'global') => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await getHazards(region);
      setHazards(response.data.hazards || []);
      return response.data;
    } catch (err) {
      setError(err.message || 'Failed to load hazards');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    stabilityData,
    hazards,
    calculateStability,
    loadHazards
  };
};

export default useStability;
