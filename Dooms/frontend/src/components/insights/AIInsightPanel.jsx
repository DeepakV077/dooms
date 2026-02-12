const AIInsightPanel = ({ data }) => {
  if (!data) return null;

  const { stability, speciesProbability, hazardRisk } = data;

  const generateInsight = () => {
    if (stability > 80 && hazardRisk === "Low")
      return "Marine ecosystem shows strong resilience under current climate conditions.";
    if (hazardRisk === "High")
      return "Coastal regions are vulnerable. Immediate mitigation planning recommended.";
    return "Ecosystem shows moderate stress. Monitoring advised.";
  };

  return (
    <div className="bg-white border border-blue-100 rounded-3xl shadow-lg p-8 animate-fadeIn">
      <h3 className="text-blue-600 font-semibold text-xl mb-4">
        AI Climate Insight Summary
      </h3>

      <p className="text-black/80 leading-relaxed">
        {generateInsight()}
      </p>

      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-sm text-black/60">Stability</p>
          <p className="text-lg font-semibold text-blue-600">
            {stability}
          </p>
        </div>
        <div>
          <p className="text-sm text-black/60">Suitability</p>
          <p className="text-lg font-semibold text-blue-600">
            {speciesProbability}%
          </p>
        </div>
        <div>
          <p className="text-sm text-black/60">Hazard</p>
          <p className="text-lg font-semibold text-orange-500">
            {hazardRisk}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIInsightPanel;
