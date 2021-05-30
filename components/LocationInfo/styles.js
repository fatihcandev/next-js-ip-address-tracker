import styled from 'styled-components'

import { breakpoints, colors } from 'theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;

  @media ${breakpoints.lg} {
    align-items: flex-start;

    & + div {
      border-left: 1px solid ${colors.darkGray};
    }
  }
`

export const Title = styled.span`
  margin-bottom: 12px;
  font-size: 14px;
  color: ${colors.darkGray};
  font-weight: 500;
`

export const Description = styled.span`
  font-size: 18px;
  color: black;
  font-weight: 500;

  @media ${breakpoints.lg} {
    font-size: 27px;
  }
`
