import styled from 'styled-components'
import { ButtonStyleProps } from './types'

export const Button = styled.button<ButtonStyleProps>`
  outline: none;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 8px 32px;
  cursor: pointer;
  height: 46px;
  background-color: ${(props) => props.bgcolor ?? '#64a98c'};
  color: ${(props) => props.color ?? '#fff'};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  font-size: 16px;
  font-weight: 600;
  width: fit-content;

  &:focus {
    outline: 2px solid #007c89;
    box-shadow: 0 0 5px #007c89;
  }

  &:hover {
    box-shadow: 12px 14px 12px -8px rgba(0, 0, 0, 0.23);
    transform: scale(1.1);
  }
`

export const IconButton = styled.button`
  cursor: pointer;
  border: 2px solid #64a98c;
  width: fit-content;
  padding: 4px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  svg {
    color: #64a98c;
  }

  &:focus {
    outline: 2px solid #007c89;
    box-shadow: 0 0 5px #007c89;
  }

  &:hover {
    transform: scale(1.5);
  }
`
