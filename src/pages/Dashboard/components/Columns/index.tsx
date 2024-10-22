import { allColumns } from '~/constants'
import RegistrationCard from '../RegistrationCard'
import * as S from './styles'

type Props = {
  registrations?: any[]
  onDelete: (id: string) => void
  onUpdate: (registration: any, status: string) => void
}

const Columns = (props: Props) => {
  return (
    <S.Container>
      {allColumns.map((column) => {
        const filteredRegistrations: any = Array.isArray(props.registrations)
          ? props.registrations.filter((registration) => registration.status === column.status)
          : []

        return (
          <S.Column status={column.status} key={column.title}>
            <S.TitleColumn status={column.status}>{column.title}</S.TitleColumn>
            <S.CollumContent>
              {filteredRegistrations.length > 0 ? (
                filteredRegistrations.map((registration: any) => (
                  <RegistrationCard
                    data={registration}
                    key={registration.id}
                    onDelete={() => props.onDelete(registration.id)}
                    onUpdate={props.onUpdate}
                  />
                ))
              ) : (
                <p>Nenhum registro encontrado para este status.</p>
              )}
            </S.CollumContent>
          </S.Column>
        )
      })}
    </S.Container>
  )
}

export default Columns
