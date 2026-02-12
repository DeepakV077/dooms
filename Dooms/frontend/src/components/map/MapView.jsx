import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"
});

// Component to update map view when region changes
const MapUpdater = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, 6);
    }
  }, [center, map]);
  return null;
};

const MapView = ({ region }) => {
  const coordinates = region?.coordinates || [13.08, 80.27];
  
  return (
    <div className="rounded-3xl overflow-hidden border border-blue-100 shadow-lg">
      <MapContainer
        center={coordinates}
        zoom={6}
        scrollWheelZoom={true}
        className="h-[450px] w-full"
      >
        {/* OpenStreetMap Tiles */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Marine Region Marker */}
        <Marker position={coordinates}>
          <Popup>
            <div className="text-sm font-semibold">
              {region?.name || "Marine Region"}
              <br />
              <span className="text-xs text-gray-600">
                {coordinates[0].toFixed(2)}°N, {coordinates[1].toFixed(2)}°E
              </span>
            </div>
          </Popup>
        </Marker>

        {/* Update map center when region changes */}
        <MapUpdater center={coordinates} />
      </MapContainer>
    </div>
  );
};

export default MapView;
