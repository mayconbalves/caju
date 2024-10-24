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
import { SearchbarProps } from './types'

export const SearchBar = ({ onSearch, onRefreshRegister }: SearchbarProps) => {
  const history = useHistory()
  const [cpf, setDocumentId] = useState('')
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
        aria-describedby={errorMessage}
        aria-invalid={!!errorMessage}
        data-testid="cpf"
        placeholder="Digite um CPF válido"
        maxLength={14}
        name="cpf"
        onChange={handleInputChange}
        value={cpfMask(cpf)}
        error={errorMessage}
      />
      <S.Actions>
        <IconButton aria-label="Atualizar registros" onClick={handleRefreshClick}>
          <HiRefresh />
        </IconButton>
        <Button bgcolor="#64a98c" onClick={goToNewAdmissionPage}>
          Nova Admissão
        </Button>
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
