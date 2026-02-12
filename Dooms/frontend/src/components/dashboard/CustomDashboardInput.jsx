import { useState } from "react";
import { getDashboardData } from "../../services/dashboardService";

const CustomDashboardInput = ({ onDataSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    region: "Custom Region",
    stability: 75,
    speciesProbability: 70,
    hazardRisk: "Moderate",
    trend: [
      { year: "2025", temperature: 1.2, seaLevel: 0.4, salinity: 35 },
      { year: "2030", temperature: 1.5, seaLevel: 0.6, salinity: 35.4 },
      { year: "2035", temperature: 1.8, seaLevel: 0.8, salinity: 35.8 }
    ]
  });

  const [trendsData, setTrendsData] = useState(
    "2025|1.2|0.4|35\n2030|1.5|0.6|35.4\n2035|1.8|0.8|35.8"
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "stability" || name === "speciesProbability"
        ? Math.min(100, Math.max(0, parseInt(value) || 0))
        : value
    }));
  };

  const handleTrendsChange = (e) => {
    setTrendsData(e.target.value);
  };

  const parseTrendData = () => {
    const lines = trendsData.trim().split('\n');
    return lines.map(line => {
      const [year, temperature, seaLevel, salinity] = line.split('|');
      return {
        year: year?.trim() || "",
        temperature: parseFloat(temperature) || 0,
        seaLevel: parseFloat(seaLevel) || 0,
        salinity: parseFloat(salinity) || 0
      };
    }).filter(item => item.year);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trend = parseTrendData();

    const customData = {
      region: formData.region,
      stability: formData.stability,
      speciesProbability: formData.speciesProbability,
      hazardRisk: formData.hazardRisk,
      trend: trend
    };

    try {
      // Send custom data to backend (POST request)
      const response = await fetch("http://127.0.0.1:5000/api/dashboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customData)
      });

      if (response.ok) {
        const data = await response.json();
        onDataSubmit(data);
      }
    } catch (error) {
      console.error("Failed to submit custom dashboard data:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Custom Dashboard Input</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Region Name */}
          <div>
            <label className="block text-sm font-medium text-black/70 mb-2">
              Region Name
            </label>
            <input
              type="text"
              name="region"
              value={formData.region}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter region name"
            />
          </div>

          {/* Stability Score */}
          <div>
            <label className="block text-sm font-medium text-black/70 mb-2">
              Stability Score (0-100): {formData.stability}
            </label>
            <input
              type="range"
              name="stability"
              min="0"
              max="100"
              value={formData.stability}
              onChange={handleInputChange}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          {/* Species Probability */}
          <div>
            <label className="block text-sm font-medium text-black/70 mb-2">
              Species Probability (0-100): {formData.speciesProbability}%
            </label>
            <input
              type="range"
              name="speciesProbability"
              min="0"
              max="100"
              value={formData.speciesProbability}
              onChange={handleInputChange}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          {/* Hazard Risk */}
          <div>
            <label className="block text-sm font-medium text-black/70 mb-2">
              Hazard Risk Level
            </label>
            <select
              name="hazardRisk"
              value={formData.hazardRisk}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
          </div>

          {/* Trend Data */}
          <div>
            <label className="block text-sm font-medium text-black/70 mb-2">
              Trend Data (year|temperature|seaLevel|salinity)
            </label>
            <textarea
              value={trendsData}
              onChange={handleTrendsChange}
              rows="4"
              className="w-full px-4 py-2 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
              placeholder="2025|1.2|0.4|35&#10;2030|1.5|0.6|35.4&#10;2035|1.8|0.8|35.8"
            />
            <p className="text-xs text-black/50 mt-2">
              Format: year|temperature|seaLevel|salinity (one per line)
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
            >
              Submit Dashboard Data
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-black font-semibold py-3 rounded-xl transition"
            >
              Cancel
            </button>
          </div>
        </form>

        {/* Quick Templates */}
        <div className="mt-8 pt-6 border-t border-blue-100">
          <p className="text-sm font-semibold text-black/70 mb-3">Quick Templates:</p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setFormData(prev => ({...prev, region: "Bay of Bengal", stability: 82, speciesProbability: 76, hazardRisk: "Moderate"}));
              }}
              className="text-xs bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg transition border border-blue-200"
            >
              Bay of Bengal
            </button>
            <button
              onClick={() => {
                setFormData(prev => ({...prev, region: "Great Barrier Reef", stability: 62, speciesProbability: 68, hazardRisk: "High"}));
              }}
              className="text-xs bg-orange-50 hover:bg-orange-100 px-3 py-2 rounded-lg transition border border-orange-200"
            >
              Great Barrier Reef
            </button>
            <button
              onClick={() => {
                setFormData(prev => ({...prev, region: "Mediterranean Sea", stability: 71, speciesProbability: 74, hazardRisk: "Moderate"}));
              }}
              className="text-xs bg-cyan-50 hover:bg-cyan-100 px-3 py-2 rounded-lg transition border border-cyan-200"
            >
              Mediterranean
            </button>
            <button
              onClick={() => {
                setFormData(prev => ({...prev, region: "Arctic Ocean", stability: 45, speciesProbability: 52, hazardRisk: "Critical"}));
              }}
              className="text-xs bg-red-50 hover:bg-red-100 px-3 py-2 rounded-lg transition border border-red-200"
            >
              Arctic Ocean
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDashboardInput;
