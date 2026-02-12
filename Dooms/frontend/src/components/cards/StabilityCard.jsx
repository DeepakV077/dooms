import Card from './reusablecard';

const StabilityCard = ({ score = 82 }) => {
  const displayScore = score ?? 82;

  const color =
    displayScore > 80 ? "text-blue-600" :
    displayScore > 50 ? "text-orange-500" :
    "text-black";

  return (
    <Card title="Ocean Stability Index">
      <div className={`text-4xl font-bold ${color}`}>
        {displayScore}
      </div>
    </Card>
  );
};

export default StabilityCard;
