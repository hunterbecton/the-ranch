import styled from "styled-components"

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-self: center;
  margin: auto;

  & > a {
    color: ${props => props.theme.colors.white};
    font-size: 2rem;
    line-height: 2.5rem;
    margin: 0.5rem 0;
    transition: ${props => props.theme.animations.link};
  }

  & > a:hover,
  & > a:focus {
    color: ${props => props.theme.colors.orange};
  }
`

export default MobileNavLinks
