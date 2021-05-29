import dynamic from 'next/dynamic'

const MapComponent = dynamic(() => import('../../components/MapComponent'), {
  ssr: false,
})

import { Main, Background, MapContainer } from '../../styles/pages/home'

export default function Home() {
  const position = [38.4123, 27.1424]
  return (
    <Main>
      <Background />
      <MapContainer>
        <MapComponent position={position} />
      </MapContainer>
    </Main>
  )
}

// export async function getStaticProps() {
//   return {
//     props: {},
//   }
// }
