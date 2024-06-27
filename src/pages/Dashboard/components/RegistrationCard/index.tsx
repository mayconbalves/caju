import { ButtonSmall } from '@/components/Buttons'
import NotificationModal from '@/components/NotificationModal'
import { useEffect, useState } from 'react'
import {
  HiOutlineCalendar,
  HiOutlineMail,
  HiOutlineTrash,
  HiOutlineUser
} from 'react-icons/hi'
import { Actions, Card, IconAndText } from './styles'
import { Props } from './types'

const RegistrationCard = ({
  employeeName,
  email,
  admissionDate,
  status,
  id,
  submitChangeCardStatus
}: Props) => {
  const [values, setValues] = useState<{ id: string; status: string }>({
    id: '',
    status: ''
  })
  const [toggleModal, setToggleModal] = useState(false)

  const changeCardStatus = (cardId: string, cardStatus: string) => {
    setValues({ id: cardId, status: cardStatus })
  }

  useEffect(() => {
    if (values.id && values.status) {
      setToggleModal(true)
    }
  }, [values])

  return (
    <>
      {toggleModal && (
        <NotificationModal
          setToggleModal={setToggleModal}
          submitChangeCardStatus={submitChangeCardStatus}
          values={values}
        />
      )}

      <Card>
        <IconAndText>
          <HiOutlineUser />
          <h3>{employeeName}</h3>
        </IconAndText>
        <IconAndText>
          <HiOutlineMail />
          <p>{email}</p>
        </IconAndText>
        <IconAndText>
          <HiOutlineCalendar />
          <span>{admissionDate}</span>
        </IconAndText>
        <Actions>
          {status === 'REVIEW' ? (
            <>
              <ButtonSmall
                bgcolor="rgb(255, 145, 154)"
                onClick={() => changeCardStatus(id, 'Reprovar')}
              >
                Reprovar
              </ButtonSmall>
              <ButtonSmall
                bgcolor="rgb(155, 229, 155)"
                onClick={() => changeCardStatus(id, 'Aprovar')}
              >
                Aprovar
              </ButtonSmall>
            </>
          ) : (
            <ButtonSmall
              bgcolor="#ff8858"
              onClick={() => changeCardStatus(id, 'Revisar')}
            >
              Revisar novamente
            </ButtonSmall>
          )}
          <HiOutlineTrash onClick={() => changeCardStatus(id, 'Excluir')} />
        </Actions>
      </Card>
    </>
  )
}

export default RegistrationCard
