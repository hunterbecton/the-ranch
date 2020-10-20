import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import MobileNavContainer from "./MobileNavContainer"
import MobileNavLinks from "./MobileNavLinks"

const MobileNav = ({ isMobileOpen }) => {
  return (
    <MobileNavContainer isMobileOpen={isMobileOpen}>
      <MobileNavLinks isMobileOpen={isMobileOpen}>
        <AnchorLink to="/#story" title="Story">
          Our Story
        </AnchorLink>
        <AnchorLink to="/#menu" title="Menu">
          Menu
        </AnchorLink>
        <AnchorLink to="/#events" title="Events">
          Calendar
        </AnchorLink>
        <AnchorLink to="/#hours" title="Hours">
          Hours
        </AnchorLink>
      </MobileNavLinks>
    </MobileNavContainer>
  )
}

export default MobileNav
