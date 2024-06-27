import RegistrationCard from '../RegistrationCard'
import { CollumContent, Column, Container, TitleColumn } from './styles'

const allColumns = [
  { status: 'REVIEW', title: 'Pronto para revisar' },
  { status: 'APPROVED', title: 'Aprovado' },
  { status: 'REPROVED', title: 'Reprovado' }
]

import { Props } from './types'

const Collumns = ({ registrations, submitChangeCardStatus }: Props) => {
  return (
    <Container>
      {allColumns.map((column) => {
        const filteredRegistrations = registrations?.filter(
          (registration) => registration.status === column.status
        )

        return (
          <Column status={column.status} key={column.title}>
            <TitleColumn status={column.status}>{column.title}</TitleColumn>
            <CollumContent>
              {filteredRegistrations?.map((registration) => {
                return (
                  <RegistrationCard
                    id={registration.id}
                    admissionDate={registration.admissionDate}
                    email={registration.email}
                    employeeName={registration.employeeName}
                    status={registration.status}
                    key={registration.id}
                    submitChangeCardStatus={submitChangeCardStatus}
                  />
                )
              })}
            </CollumContent>
          </Column>
        )
      })}
    </Container>
  )
}

export default Collumns
