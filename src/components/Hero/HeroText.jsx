import styled from "styled-components"

const HeroText = styled.div`
  max-width: 47.5rem;
  z-index: 2000;
  text-align: center;
  height: min-content;
  align-self: center;
  margin: auto 0;
  transform: translateY(-7rem);
  padding: 0 2rem;

  h1 {
    font-size: 3.5rem;
    line-height: 4.125rem;
    font-weight: 700;
    color: ${props => props.theme.colors.white};
  }

  @media ${props => props.theme.breakpoints.m} {
    padding: 0 1rem;
  }
`

export default HeroText
