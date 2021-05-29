import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MapComponent = ({ position }) => {
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily Âcustomizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapComponent
