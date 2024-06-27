export type Props = {
  setToggleModal: (value: boolean) => void
  submitChangeCardStatus: (id: string, status: string) => void
  values: { id: string; status: string }
}
