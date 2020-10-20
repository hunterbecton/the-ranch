import styled from "styled-components"

const FooterContactContainer = styled.div`
  grid-column: 2 / span 12;
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 4.2rem));
  gap: ${props => (props.gapDefault ? props.gapDefault : "0 2rem")};
  padding: 6rem 0;

  @media ${props => props.theme.breakpoints.m} {
    grid-column: 2 / span 6;
    grid-template-columns: repeat(6, 1fr);
    gap: ${props => (props.gapDefault ? props.gapDefault : "0 1rem")};
  }
`

export default FooterContactContainer
