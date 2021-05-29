import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

const MapComponent = ({ position }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.googleMapsApiKey,
  })

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        width: '100%',
        height: '100%',
      }}
      center={position}
      zoom={10}
    >
      <Marker position={position} />
    </GoogleMap>
  ) : (
    <></>
  )
}

export default MapComponent
