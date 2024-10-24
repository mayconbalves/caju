import { HiOutlineX } from 'react-icons/hi'
import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
`

export const ModalTitle = styled.h2`
  margin-top: 0;
`

export const WrapperIcon = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`

export const CloseIcon = styled(HiOutlineX)`
  cursor: pointer;
  font-size: x-large;
  position: relative;
  right: 0;

  &:hover {
    color: #fc2a2a;
    transform: scale(1.2);
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`
