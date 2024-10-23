export type Registrations = {
  id: string
  admissionDate: string
  email: string
  employeeName: string
  status: string | any
  cpf: string
}

export type ColumnProps = {
  registrations?: Registrations[]
  onDelete: (id: string) => void
  onUpdate: (registration: Registrations, status: string) => void
}
