import styled from "styled-components"

const HeroContainer = styled.header`
  grid-column: 1 / span 14;
  display: flex;
  flex-direction: column;
  height: 47rem;
  background-color: ${props => props.theme.colors.black1};
  overflow: hidden;
  position: relative;

  h1 {
    z-index: 2000;
  }

  .hero__image {
    opacity: 0.4;
  }

  @media ${props => props.theme.breakpoints.m} {
    grid-column: 1 / span 8;
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    gap: ${props => (props.gapDefault ? props.gapDefault : "1rem 1rem")};
    margin: ${props => (props.marginDefault ? props.marginDefault : 0)};
  }

  @media ${props => props.theme.breakpoints.s} {
    gap: ${props => (props.gapSmall ? props.gapSmall : "1rem 1rem")};
    margin: ${props => (props.marginSmall ? props.marginSmall : 0)};
  }
`

export default HeroContainer
