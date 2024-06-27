import { Container, Spinner, Title } from './styles'

const Loader = () => {
  return (
    <Container data-testid="loader-container">
      <Spinner data-testid="loader-spinner" />
      <Title data-testid="loader-title">Carregando</Title>
    </Container>
  )
}

export default Loader
