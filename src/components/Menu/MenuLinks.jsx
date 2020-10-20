import styled from "styled-components"

const MenuLinks = styled.div`
  display: flex;
  margin-bottom: 4rem;

  & > button {
    margin-right: 2rem;
    border: none;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid transparent;
    transition: ${props => props.theme.animations.link};
    background-color: transparent;
  }

  & > button:hover,
  & > button:focus {
    color: ${props => props.theme.colors.orange};
  }

  .active {
    border-bottom: 1px solid ${props => props.theme.colors.orange};
    color: ${props => props.theme.colors.orange};
  }
`

export default MenuLinks
