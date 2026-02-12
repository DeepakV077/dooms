import { useState, useCallback } from 'react';
import { runSimulation, getSimulationResults } from '../services/api';

export const useSimulation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState(null);

  const startSimulation = useCallback(async (params) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await runSimulation(params);
      setResults(response.data);
      return response.data;
    } catch (err) {
      setError(err.message || 'Failed to run simulation');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchResults = useCallback(async (simulationId) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await getSimulationResults(simulationId);
      setResults(response.data);
      return response.data;
    } catch (err) {
      setError(err.message || 'Failed to fetch results');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const resetSimulation = useCallback(() => {
    setResults(null);
    setError(null);
  }, []);

  return {
    loading,
    error,
    results,
    startSimulation,
    fetchResults,
    resetSimulation
  };
};

export default useSimulation;
