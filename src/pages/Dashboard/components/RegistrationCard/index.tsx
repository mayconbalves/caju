import {
  HiOutlineCalendar,
  HiOutlineMail,
  HiOutlineTrash,
  HiOutlineUser,
} from "react-icons/hi";
import { ButtonSmall } from "@/components/Buttons";
import * as S from "./styles";

type Props = {
  data: any;
  handleDeleteCard?: any;
  handleUpdateCard?: any;
};

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
        <ButtonSmall
          bgcolor="rgb(255, 145, 154)"
          onClick={() => props.handleUpdateCard(props.data.id, 'Reprovar')}
        >
          Reprovar
        </ButtonSmall>
        <ButtonSmall
          bgcolor="rgb(155, 229, 155)"
          onClick={() => props.handleUpdateCard(props.data.id, 'Aprovar')}
        >
          Aprovar
        </ButtonSmall>
        <ButtonSmall
          bgcolor="#ff8858"
          onClick={() => props.handleUpdateCard(props.data.id, 'Revisar')}
        >
          Revisar novamente
        </ButtonSmall>

        <HiOutlineTrash onClick={() => props.handleDeleteCard(props.data.id)}/>
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
