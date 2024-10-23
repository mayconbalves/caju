import { useState } from 'react'
import { HiOutlineCalendar, HiOutlineMail, HiOutlineTrash, HiOutlineUser } from 'react-icons/hi'
import { SmallButton } from '~/components/Buttons'
import ConfirmationModal from '~/components/ConfirmModal'
import { Actions, Card, IconAndText } from './styles'
import { RegistrationsCardProps } from './types'

const RegistrationCard = ({ registration, onDelete, onUpdate }: RegistrationsCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalAction, setModalAction] = useState<() => void>(() => {})

  const handleOpenModal = (action: () => void, message: string) => {
    console.log(message)
    setModalAction(() => action)
    setIsModalOpen(true)
  }

  const handleConfirmAction = () => {
    modalAction()
    setIsModalOpen(false)
  }

  return (
    <Card>
      <IconAndText>
        <HiOutlineUser />
        <h3>{registration.employeeName}</h3>
      </IconAndText>
      <IconAndText>
        <HiOutlineMail />
        <p>{registration.email}</p>
      </IconAndText>
      <IconAndText>
        <HiOutlineCalendar />
        <span>{registration.admissionDate}</span>
      </IconAndText>
      <Actions>
        {registration.status === 'REVIEW' && (
          <>
            <SmallButton
              bgcolor="rgb(255, 145, 154)"
              onClick={() =>
                handleOpenModal(
                  () => onUpdate(registration, 'REPROVED'),
                  'Tem certeza que deseja reprovar este registro?'
                )
              }
            >
              Reprovar
            </SmallButton>
            <SmallButton
              bgcolor="rgb(155, 229, 155)"
              onClick={() =>
                handleOpenModal(
                  () => onUpdate(registration, 'APPROVED'),
                  'Tem certeza que deseja aprovar este registro?'
                )
              }
            >
              Aprovar
            </SmallButton>
          </>
        )}

        {['REPROVED', 'APPROVED'].includes(registration.status) && (
          <SmallButton
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
          </SmallButton>
        )}

        <HiOutlineTrash
          data-testid="delete-btn"
          onClick={() => handleOpenModal(onDelete, 'Tem certeza que deseja excluir este registro?')}
        />
      </Actions>

      <ConfirmationModal
        isOpen={isModalOpen}
        message="Deseja efetuar essa ação"
        onConfirm={handleConfirmAction}
        onCancel={() => setIsModalOpen(false)}
      />
    </Card>
  )
}

export default RegistrationCard
