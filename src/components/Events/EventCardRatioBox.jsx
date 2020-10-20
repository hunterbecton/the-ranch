import styled from "styled-components"

const EventCardRatioBox = styled.div`
  grid-column-end: span 4;
  height: 0;
  overflow: hidden;
  padding-top: 60%;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: ${props => props.theme.animations.card};

  &:hover,
  &:focus,
  &:focus-within {
    transform: translateY(-0.25rem);
  }

  @media ${props => props.theme.breakpoints.m} {
    grid-column-end: span 3;
  }

  @media ${props => props.theme.breakpoints.s} {
    grid-column-end: span 3;
  }

  @media ${props => props.theme.breakpoints.s} {
    grid-column-end: span 6;
    padding-top: 40%;
  }
`

export default EventCardRatioBox
