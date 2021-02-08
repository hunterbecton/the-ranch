import styled from "styled-components"

const EventCard = styled.a`
  padding: 3rem 2rem;
  color: inherit;
  background-color: ${props => props.theme.colors.white};

  & > .event__date {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 400;
    margin-bottom: 1.5rem;
  }

  & > .event__item {
    font-size: 1.5rem;
    line-height: 1.75rem;
    font-weight: 700;
  }
`

export default EventCard
