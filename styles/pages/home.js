import styled from 'styled-components'

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
`
