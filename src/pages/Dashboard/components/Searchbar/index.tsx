import { useState } from 'react'
import { HiRefresh } from 'react-icons/hi'
import { useHistory } from 'react-router-dom'
import Button from '~/components/Buttons'
import { IconButton } from '~/components/Buttons/IconButton'
import TextField from '~/components/TextField'
import routes from '~/router/routes'
import { cpfMask } from '~/utils/cpf-mask'
import * as S from './styles'

type Props = {
  onSearch: (documentId: string) => void
}

export const SearchBar = ({ onSearch }: Props) => {
  const history = useHistory()
  const [documentId, setDocumentId] = useState('')

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser)
  }

  const handleInputChange = (e: any) => {
    const { value } = e.target
    setDocumentId(value)
    if (value === '' || value.length < 11) {
      onSearch('')
    } else if (value.length > 10) {
      onSearch(value)
    }
  }

  const handleRefreshClick = () => {
    onSearch(documentId)
  }

  return (
    <S.Container>
      <TextField
        placeholder="Digite um CPF válido"
        name="documentId"
        onChange={handleInputChange}
        value={cpfMask(documentId)}
      />
      <S.Actions>
        <IconButton aria-label="refetch" onClick={handleRefreshClick}>
          <HiRefresh />
        </IconButton>
        <Button onClick={goToNewAdmissionPage}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  )
}
