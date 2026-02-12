import { useState, useEffect } from "react";
import { getDashboardData } from "../services/dashboardService";

import RegionSelector from "../components/map/RegionSelector";
import MapView from "../components/map/MapView";
import AIInsightPanel from "../components/insights/AIInsightPanel";
import EnvironmentalTrendChart from "../components/charts/EnvironmentalTrendChart";
import StabilityCard from "../components/cards/StabilityCard";
import SpeciesCard from "../components/cards/SpeciesCard";
import HazardCard from "../components/cards/HazardCard";

const Dashboard = () => {
  const [region, setRegion] = useState({
    name: "Bay of Bengal",
    coordinates: [13.08, 80.27]
  });

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔷 Dynamic Fetch on Region Change
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await getDashboardData(region.name);
      setData(response);
      setLoading(false);
    };

    fetchData();
  }, [region]);

  return (
    <div className="min-h-screen bg-white py-10 px-6">
      <div className="container mx-auto max-w-7xl space-y-10">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-blue-600">
              V-Forge Enterprise Climate Dashboard
            </h1>
            <p className="text-black/60 mt-1">
              Dynamic ecosystem intelligence & predictive analytics
            </p>
          </div>

          <RegionSelector onChange={setRegion} />
        </div>

        {/* ================= LOADING STATE ================= */}
        {loading ? (
          <div className="text-center py-20 text-black/60">
            Loading climate intelligence...
          </div>
        ) : (
          <>
            {/* ================= KPI CARDS ================= */}
            <div className="grid md:grid-cols-3 gap-8">
              <StabilityCard score={data.stability} />
              <SpeciesCard probability={data.speciesProbability} />
              <HazardCard risk={data.hazardRisk} />
            </div>

            {/* ================= AI INSIGHT ================= */}
            <AIInsightPanel data={data} />

            {/* ================= MAP ================= */}
            <div
              key={region.name}
              className="animate-fadeIn"
            >
              <MapView region={region} />
            </div>

            {/* ================= TREND ANALYTICS ================= */}
            <EnvironmentalTrendChart data={data.trend} />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
