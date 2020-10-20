import styled from "styled-components"

import FullWidthSection from "../Layout/FullWidthSection"

const FooterContainer = styled(FullWidthSection)`
  padding: 7.5rem 0;
  background-color: ${props => props.theme.colors.black1};
  color: ${props => props.theme.colors.white};
`

export default FooterContainer
