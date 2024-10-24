import { useEffect } from 'react'
import { Button } from '~/components/Buttons'
import { Actions, CloseIcon, ModalContent, ModalOverlay, ModalTitle, WrapperIcon } from './styles'
import { ConfirmModalProps } from './types'

const ConfirmationModal = ({ isOpen, message, onConfirm, onCancel }: ConfirmModalProps) => {
  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onCancel()
        }
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [isOpen, onCancel])

  if (!isOpen) return null

  return (
    <ModalOverlay role="dialog" aria-labelledby="modal-de-confirmação" aria-describedby={message}>
      <ModalContent>
        <WrapperIcon>
          <CloseIcon onClick={onCancel} />
        </WrapperIcon>
        <ModalTitle id="titulo-do-modal">Confirmação</ModalTitle>
        <p id={message}>{message}</p>
        <Actions>
          <Button bgcolor="#9be59b" onClick={onConfirm} aria-label="confirmar-ação">
            Confirmar
          </Button>
          <Button bgcolor="#fc2a2a" onClick={onCancel} aria-label="cancelar-ação">
            Cancelar
          </Button>
        </Actions>
      </ModalContent>
    </ModalOverlay>
  )
}

export default ConfirmationModal
