const RegionSelector = ({ onChange }) => {
  const regions = [
    { name: "Bay of Bengal", coordinates: [13.08, 80.27] },
    { name: "Arabian Sea", coordinates: [15.3, 73.8] },
    { name: "Pacific Coral Zone", coordinates: [-15.5, 145.2] }
  ];

  return (
    <select
      onChange={(e) => onChange(JSON.parse(e.target.value))}
      className="border border-blue-200 rounded-xl px-4 py-2"
    >
      {regions.map((r) => (
        <option key={r.name} value={JSON.stringify(r)}>
          {r.name}
        </option>
      ))}
    </select>
  );
};

export default RegionSelector;
