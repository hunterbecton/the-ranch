import styled from "styled-components"

const FullWidthSection = styled.section`
  grid-column: 1 / span 14;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  gap: ${props => (props.gapDefault ? props.gapDefault : "0 2rem")};
  margin: ${props => (props.marginDefault ? props.marginDefault : 0)};

  @media ${props => props.theme.breakpoints.m} {
    grid-column: 1 / span 8;
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    gap: ${props => (props.gapDefault ? props.gapDefault : "0 1rem")};
    margin: ${props => (props.marginDefault ? props.marginDefault : 0)};
  }

  @media ${props => props.theme.breakpoints.s} {
    gap: ${props => (props.gapSmall ? props.gapSmall : "0 1rem")};
    margin: ${props => (props.marginSmall ? props.marginSmall : 0)};
  }
`

export default FullWidthSection
