import React from "react"

import HeroContainer from "./HeroContainer"
import HeroText from "./HeroText"
import HeroOverlay from "./HeroOverlay"
import HeroImage from "./HeroImage"
import Nav from "../Nav/Nav"

const Hero = ({ text, image }) => {
  return (
    <HeroContainer>
      <Nav />
      <HeroText>
        <h1>{text}</h1>
      </HeroText>
      <HeroOverlay />
      <HeroImage fixed={image} />
    </HeroContainer>
  )
}

export default Hero
