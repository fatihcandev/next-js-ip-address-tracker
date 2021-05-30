import styled from 'styled-components'
import { breakpoints } from 'theme'

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const Background = styled.div`
  height: 400px;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url('/images/pattern-bg.png') center/cover no-repeat;
  position: relative;
`

export const MapContainer = styled.div`
  height: 100%;
`

export const Title = styled.span`
  font-weight: 500;
  font-size: 32px;
  color: white;
  margin-bottom: 30px;
`

export const LocationInfosContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 100%;
  row-gap: 20px;
  padding: 30px 0;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: -215px;
  z-index: 5;

  @media ${breakpoints.lg} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: max-content;
    row-gap: unset;
    max-width: 89%;
    bottom: -75px;
  }

  @media ${breakpoints.xl} {
    max-width: 80%;
  }
`
