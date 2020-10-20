import styled from "styled-components"

const MenuItemContainer = styled.div`
  grid-column-end: span 2;
  display: flex;
  flex-direction: column;

  & > .menu-item__title {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }

  & > .menu-item__brewery,
  & > .menu-item__type,
  & > .menu-item__price {
    font-size: 1rem;
    line-height: 1.125rem;
  }

  @media ${props => props.theme.breakpoints.s} {
    grid-column-end: span 3;
  }
`

export default MenuItemContainer
