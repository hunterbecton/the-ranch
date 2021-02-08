import styled from "styled-components"

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  position: relative;

  img {
    width: 12rem;
    margin: 0 4rem;
  }

  @media ${props => props.theme.breakpoints.m} {
    margin: 0;
  }

  @media ${props => props.theme.breakpoints.s} {
    img {
      margin: 0 2rem;
    }
  }
`

export default NavLinks
