import { allColumns } from '~/constants'
import RegistrationCard from '../RegistrationCard'
import { CollumContent, Column, TitleColumn, Wrapper } from './styles'
import { ColumnProps, Registrations } from './types'

const Columns = ({ onDelete, onUpdate, registrations }: ColumnProps) => {
  return (
    <Wrapper>
      {allColumns.map((column) => {
        const filteredRegistrations = Array.isArray(registrations)
          ? registrations.filter((registration) => registration.status === column.status)
          : []

        return (
          <Column status={column.status} key={column.title}>
            <TitleColumn status={column.status}>{column.title}</TitleColumn>
            <CollumContent>
              {filteredRegistrations.length > 0 &&
                filteredRegistrations.map((registration: Registrations) => (
                  <RegistrationCard
                    registration={registration}
                    key={registration.id}
                    onDelete={() => onDelete(registration.id)}
                    onUpdate={onUpdate}
                  />
                ))}
            </CollumContent>
          </Column>
        )
      })}
    </Wrapper>
  )
}

export default Columns
