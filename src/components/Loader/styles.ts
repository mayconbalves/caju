import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: fixed;
  background: rgba(250, 250, 250, 0.6);
  z-index: 1;
`
export const Spinner = styled.div`
  width: 64px;
  height: 64px;
  border: 8px solid;
  border-color: #3d5af1 transparent #3d5af1 transparent;
  border-radius: 50%;
  animation: spin-anim 1.2s linear infinite;

  @keyframes spin-anim {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
export const Title = styled.p`
  font-size: larger;
`
