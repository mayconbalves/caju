export type Props = {
  admissionDate: string
  email: string
  employeeName: string
  status: string
  id: string
  handleDeleteCard: (id: string) => void
  submitChangeCardStatus: (id: string, status: string) => void
}
