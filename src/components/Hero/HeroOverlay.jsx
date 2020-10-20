import styled from "styled-components"

const HeroOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background: linear-gradient(
    180deg,
    #061221 0%,
    rgba(6, 18, 33, 0.6) 35.38%,
    #061221 100%
  );
`

export default HeroOverlay
