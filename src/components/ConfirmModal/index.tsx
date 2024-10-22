import { Button } from '~/components/Buttons'
import * as S from './styles'
import { ConfirmModalProps } from './types'

const ConfirmationModal = ({ isOpen, message, onConfirm, onCancel }: ConfirmModalProps) => {
  if (!isOpen) return null

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <p>{message}</p>
        <S.Actions>
          <Button onClick={onConfirm}>Confirmar</Button>
          <Button onClick={onCancel}>Cancelar</Button>
        </S.Actions>
      </S.ModalContent>
    </S.ModalOverlay>
  )
}

export default ConfirmationModal
