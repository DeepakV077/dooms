const EnvironmentalTrendChart = ({ data }) => {
  if (!data || data.length === 0) return null;

  // Find min/max values for scaling
  const temperatures = data.map(d => d.temperature);
  const seaLevels = data.map(d => d.seaLevel);
  const salinities = data.map(d => d.salinity);
  
  const maxTemp = Math.max(...temperatures);
  const maxSea = Math.max(...seaLevels);
  const maxSalinity = Math.max(...salinities);

  // Normalize values (0-100 scale for SVG)
  const normalize = (value, max) => (value / max) * 100;

  const chartHeight = 300;
  const chartWidth = 100;
  const pointSpacing = 100 / (data.length - 1);

  return (
    <div className="bg-white border border-blue-100 rounded-3xl shadow-lg p-8">
      <h3 className="text-blue-600 font-semibold text-lg mb-6">
        Environmental Trend Analytics (2025-2035)
      </h3>

      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${pointSpacing * (data.length - 1) + 60} ${chartHeight + 80}`} 
             className="w-full min-w-[600px] h-[400px]">
          {/* Y Axis */}
          <line x1="40" y1="20" x2="40" y2={chartHeight + 20} stroke="#ccc" strokeWidth="1" />
          
          {/* X Axis */}
          <line x1="40" y1={chartHeight + 20} x2={pointSpacing * (data.length - 1) + 40} y2={chartHeight + 20} stroke="#ccc" strokeWidth="1" />

          {/* Grid lines & labels */}
          {data.map((item, idx) => (
            <g key={`grid-${idx}`}>
              <line 
                x1={40 + idx * pointSpacing} 
                y1="20" 
                x2={40 + idx * pointSpacing} 
                y2={chartHeight + 20} 
                stroke="#f0f0f0" 
                strokeWidth="1" 
              />
              <text 
                x={40 + idx * pointSpacing} 
                y={chartHeight + 45} 
                textAnchor="middle" 
                fontSize="12" 
                fill="#666"
              >
                {item.year}
              </text>
            </g>
          ))}

          {/* Temperature Line (Blue) */}
          <polyline
            points={data.map((item, idx) => 
              `${40 + idx * pointSpacing},${chartHeight + 20 - normalize(item.temperature, maxTemp) * (chartHeight / 100)}`
            ).join(' ')}
            fill="none"
            stroke="#0046FF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Sea Level Line (Orange) */}
          <polyline
            points={data.map((item, idx) => 
              `${40 + idx * pointSpacing},${chartHeight + 20 - normalize(item.seaLevel, maxSea) * (chartHeight / 100)}`
            ).join(' ')}
            fill="none"
            stroke="#FF9013"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Salinity Line (Gray) */}
          <polyline
            points={data.map((item, idx) => 
              `${40 + idx * pointSpacing},${chartHeight + 20 - normalize(item.salinity - 30, maxSalinity - 30) * (chartHeight / 100)}`
            ).join(' ')}
            fill="none"
            stroke="#666666"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data points */}
          {data.map((item, idx) => (
            <g key={`points-${idx}`}>
              <circle cx={40 + idx * pointSpacing} cy={chartHeight + 20 - normalize(item.temperature, maxTemp) * (chartHeight / 100)} r="4" fill="#0046FF" />
              <circle cx={40 + idx * pointSpacing} cy={chartHeight + 20 - normalize(item.seaLevel, maxSea) * (chartHeight / 100)} r="4" fill="#FF9013" />
              <circle cx={40 + idx * pointSpacing} cy={chartHeight + 20 - normalize(item.salinity - 30, maxSalinity - 30) * (chartHeight / 100)} r="4" fill="#666666" />
            </g>
          ))}
        </svg>
      </div>

      {/* Legend */}
      <div className="mt-8 grid grid-cols-3 gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
          <span className="text-black/70">Temperature Rise (°C)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
          <span className="text-black/70">Sea Level Rise (cm)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-600 rounded-sm"></div>
          <span className="text-black/70">Salinity Level (ppt)</span>
        </div>
      </div>

      {/* Data Table */}
      <div className="mt-8 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-blue-200">
              <th className="text-left py-2 px-3 bg-blue-50 text-blue-600 font-semibold">Year</th>
              <th className="text-right py-2 px-3 bg-blue-50 text-blue-600 font-semibold">Temperature</th>
              <th className="text-right py-2 px-3 bg-orange-50 text-orange-600 font-semibold">Sea Level</th>
              <th className="text-right py-2 px-3 bg-gray-50 text-gray-600 font-semibold">Salinity</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={`row-${idx}`} className="border-b border-blue-100 hover:bg-blue-50/50">
                <td className="py-2 px-3 font-medium text-black/70">{item.year}</td>
                <td className="text-right py-2 px-3 text-blue-600 font-semibold">{item.temperature}°C</td>
                <td className="text-right py-2 px-3 text-orange-600 font-semibold">{item.seaLevel}cm</td>
                <td className="text-right py-2 px-3 text-gray-600 font-semibold">{item.salinity}ppt</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnvironmentalTrendChart;
