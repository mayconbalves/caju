import { Button as WrapperButton } from './styles'
import { ButtonProps } from './types'

const Buton = ({ children, onClick, type }: ButtonProps) => {
  return (
    <WrapperButton type={type} onClick={onClick}>
      {children}
    </WrapperButton>
  )
}

export default Buton
