import styled from 'styled-components'
const registrationStatusStyles: {
  [key in string]: { background: string; title: string }
} = {
  REVIEW: {
    background: '#FDF8E9',
    title: '#EFC24D'
  },
  APPROVED: {
    background: '#EEEEFD',
    title: '#4242DF'
  },
  REPROVED: {
    background: '#FBEDF6',
    title: '#CE2893'
  }
}

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  justify-content: center;
  margin-top: 24px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`

export const Column = styled.div<{ status: string }>`
  height: auto;
  background-color: ${({ status }) => registrationStatusStyles[status].background};
  border-radius: 32px;
  min-height: 80vh;
  max-height: 80vh;
`

export const TitleColumn = styled.h2<{ status: string }>`
  margin: 0px;
  color: ${({ status }) => registrationStatusStyles[status].title};
  margin: 24px;
`

export const CollumContent = styled.div`
  overflow: auto;
  max-height: 85%;
`
