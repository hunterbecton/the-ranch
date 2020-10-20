import styled from "styled-components"

const FooterCopyrightContainer = styled.div`
  grid-column: 2 / span 12;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${props => props.theme.breakpoints.m} {
    grid-column: 2 / span 6;
  }
`

export default FooterCopyrightContainer
