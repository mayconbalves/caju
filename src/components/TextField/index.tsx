import { Hint, Input, Wrapper } from './styles'
import { TextFieldProps } from './types'

const TextField = ({
  error,
  id,
  maxLength,
  name,
  onChange,
  placeholder,
  label,
  type,
  value
}: TextFieldProps) => {
  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <Input
        aria-label={label}
        aria-describedby={error}
        aria-invalid={!!error}
        error={error}
        maxLength={maxLength}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {error && <Hint id={`${id}-error`}>{error}</Hint>}
    </Wrapper>
  )
}

export default TextField
