import { useEffect } from 'react'
import { Button } from '~/components/Buttons'
import * as S from './styles'
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
    <S.ModalOverlay role="dialog" aria-labelledby="Modal de confirmação" aria-describedby={message}>
      <S.ModalContent>
        <h2 id="modal-title">Confirmação</h2>
        <p id="modal-description">{message}</p>
        <S.Actions>
          <Button bgcolor="#9be59b" onClick={onConfirm} aria-label="Confirmar ação">
            Confirmar
          </Button>
          <Button bgcolor="#fc2a2a" onClick={onCancel} aria-label="Cancelar ação">
            Cancelar
          </Button>
        </S.Actions>
      </S.ModalContent>
    </S.ModalOverlay>
  )
}

export default ConfirmationModal
