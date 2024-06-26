import { useEffect } from 'react'
import {
  CloseButton,
  Container,
  Message,
  Wrapper,
  WrapperMessage
} from './styles'
import { Props } from './types'

const Toast = ({ toast, close }: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      close()
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [toast, close])

  return (
    <Wrapper>
      <Container error={toast.error}>
        <WrapperMessage>
          <Message>{toast.message}</Message>
        </WrapperMessage>
        <div>
          <CloseButton onClick={close}>x</CloseButton>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Toast
