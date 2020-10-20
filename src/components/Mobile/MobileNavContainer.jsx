import styled from "styled-components"

const MobileNavContainer = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.black1};
  top: 0;
  right: ${props => (props.isMobileOpen ? "0" : "-100%")};
  z-index: 5000;
  transition: ${props => props.theme.animations.menu};

  @media only screen and (max-width: 70rem) {
    display: flex;
  }
`

export default MobileNavContainer
