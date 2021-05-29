import { useEffect, useState } from 'react'

import fetcher from '../utils/fetcher'

import MapComponent from '../components/MapComponent'

import { Main, Background, MapContainer, Title } from '../styles/pages/home'

const Home = ({ geoLocation }) => {
  const [position, setPosition] = useState({
    lat: 0,
    lng: 0,
  })

  useEffect(() => {
    if (geoLocation) {
      const { latitude: lat, longitude: lng } = geoLocation
      setPosition({ lat, lng })
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

export async function getStaticProps() {
  const geoLocation = await fetcher('https://ifconfig.co/json')

  return {
    props: {
      geoLocation,
    },
  }
}

export default Home
