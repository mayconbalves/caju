export type Props = {
  admissionDate: string
  email: string
  employeeName: string
  status: string
  id: string
  submitChangeCardStatus: (id: string, status: string) => void
}
