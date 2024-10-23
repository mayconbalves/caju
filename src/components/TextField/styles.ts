import styled from 'styled-components'
import { InputStylesProps } from './types'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const Input = styled.input<InputStylesProps>`
  padding: 0 8px;
  vertical-align: middle;
  border-radius: 2px;
  min-height: 36px;
  background-color: #ffffff;
  border: 1px solid rgba(36, 28, 21, 0.3);
  transition: all 0.2s ease-in-out 0s;
  font-size: 16px;
  line-height: 18px;
  font-weight: normal;
  border-radius: 8px;

  ${({ error }) =>
    error
      ? `
    outline: none;
    border: 2px solid rgba(232, 5, 55, 1)
  `
      : `
    &:focus {
      outline: none;
      border: 1px solid #007c89;
      box-shadow: inset 0 0 0 1px #007c89;
    }
  `}
`

export const Hint = styled.span`
  color: rgba(232, 5, 55, 1);
  font-size: small;
`
