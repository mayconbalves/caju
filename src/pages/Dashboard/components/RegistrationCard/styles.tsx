import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 4px solid #fff;
  margin: 16px;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #000;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);

  &:hover {
    box-shadow:
      0 3px 9px rgba(0, 0, 0, 0.12),
      0 3px 6px rgba(0, 0, 0, 0.24);
  }
`

export const TitleCard = styled.h3`
  margin: 0;
`

export const DataCard = styled.p`
  margin: 0;
`

export const IconAndText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Actions = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;

  svg {
    cursor: pointer;
  }
`
