type Registration = {
  admissionDate: string
  email: string
  employeeName: string
  status: string
  cpf: string
  id: string
}

export type Props = {
  registrations?: [Registration]
  submitChangeCardStatus: (id: string, status: string) => void
}
