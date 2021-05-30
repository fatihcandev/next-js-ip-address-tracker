import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import { useCallback } from 'react'

const MapComponent = ({ position }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.googleMapsApiKey,
  })

  // const onLoad = useCallback(
  //   () => mapInstance => {
  //     mapInstance.setOptions({
  //       zoom: 15,
  //     })
  //   },
  //   []
  // )

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={{
          width: '100%',
          height: '100%',
        }}
        center={position}
        zoom={15}
        // onLoad={onLoad}
      >
        <Marker icon="/images/icon-location.svg" position={position} />
      </GoogleMap>
    )
  )
}

export default MapComponent
