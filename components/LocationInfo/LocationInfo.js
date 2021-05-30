import { Container, Description, Title } from './styles'

const LocationInfo = ({ title, description }) => {
  return (
    <Container>
      <Title>{title.toUpperCase()}</Title>
      <Description>{description}</Description>
    </Container>
  )
}

export default LocationInfo
