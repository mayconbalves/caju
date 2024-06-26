import styled from 'styled-components'
import { ContainerProps } from './types'

export const Wrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`

export const Container = styled.div<ContainerProps>`
  border: 2px solid transparent;
  background-color: ${({ error }) =>
    error ? 'rgb(255, 145, 154)' : 'rgb(155, 229, 155)'};
  border-radius: 4px;
  color: #fff;
  max-width: 480px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  margin-top: 16px;
  display: flex;
  position: relative;
  cursor: pointer;
`

export const WrapperMessage = styled.div`
  padding: 16px 24px;
  line-height: 1.4;
`

export const Message = styled.p``

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 16px;
  margin-top: 8px;
  margin-right: 8px;
  cursor: pointer;
`
