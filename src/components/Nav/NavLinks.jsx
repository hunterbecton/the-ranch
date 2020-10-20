import styled from "styled-components"

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  position: relative;

  img {
    width: 18rem;
    margin: 0 5rem;
  }

  @media only screen and (max-width: 70rem) {
    margin: 0;

    img {
      width: 12rem;
      margin: 0 4rem;
    }
  }

  @media ${props => props.theme.breakpoints.m} {
    img {
      margin: 0 3rem;
    }
  }

  @media ${props => props.theme.breakpoints.s} {
    img {
      margin: 0 2rem;
    }
  }
`

export default NavLinks
