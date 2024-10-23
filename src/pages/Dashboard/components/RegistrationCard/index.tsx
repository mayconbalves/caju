import { useState } from 'react'
import {
  HiDocumentText,
  HiOutlineCalendar,
  HiOutlineMail,
  HiOutlineUser,
  HiTrash
} from 'react-icons/hi'
import { Button } from '~/components/Buttons'
import ConfirmationModal from '~/components/ConfirmModal'
import { Actions, Card, DataCard, IconAndText, TitleCard } from './styles'
import { RegistrationsCardProps } from './types'

const RegistrationCard = ({ registration, onDelete, onUpdate }: RegistrationsCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalAction, setModalAction] = useState<() => void>(() => {})
  const [modalMessage, setModalMessage] = useState('')

  const handleOpenModal = (action: () => void, message: string) => {
    setModalAction(() => action)
    setModalMessage(message)
    setIsModalOpen(true)
  }

  const handleConfirmAction = () => {
    modalAction()
    setIsModalOpen(false)
  }

  return (
    <Card>
      <IconAndText>
        <HiOutlineUser aria-hidden="true" />
        <TitleCard>{registration.employeeName}</TitleCard>
      </IconAndText>
      <IconAndText>
        <HiOutlineMail aria-hidden="true" />
        <DataCard>{registration.email}</DataCard>
      </IconAndText>
      <IconAndText>
        <HiOutlineCalendar aria-hidden="true" />
        <DataCard>{registration.admissionDate}</DataCard>
      </IconAndText>
      <IconAndText>
        <HiDocumentText aria-hidden="true" />
        <DataCard>{registration.cpf}</DataCard>
      </IconAndText>
      <Actions>
        {registration.status === 'REVIEW' && (
          <>
            <Button
              aria-label="Reprovar registro"
              bgcolor="rgb(255, 145, 154)"
              onClick={() =>
                handleOpenModal(
                  () => onUpdate(registration, 'REPROVED'),
                  'Tem certeza que deseja reprovar este registro?'
                )
              }
            >
              Reprovar
            </Button>
            <Button
              aria-label="Aprovar registro"
              bgcolor="#9be59b"
              onClick={() =>
                handleOpenModal(
                  () => onUpdate(registration, 'APPROVED'),
                  'Tem certeza que deseja aprovar este registro?'
                )
              }
            >
              Aprovar
            </Button>
          </>
        )}

        {['REPROVED', 'APPROVED'].includes(registration.status) && (
          <Button
            aria-label="Revisar registro novamente"
            data-testid="update-btn"
            bgcolor="#ff8858"
            onClick={() =>
              handleOpenModal(
                () => onUpdate(registration, 'REVIEW'),
                'Tem certeza que deseja revisar novamente este registro?'
              )
            }
          >
            Revisar novamente
          </Button>
        )}
        <Button
          aria-label="Apagar registro"
          data-testid="delete-btn"
          bgcolor="#fc2a2a"
          onClick={() => handleOpenModal(onDelete, 'Tem certeza que deseja excluir este registro?')}
        >
          Apagar
          <HiTrash aria-hidden="true" />
        </Button>
      </Actions>

      <ConfirmationModal
        isOpen={isModalOpen}
        aria-live="assertive"
        message={modalMessage}
        onConfirm={handleConfirmAction}
        onCancel={() => setIsModalOpen(false)}
      />
    </Card>
  )
}

export default RegistrationCard
