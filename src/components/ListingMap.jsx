import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const ListingMap = ({ listing }) => {
  return (
    <div className="w-full h-[200px] md:h-[400px] z-10 overflow-x-hidden mt-6 md:mt-0 md:ml-2">
      <MapContainer
        center={[listing.geolocation.lat, listing.geolocation.lng]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[listing.geolocation.lat, listing.geolocation.lng]}>
          <Popup>{listing.address}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
export default ListingMap;
