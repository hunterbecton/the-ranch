import styled from "styled-components"

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  height: min-content;
  padding: 3rem 0;
  z-index: 3000;
  align-self: center;

  @media ${props => props.theme.breakpoints.m} {
    align-self: flex-start;
  }
`

export default NavContainer
