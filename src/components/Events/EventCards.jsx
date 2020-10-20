import styled from "styled-components"

const EventCards = styled.div`
  grid-column: 2 / span 12;
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 4.2rem));
  gap: 2rem;
  margin-bottom: 4rem;

  @media ${props => props.theme.breakpoints.m} {
    grid-column: 2 / span 6;
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
  }
`

export default EventCards
