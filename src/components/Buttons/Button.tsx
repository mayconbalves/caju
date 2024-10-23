import { Button as WrapperButton } from './styles'
import { ButtonProps } from './types'

const Buton = ({ bgcolor, color, children, onClick, type }: ButtonProps) => {
  return (
    <WrapperButton bgcolor={bgcolor} color={color} type={type} onClick={onClick} role="button">
      {children}
    </WrapperButton>
  )
}

export default Buton
