import styled from "styled-components"

const NavGroup = styled.div`
  display: flex;
  position: relative;

  & > a {
    color: ${props => props.theme.colors.white};
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin: 0 1.25rem;
    transition: ${props => props.theme.animations.link};
  }

  & > a:hover,
  & > a:focus {
    color: ${props => props.theme.colors.orange};
  }

  @media ${props => props.theme.breakpoints.m} {
    display: none;
  }
`

export default NavGroup
