import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

export const Input = styled.input`
  padding: 0 8px;
  vertical-align: middle;
  border-radius: 2px;
  width: 100%;
  min-height: 36px;
  background-color: #ffffff;
  border: 1px solid rgba(36, 28, 21, 0.3);
  transition: all 0.2s ease-in-out 0s;
  font-size: 16px;
  line-height: 18px;
  font-weight: normal;
  border-radius: 8px;
  :focus {
    outline: none;
    border: 1px solid #007c89;
    box-shadow: inset 0 0 0 1px #007c89;
  }
`
type Props = {
  error?: any
  id?: string
  label?: string
  name: string
  onChange: (event: any) => void
  value: string
  type?: string
} & InputHTMLAttributes<any>

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
