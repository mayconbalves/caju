import * as S from './styles'

type Props = {
  isOpen: boolean
  message: string
  onConfirm: () => void
  onCancel: () => void
}

const ConfirmationModal = ({ isOpen, message, onConfirm, onCancel }: Props) => {
  if (!isOpen) return null

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <p>{message}</p>
        <S.Actions>
          <button onClick={onConfirm}>Confirmar</button>
          <button onClick={onCancel}>Cancelar</button>
        </S.Actions>
      </S.ModalContent>
    </S.ModalOverlay>
  )
}

export default ConfirmationModal
