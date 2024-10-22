import { useState } from 'react'
import { HiRefresh } from 'react-icons/hi'
import { useHistory } from 'react-router-dom'
import { Button, IconButton } from '~/components/Buttons'
import ConfirmationModal from '~/components/ConfirmModal'
import TextField from '~/components/TextField'
import routes from '~/router/routes'
import { isValidCPF } from '~/utils'
import { cpfMask } from '~/utils/cpf-mask'
import * as S from './styles'

type Props = {
  onSearch: (documentId: string) => void
  onRefreshRegister: any
}

export const SearchBar = ({ onSearch, onRefreshRegister }: Props) => {
  const history = useHistory()
  const [documentId, setDocumentId] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setDocumentId(value)
    const unmaskedValue = value.replace(/\D/g, '')

    if (unmaskedValue === '' || unmaskedValue.length < 11) {
      setErrorMessage('')
    } else if (isValidCPF(unmaskedValue)) {
      setErrorMessage('')
      onSearch(unmaskedValue)
    } else {
      setErrorMessage('CPF inválido. Por favor, verifique.')
    }
  }

  const handleRefreshClick = () => {
    setIsModalOpen(true)
  }

  const handleConfirmRefresh = () => {
    setIsModalOpen(false)
    onRefreshRegister()
  }

  return (
    <S.Container>
      <TextField
        placeholder="Digite um CPF válido"
        name="documentId"
        onChange={handleInputChange}
        value={cpfMask(documentId)}
        error={errorMessage}
      />
      <S.Actions>
        <IconButton aria-label="refetch" onClick={handleRefreshClick}>
          <HiRefresh />
        </IconButton>
        <Button onClick={goToNewAdmissionPage}>Nova Admissão</Button>
      </S.Actions>

      <ConfirmationModal
        isOpen={isModalOpen}
        message="Tem certeza que deseja atualizar os dados?"
        onConfirm={handleConfirmRefresh}
        onCancel={() => setIsModalOpen(false)}
      />
    </S.Container>
  )
}
