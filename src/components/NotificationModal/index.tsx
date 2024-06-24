import {
  Button,
  CloseIcon,
  Modal,
  ModalContent,
  ModalFooter,
  ModalTitle
} from './styles'

const NotificationModal = ({
  setToggleModal,
  submitChangeCardStatus,
  values
}: any) => {
  return (
    <Modal>
      <ModalContent>
        <CloseIcon onClick={() => setToggleModal(false)}>X</CloseIcon>
        <main>
          <ModalTitle>Deseja confirmar essa ação?</ModalTitle>
          <hr />
          <ModalFooter>
            <Button
              onClick={() => submitChangeCardStatus(values.id, values.status)}
            >
              Confirmar
            </Button>
            <Button onClick={() => setToggleModal(false)}>Cancelar</Button>
          </ModalFooter>
        </main>
      </ModalContent>
    </Modal>
  )
}

export default NotificationModal
