import HomePage from './home'

import fetcher from '../utils/fetcher'

const Home = ({ geoLocation }) => {
  return <HomePage geoLocation={geoLocation} />
}

export async function getServerSideProps() {
  const geoLocation = await fetcher('https://ifconfig.co/json')

  return {
    props: {
      geoLocation,
    },
  }
}

export default Home
