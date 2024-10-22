import { SmallButon as WrapperButton } from './styles'
import { SmallButtonProps } from './types'

const SmallButon = ({ bgcolor, color, children, onClick }: SmallButtonProps) => {
  return (
    <WrapperButton bgcolor={bgcolor} color={color} onClick={onClick}>
      {children}
    </WrapperButton>
  )
}

export default SmallButon
