export type ButtonProps = {
  bgcolor: string | number
  color?: string | number
  children?: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
}

export type IconButtonProps = {
  children?: React.ReactNode
  onClick?: () => void
}

export type ButtonStyleProps = {
  bgcolor: string | number
  color?: string | number
}
