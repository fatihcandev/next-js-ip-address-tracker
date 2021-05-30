import styled from 'styled-components'

import { breakpoints, colors } from 'theme'

export const Container = styled.form`
  display: flex;
  height: 55px;
  width: 100%;
  max-width: 540px;

  @media ${breakpoints.mdMax} {
    padding: 0 24px;
  }
`

export const Input = styled.input`
  padding: 0 16px;
  width: 100%;
  font-size: 18px;
  border-radius: 15px 0 0 15px;
  border: 0;

  &::placeholder {
    color: ${colors.darkGray};
  }
`

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  background-color: black;
  padding: 0 16px;
  position: relative;
  width: 60px;
  border: 0;
  border-radius: 0 15px 15px 0;

  &::after {
    content: '';
    width: 11px;
    height: 14px;
    background: url('/images/icon-arrow.svg') center/cover no-repeat;
    position: absolute;
    left: 24px;
  }
`
