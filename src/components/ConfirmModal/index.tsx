import { Button } from '~/components/Buttons'
import * as S from './styles'
import { ConfirmModalProps } from './types'

const ConfirmationModal = ({ isOpen, message, onConfirm, onCancel }: ConfirmModalProps) => {
  if (!isOpen) return null

  return (
    <S.ModalOverlay role="dialog">
      <S.ModalContent>
        <p>{message}</p>
        <S.Actions>
          <Button bgcolor="#9be59b" onClick={onConfirm}>
            Confirmar
          </Button>
          <Button bgcolor="#fc2a2a" onClick={onCancel}>
            Cancelar
          </Button>
        </S.Actions>
      </S.ModalContent>
    </S.ModalOverlay>
  )
}

export default ConfirmationModal
