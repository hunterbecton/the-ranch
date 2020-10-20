import React from "react"
import styled from "styled-components"

import Grid from "./Grid"
import Nav from "../Nav/Nav"
// import Footer from "../Footer/Footer"

const LayoutGrid = styled(Grid)``

const Layout = ({ children, withNav, withFooter }) => {
  return (
    <LayoutGrid>
      {withNav ? <Nav /> : null}
      {children}
      {/* {withFooter ? <Footer /> : null} */}
    </LayoutGrid>
  )
}

export default Layout
