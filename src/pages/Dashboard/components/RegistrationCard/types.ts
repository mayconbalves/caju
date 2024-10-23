export type Registrations = {
  id: string
  admissionDate: string
  email: string
  employeeName: string
  status: string | any
  cpf: string
}

export type RegistrationsCardProps = {
  registration: Registrations
  onDelete: () => void
  onUpdate: (registration: any, status: string) => void
}
