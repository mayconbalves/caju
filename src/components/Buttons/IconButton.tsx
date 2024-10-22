import { IconButton as WrapperButton } from './styles'
import { IconButtonProps } from './types'

const IconButton = ({ children, onClick }: IconButtonProps) => {
  return <WrapperButton onClick={onClick}>{children}</WrapperButton>
}

export default IconButton
