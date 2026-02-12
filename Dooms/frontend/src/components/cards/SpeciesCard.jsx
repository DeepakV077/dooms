import Card from './reusablecard';

const SpeciesCard = ({ probability = 76 }) => {
  const displayProb = probability ?? 76;

  return (
    <Card title="Species Suitability">
      <div className="text-4xl font-bold text-blue-600">
        {displayProb}%
      </div>
    </Card>
  );
};

export default SpeciesCard;
