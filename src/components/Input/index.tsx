import { InputStyled } from './styles'
import { Props } from './types'

const Input = ({ name, onChange, placeholder, value, type }: Props) => {
  return (
    <InputStyled
      data-testid="input"
      onChange={onChange}
      value={value}
      name={name}
      placeholder={placeholder}
      type={type}
    />
  )
}

export default Input
