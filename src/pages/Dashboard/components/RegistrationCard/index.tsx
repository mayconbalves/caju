import { useState } from 'react'
import { HiOutlineCalendar, HiOutlineMail, HiOutlineTrash, HiOutlineUser } from 'react-icons/hi'
import { ButtonSmall } from '~/components/Buttons'
import ConfirmationModal from '~/components/ConfirmModal'
import * as S from './styles'

type Props = {
  data: any
  onDelete: () => void
  onUpdate: (registration: any, status: string) => void
}

const RegistrationCard = (props: Props) => {
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
    <S.Card>
      <S.IconAndText>
        <HiOutlineUser />
        <h3>{props.data.employeeName}</h3>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineMail />
        <p>{props.data.email}</p>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineCalendar />
        <span>{props.data.admissionDate}</span>
      </S.IconAndText>
      <S.Actions>
        {props.data.status === 'REVIEW' && (
          <>
            <ButtonSmall
              bgcolor="rgb(255, 145, 154)"
              onClick={() =>
                handleOpenModal(
                  () => props.onUpdate(props.data, 'REPROVED'),
                  'Tem certeza que deseja reprovar este registro?'
                )
              }
            >
              Reprovar
            </ButtonSmall>
            <ButtonSmall
              bgcolor="rgb(155, 229, 155)"
              onClick={() =>
                handleOpenModal(
                  () => props.onUpdate(props.data, 'APPROVED'),
                  'Tem certeza que deseja aprovar este registro?'
                )
              }
            >
              Aprovar
            </ButtonSmall>
          </>
        )}

        {['REPROVED', 'APPROVED'].includes(props.data.status) && (
          <ButtonSmall
            bgcolor="#ff8858"
            onClick={() =>
              handleOpenModal(
                () => props.onUpdate(props.data, 'REVIEW'),
                'Tem certeza que deseja revisar novamente este registro?'
              )
            }
          >
            Revisar novamente
          </ButtonSmall>
        )}

        <HiOutlineTrash
          onClick={() =>
            handleOpenModal(props.onDelete, 'Tem certeza que deseja excluir este registro?')
          }
        />
      </S.Actions>

      <ConfirmationModal
        isOpen={isModalOpen}
        message="Deseja efetuar essa ação"
        onConfirm={handleConfirmAction}
        onCancel={() => setIsModalOpen(false)}
      />
    </S.Card>
  )
}

export default RegistrationCard
