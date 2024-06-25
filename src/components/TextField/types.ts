import { InputHTMLAttributes } from 'react'

export type Props = {
  error?: any
  id?: string
  label?: string
  name: string
  onChange: (event: any) => void
  placeholder?: string
  value: string
  type?: string
} & InputHTMLAttributes<any>
