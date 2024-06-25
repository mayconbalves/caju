import { ChangeEvent } from 'react'

export type Props = {
  name: string
  onChange: (event: ChangeEvent) => void
  placeholder: string
  value: string
  type?: string
}
