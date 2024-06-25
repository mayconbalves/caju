import Input from '@/components/Input'
import { Props } from './types'

const TextField = ({
  error,
  id,
  label,
  name,
  onChange,
  placeholder,
  value,
  type
}: Props) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Input
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
        type={type}
      />
      <span style={{ fontSize: 12, color: 'red' }}>{error}</span>
    </div>
  )
}

export default TextField
