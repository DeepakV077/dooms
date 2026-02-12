import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [baselineData, setBaselineData] = useState(null);
  const [simulationParams, setSimulationParams] = useState({
    temperatureIncrease: 0,
    seaLevelRise: 0,
    salinityShift: 0,
  });
  const [results, setResults] = useState(null);

  return (
    <AppContext.Provider
      value={{
        location,
        setLocation,
        baselineData,
        setBaselineData,
        simulationParams,
        setSimulationParams,
        results,
        setResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
