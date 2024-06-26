import { Container, Spinner, Title } from './styles'

const Loader = () => {
  return (
    <Container>
      <Spinner />
      <Title>Carregando</Title>
    </Container>
  )
}

export default Loader
