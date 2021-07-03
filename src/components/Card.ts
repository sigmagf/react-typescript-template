import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  width: auto;
  background: ${({ theme }) => theme.primary.main};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 15px;
  cursor: pointer;
  transition: all 250ms ease;
  padding: 20px;
`
