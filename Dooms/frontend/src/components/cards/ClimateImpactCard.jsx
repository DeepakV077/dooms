import Card from './reusablecard';

const ClimateImpactCard = ({ impact = null }) => {
  const data = impact ?? {
    temperatureRise: 1.8,
    seaLevel: 0.7,
    salinityShift: 0.4
  };

  return (
    <Card title="Climate Impact Projection">
      <div className="space-y-2 text-black/80">
        <p>+{data.temperatureRise}°C Temp Rise</p>
        <p>+{data.seaLevel}m Sea Level</p>
        <p>Salinity Shift: +{data.salinityShift} PSU</p>
      </div>
    </Card>
  );
};

export default ClimateImpactCard;
