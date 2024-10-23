export type TextFieldProps = {
  id?: string
  label?: string
  error?: string
  maxLength?: number
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
  value: string
}

export type InputStylesProps = {
  error?: string
}
