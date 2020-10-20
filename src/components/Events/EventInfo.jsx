import styled from "styled-components"

const EventInfo = styled.div`
  grid-column: 5 / span 6;
  text-align: center;
  margin-bottom: 4rem;

  & > .event__tagline {
    font-size: 1rem;
    line-height: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  & > .event__title {
    font-size: 2.25rem;
    line-height: 2.625rem;
    font-weight: 700;
  }

  @media ${props => props.theme.breakpoints.m} {
    grid-column: 2 / span 6;
  }
`

export default EventInfo
