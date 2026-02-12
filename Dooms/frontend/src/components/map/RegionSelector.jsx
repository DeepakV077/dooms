const RegionSelector = ({ onChange }) => {
  const regions = [
    { name: "Bay of Bengal", coordinates: [13.08, 80.27] },
    { name: "Great Barrier Reef", coordinates: [-16.2, 145.8] },
    { name: "Mediterranean Sea", coordinates: [37.5, 15.5] },
    { name: "Arctic Ocean", coordinates: [80.0, 0.0] }
  ];

  return (
    <select
      onChange={(e) => onChange(JSON.parse(e.target.value))}
      className="border border-blue-200 rounded-xl px-4 py-2 bg-white cursor-pointer hover:border-blue-400 transition"
      defaultValue={JSON.stringify(regions[0])}
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
