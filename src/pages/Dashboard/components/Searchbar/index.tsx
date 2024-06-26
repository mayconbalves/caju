import Button from '@/components/Buttons'
import { IconButton } from '@/components/Buttons/IconButton'
import TextField from '@/components/TextField'
import routes from '@/router/routes'
import { HiRefresh } from 'react-icons/hi'
import { useHistory } from 'react-router-dom'
import { Actions, Container } from './styles'
import { Props } from './types'

const SearchBar = ({ values, onChange, fetchRegistrations }: Props) => {
  const history = useHistory()

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser)
  }

  return (
    <Container>
      <TextField
        aria-label="document-id"
        placeholder="Digite um CPF válido"
        name="documentId"
        onChange={onChange}
        value={values}
      />
      <Actions>
        <IconButton aria-label="refetch">
          <HiRefresh onClick={fetchRegistrations} />
        </IconButton>
        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </Actions>
    </Container>
  )
}

export default SearchBar
