import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import NavContainer from "./NavContainer"
import NavLinks from "./NavLinks"
import NavGroup from "./NavGroup"
import NavSocial from "./NavSocial"
import Logo from "../../images/ranch-logo.svg"
import Instagram from "../../images/instagram.svg"
import Facebook from "../../images/facebook.svg"

const Nav = () => {
  return (
    <NavContainer>
      <NavLinks>
        <NavGroup>
          <AnchorLink to="/#story" title="Story">
            Our Story
          </AnchorLink>
          <AnchorLink to="/#menu" title="Menu">
            Menu
          </AnchorLink>
        </NavGroup>
        <img src={Logo} alt="The Ranch Logo" />
        <NavGroup>
          <AnchorLink to="/#events" title="Events">
            Calendar
          </AnchorLink>
          <AnchorLink to="/#hours" title="Hours">
            Hours
          </AnchorLink>
          <NavSocial>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <img src={Instagram} alt="The Ranch Instagram" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <img src={Facebook} alt="The Ranch Facebooko" />
            </a>
          </NavSocial>
        </NavGroup>
      </NavLinks>
    </NavContainer>
  )
}

export default Nav
