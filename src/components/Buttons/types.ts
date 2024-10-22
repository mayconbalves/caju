export type ButtonProps = {
  children?: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
}

export type IconButtonProps = {
  children?: React.ReactNode
  onClick?: () => void
}

export type SmallButtonProps = {
  bgcolor: string | number
  color?: string | number
  children?: React.ReactNode
  onClick?: () => void
}

export type SmallButtonStyleProps = {
  bgcolor: string | number
  color?: string | number
}
