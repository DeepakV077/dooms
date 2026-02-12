import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

const MapUpdater = ({ center }) => {
  const map = useMap();
  map.setView(center);
  return null;
};

const MapView = ({ region }) => {
  return (
    <div className="h-[450px] rounded-3xl overflow-hidden border border-blue-100 shadow-lg">
      <MapContainer center={region.coordinates} zoom={6} className="h-full w-full">
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={region.coordinates} />
        <MapUpdater center={region.coordinates} />
      </MapContainer>
    </div>
  );
};

export default MapView;
