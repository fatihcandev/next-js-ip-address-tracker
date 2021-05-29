import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const MapComponent = dynamic(() => import('../../components/MapComponent'), {
  ssr: false,
})

import { Main, Background, MapContainer, Title } from '../../styles/pages/home'

export default function Home({ geoLocation }) {
  const [position, setPosition] = useState({
    lat: 0,
    lon: 0,
  })

  useEffect(() => {
    if (geoLocation) {
      const { latitude: lat, longitude: lon } = geoLocation
      setPosition({ lat, lon })
    }
  }, [geoLocation])

  return (
    <Main>
      <Background>
        <Title>IP Address Tracker</Title>
      </Background>
      <MapContainer>
        <MapComponent position={position} />
      </MapContainer>
    </Main>
  )
}
