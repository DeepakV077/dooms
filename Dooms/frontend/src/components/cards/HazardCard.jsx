import Card from './reusablecard';

const HazardCard = ({ risk = "Moderate" }) => {
  const displayRisk = risk ?? "Moderate";
  
  const riskColor = 
    displayRisk === "High" ? "text-red-600" :
    displayRisk === "Moderate" ? "text-orange-500" :
    "text-green-600";

  return (
    <Card title="Coastal Hazard Risk">
      <div className={`text-3xl font-semibold ${riskColor}`}>
        {displayRisk}
      </div>
    </Card>
  );
};

export default HazardCard;
