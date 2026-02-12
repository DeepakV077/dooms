import { useEffect, useState } from "react";
import { getDashboardData } from "../services/dashboardService";
import ClimateImpactCard from "../components/cards/ClimateImpactCard";
import HazardCard from "../components/cards/HazardCard";
import SpeciesCard from "../components/cards/SpeciesCard";
import StabilityCard from "../components/cards/StabilityCard";
import MapView from "../components/map/MapView";
import MigrationOverlay from "../components/map/MigrationOverlay";
import RiskHeatmap from "../components/map/RiskHeatmap";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDashboardData();
        setData(response);
      } catch (err) {
        console.error("Failed to fetch dashboard data:", err);
        setError(err.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white py-12 px-6 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-blue-600 font-medium">Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white py-12 px-6 flex items-center justify-center">
        <div className="text-center text-red-600">
          <p className="font-semibold mb-2">Failed to load dashboard</p>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="container mx-auto max-w-7xl space-y-12">

        {/* ================= HEADER ================= */}
        <div>
          <h1 className="text-3xl font-bold text-blue-600">
            Climate Intelligence Dashboard
          </h1>
          <p className="text-black/70 mt-2">
            Real-time ecosystem stability, species prediction, and coastal risk analytics.
          </p>
        </div>

        {/* ================= MAP SECTION ================= */}
        <div
          className="bg-white border border-blue-100 rounded-3xl shadow-lg p-6 animate-fadeIn"
        >
          <MapView />
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <MigrationOverlay />
            <RiskHeatmap />
          </div>
        </div>

        {/* ================= METRIC CARDS ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StabilityCard score={data?.stability} />
          <SpeciesCard probability={data?.speciesProbability} />
          <HazardCard risk={data?.hazardRisk} />
          <ClimateImpactCard impact={data?.climateImpact} />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
