import styled from 'styled-components'

export const Modal = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ModalContent = styled.section`
  border: 3px solid #000;
  width: 500px;
  background-color: #fff;
`
export const CloseIcon = styled.div`
  cursor: pointer;
  font-size: 20px;
  text-align: end;
  margin: 10px;
`

export const ModalTitle = styled.h4`
  font-weight: 700;
  font-size: 30px;
  line-height: 28px;
  text-align: center;
`
export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 100%;
  color: white;
`

export const Button = styled.button`
  cursor: pointer;
  margin: 10px;
  padding: 10px;
`
