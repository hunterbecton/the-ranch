import styled from "styled-components"

const FooterLogoContainer = styled.div`
  grid-column: 2 / span 12;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;

  & > img {
    width: 18rem;
  }

  @media ${props => props.theme.breakpoints.m} {
    grid-column: 2 / span 6;
  }
`

export default FooterLogoContainer
