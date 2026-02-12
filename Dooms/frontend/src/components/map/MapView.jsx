import { useState } from "react";

const MapView = ({ region }) => {
  const [position] = useState(region?.coordinates || [13.08, 80.27]);

  return (
    <div className="rounded-3xl overflow-hidden border border-blue-100 shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="h-[450px] w-full flex flex-col items-center justify-center relative">
        {/* Decorative map background */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 500">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#0046FF" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="1000" height="500" fill="url(#grid)" />
          {/* Coastline simulation */}
          <path d="M 0 150 Q 250 100 500 150 T 1000 150" fill="none" stroke="#0046FF" strokeWidth="2" opacity="0.3" />
          {/* Water regions */}
          <circle cx="300" cy="250" r="120" fill="#73C8D2" opacity="0.15" />
          <circle cx="700" cy="300" r="100" fill="#73C8D2" opacity="0.15" />
        </svg>

        {/* Map info overlay */}
        <div className="relative z-10 text-center">
          <h3 className="text-lg font-semibold text-blue-600 mb-4">{region?.name || "Interactive Marine Map"}</h3>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-200">
            <p className="text-sm text-blue-600 font-medium mb-2">📍 Region Coordinates:</p>
            <p className="font-mono font-bold text-blue-600 text-xl mb-6">
              {position[0].toFixed(2)}°N, {position[1].toFixed(2)}°E
            </p>
          </div>
        </div>

        {/* Marker indicator */}
        <div className="absolute z-20 w-8 h-8 bottom-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
          <div className="w-full h-full bg-orange-500 rounded-full shadow-lg"></div>
          <div className="absolute inset-0 w-full h-full bg-orange-500 rounded-full animate-ping opacity-75"></div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
