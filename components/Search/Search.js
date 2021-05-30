import { Container, Input, SubmitButton } from './styles'

const Search = ({ value, onChange, onSearch }) => {
  const handleChange = e => onChange(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    onSearch()
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Search for any IP address or domain"
      />
      <SubmitButton type="submit" />
    </Container>
  )
}

export default Search
