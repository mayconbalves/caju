import {
  Button,
  CloseIcon,
  Modal,
  ModalContent,
  ModalFooter,
  ModalTitle
} from './styles'

import { Props } from './types'

const NotificationModal = ({
  setToggleModal,
  submitChangeCardStatus,
  values
}: Props) => {
  return (
    <Modal>
      <ModalContent data-testid="notification-modal">
        <CloseIcon
          data-testid="close-icon"
          onClick={() => setToggleModal(false)}
        >
          X
        </CloseIcon>
        <main>
          <ModalTitle>Deseja confirmar essa ação?</ModalTitle>
          <hr />
          <ModalFooter>
            <Button
              data-testid="confirm-button"
              onClick={() => submitChangeCardStatus(values.id, values.status)}
            >
              Confirmar
            </Button>
            <Button
              data-testid="cancel-button"
              onClick={() => setToggleModal(false)}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </main>
      </ModalContent>
    </Modal>
  )
}

export default NotificationModal
