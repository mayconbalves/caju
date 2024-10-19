import { HiOutlineCalendar, HiOutlineMail, HiOutlineTrash, HiOutlineUser } from 'react-icons/hi'
import { ButtonSmall } from '~/components/Buttons'
import * as S from './styles'

type Props = {
  data: any
  onDelete: () => void
  onUpdate: (registration: any, status: string) => void
}

const RegistrationCard = (props: Props) => {
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
              onClick={() => props.onUpdate(props.data, 'REPROVED')}
            >
              Reprovar
            </ButtonSmall>
            <ButtonSmall
              bgcolor="rgb(155, 229, 155)"
              onClick={() => props.onUpdate(props.data, 'APPROVED')}
            >
              Aprovar
            </ButtonSmall>
          </>
        )}

        {['REPROVED', 'APPROVED'].includes(props.data.status) && (
          <ButtonSmall bgcolor="#ff8858" onClick={() => props.onUpdate(props.data, 'REVIEW')}>
            Revisar novamente
          </ButtonSmall>
        )}

        <HiOutlineTrash onClick={props.onDelete} />
      </S.Actions>
    </S.Card>
  )
}

export default RegistrationCard
