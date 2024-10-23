import { IconButton as WrapperButton } from './styles'
import { IconButtonProps } from './types'

const IconButton = ({ children, onClick }: IconButtonProps) => {
  return (
    <WrapperButton role="button" onClick={onClick}>
      {children}
    </WrapperButton>
  )
}

export default IconButton
