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
    }
  }
`

export default NavLinks
