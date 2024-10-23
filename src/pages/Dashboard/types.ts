export type Registrations = {
  id: string
  admissionDate: string
  email: string
  employeeName: string
  status: 'REPROVED' | 'APPROVED' | 'REVIEW'
  cpf: string
}
