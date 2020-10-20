import styled from "styled-components"

import FullWidthSection from "../Layout/FullWidthSection"

const EventsContainer = styled(FullWidthSection)`
  padding: 7.5rem 0;
  background-color: ${props => props.theme.colors.beige};
  color: ${props => props.theme.colors.black1};
`

export default EventsContainer
