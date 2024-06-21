
import RegistrationCard from "../RegistrationCard";
import * as S from "./styles";

const allColumns = [
  { status: 'REVIEW', title: "Pronto para revisar" },
  { status: 'APPROVED', title: "Aprovado" },
  { status: 'REPROVED', title: "Reprovado" },
];

type Props = {
  registrations?: any[];
  handleDeleteCard?: any
  handleUpdateCard?: any
};
const Collumns = (props: Props) => {
  return (
    <S.Container>
      {allColumns.map((column) => {
        const filteredRegistrations = props.registrations?.filter(
          registration => registration.status === column.status
        );

        return (
          <S.Column status={column.status} key={column.title}>
            <>
              <S.TitleColumn status={column.status}>
                {column.title}
              </S.TitleColumn>
              <S.CollumContent>
                {filteredRegistrations?.map((registration) => {
                  return (
                    <RegistrationCard
                      handleDeleteCard={props.handleDeleteCard}
                      handleUpdateCard={props.handleUpdateCard}
                      data={registration}
                      key={registration.id}
                    />
                  );
                })}
              </S.CollumContent>
            </>
          </S.Column>
        );
      })}
    </S.Container>
  );
};

export default Collumns;
