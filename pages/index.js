import Head from 'next/head'

import { useCallback, useEffect, useState } from 'react'

import { MapComponent, Search, LocationInfo } from '../components'

import fetcher from '../utils/fetcher'
import { locationInfos } from '../constants/home'

import {
  Main,
  Background,
  MapContainer,
  Title,
  LocationInfosContainer,
} from '../styles/pages/home'

const Home = ({ geolocation }) => {
  const [searchValue, setSearchValue] = useState('')
  const [position, setPosition] = useState({
    lat: 0,
    lng: 0,
  })
  const [locationInfo, setLocationInfo] = useState({
    ip: '',
    location: '',
    timezone: '',
    isp: '',
  })

  const handleGeolocation = useCallback(geolocationData => {
    const {
      latitude: lat,
      longitude: lng,
      ip,
      country,
      city,
      time_zone: timezone,
      asn_org: isp,
    } = geolocationData
    setPosition({ lat, lng })
    const location = `${city}, ${country}`
    setLocationInfo({
      ip,
      location,
      timezone,
      isp,
    })
  }, [])

  const handleSearch = async () => {
    const geolocation = await fetcher(`/api/geolocation?ip=${searchValue}`)
    handleGeolocation(geolocation)
  }

  useEffect(() => {
    if (geolocation) {
      handleGeolocation(geolocation)
    }
  }, [geolocation, handleGeolocation])

  return (
    <>
      <Head>
        <title>IP Address Tracker</title>
      </Head>
      <Main>
        <Background>
          <Title>IP Address Tracker</Title>
          <Search
            value={searchValue}
            onChange={setSearchValue}
            onSearch={handleSearch}
          />
          <LocationInfosContainer>
            {locationInfos.map(({ title, key }) => (
              <LocationInfo
                key={title}
                title={title}
                description={locationInfo[key]}
              />
            ))}
          </LocationInfosContainer>
        </Background>
        <MapContainer>
          <MapComponent position={position} />
        </MapContainer>
      </Main>
    </>
  )
}

export async function getServerSideProps() {
  const geolocation = await fetcher('https://ifconfig.co/json')
  return {
    props: {
      geolocation,
    },
  }
}

export default Home
