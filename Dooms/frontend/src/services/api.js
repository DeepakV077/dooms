import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Species API
export const getSpeciesList = (region = 'global') => {
  return API.get(`/species/list?region=${region}`);
};

export const predictSpeciesImpact = (data) => {
  return API.post('/species/predict', data);
};

// Stability API
export const getStabilityScore = (data) => {
  return API.post('/stability/score', data);
};

export const getHazards = (region = 'global') => {
  return API.get(`/stability/hazards?region=${region}`);
};

// Simulation API
export const runSimulation = (data) => {
  return API.post('/simulation/run', data);
};

export const getSimulationResults = (simulationId) => {
  return API.get(`/simulation/results/${simulationId}`);
};

// Chatbot API
export const askChatbot = (question) => {
  return API.post('/chatbot/ask', { question });
};

export default API;
