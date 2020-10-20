import styled from "styled-components"

const StoryContent = styled.div`
  grid-column: 2 / span 12;
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 4.2rem));
  gap: ${props => (props.gapDefault ? props.gapDefault : "2rem 2rem")};
  padding: 5rem 0;

  @media ${props => props.theme.breakpoints.m} {
    grid-column: 2 / span 6;
    grid-template-columns: repeat(6, 1fr);
    gap: ${props => (props.gapMedium ? props.gapMedium : "1rem 1rem")};
    margin: ${props => (props.marginMedium ? props.marginMedium : 0)};
  }

  @media ${props => props.theme.breakpoints.s} {
    gap: ${props => (props.gapSmall ? props.gapSmall : "1rem 1rem")};
    margin: ${props => (props.marginSmall ? props.marginSmall : 0)};
  }
`

export default StoryContent
