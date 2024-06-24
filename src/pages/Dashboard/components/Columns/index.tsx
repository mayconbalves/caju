import RegistrationCard from '../RegistrationCard'
import * as S from './styles'

const allColumns = [
  { status: 'REVIEW', title: 'Pronto para revisar' },
  { status: 'APPROVED', title: 'Aprovado' },
  { status: 'REPROVED', title: 'Reprovado' }
]

import { Props } from './types'

const Collumns = ({
  registrations,
  handleDeleteCard,
  submitChangeCardStatus
}: Props) => {
  return (
    <S.Container>
      {allColumns.map((column) => {
        const filteredRegistrations = registrations?.filter(
          (registration) => registration.status === column.status
        )

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
                      id={registration.id}
                      admissionDate={registration.admissionDate}
                      email={registration.email}
                      employeeName={registration.employeeName}
                      status={registration.status}
                      key={registration.id}
                      handleDeleteCard={handleDeleteCard}
                      submitChangeCardStatus={submitChangeCardStatus}
                    />
                  )
                })}
              </S.CollumContent>
            </>
          </S.Column>
        )
      })}
    </S.Container>
  )
}

export default Collumns
