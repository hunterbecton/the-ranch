import styled from "styled-components"

const StoryInfo = styled.div`
  grid-column: 1 / span 6;
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;

  .story__tagline {
    font-size: 1rem;
    line-height: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .story__title {
    font-size: 2.25rem;
    line-height: 2.625rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .story__description {
    font-size: 1.5rem;
    line-height: 1.75rem;
    font-weight: 400;
  }
`

export default StoryInfo
