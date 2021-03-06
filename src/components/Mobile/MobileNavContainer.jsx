import styled from "styled-components"

const MobileNavContainer = styled.div`
  position: absolute;
  width: ${props => (props.isMobileOpen ? "100%" : "0")};
  height: 100vh;
  background-color: ${props => props.theme.colors.black1};
  top: 0;
  right: 0;
  z-index: 5000;
  transition: ${props => props.theme.animations.menu};
  overflow: hidden;
  display: flex;
`

export default MobileNavContainer
