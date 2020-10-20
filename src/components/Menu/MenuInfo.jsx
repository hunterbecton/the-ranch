import styled from "styled-components"

const MenuInfo = styled.div`
  grid-column: 8 / span 6;
  color: ${props => props.theme.colors.black1};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 5rem 0;

  .menu__tagline {
    font-size: 1rem;
    line-height: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .menu__title {
    font-size: 2.25rem;
    line-height: 2.625rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  @media ${props => props.theme.breakpoints.m} {
    grid-column: 2 / span 6;
  }
`

export default MenuInfo
