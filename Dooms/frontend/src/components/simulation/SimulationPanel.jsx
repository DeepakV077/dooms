import { useAppContext } from "../../context/AppContext";
import { runSimulation } from "../../services/simulationService";

const SimulationPanel = () => {
  const {
    simulationParams,
    setSimulationParams,
    location,
    setResults,
  } = useAppContext();

  const handleRun = async () => {
    if (!location) return;

    const response = await runSimulation({
      latitude: location.lat,
      longitude: location.lon,
      ...simulationParams,
    });

    setResults(response);
  };

  return (
    <div className="bg-slate-900 p-6 rounded-2xl shadow-lg space-y-4">
      <h2 className="text-lg font-semibold text-emerald-400">
        Climate Simulation
      </h2>

      <input
        type="range"
        min="0"
        max="5"
        value={simulationParams.temperatureIncrease}
        onChange={(e) =>
          setSimulationParams({
            ...simulationParams,
            temperatureIncrease: Number(e.target.value),
          })
        }
        className="w-full"
      />

      <button
        onClick={handleRun}
        className="w-full bg-emerald-500 hover:bg-emerald-600 transition py-2 rounded-xl font-semibold"
      >
        Run Simulation
      </button>
    </div>
  );
};

export default SimulationPanel;
