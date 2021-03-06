import styled from "styled-components"

const ButtonLink = styled.a`
  padding: 1.5rem 6rem;
  background-color: transparent;
  color: ${props => props.theme.colors.black1};
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 700;
  border: 2px solid ${props => props.theme.colors.black1};
  border-radius: 0;
  text-transform: uppercase;
  transition: ${props => props.theme.animations.button};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.black1};
  }

  @media ${props => props.theme.breakpoints.s} {
    font-size: 1rem;
  }
`

export default ButtonLink
