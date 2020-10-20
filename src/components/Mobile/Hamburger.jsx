import React from "react"

import HamburgerContainer from "./HamburgerContainer"

const Hamburger = ({ isMobileOpen, setMobileOpen }) => {
  return (
    <HamburgerContainer
      role="button"
      tabIndex={0}
      onClick={() => setMobileOpen(!isMobileOpen)}
      onKeyDown={e => (e.key === "Enter" ? setMobileOpen(!isMobileOpen) : null)}
      className={isMobileOpen ? "open" : ""}
      isMobileOpen={isMobileOpen}
    >
      <span></span>
      <span></span>
      <span></span>
    </HamburgerContainer>
  )
}

export default Hamburger
