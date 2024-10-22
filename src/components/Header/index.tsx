import { Wrapper } from './styles'
import { HeaderProps } from './types'

const Header = ({ children }: HeaderProps) => {
  return <Wrapper>{children}</Wrapper>
}

export default Header
