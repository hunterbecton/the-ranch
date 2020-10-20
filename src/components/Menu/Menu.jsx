import React from "react"

import MenuContainer from "./MenuContainer"
import MenuImage from "./MenuImage"
import MenuInfo from "./MenuInfo"
import MenuTabs from "./MenuTabs"

const Menu = ({
  tagline,
  title,
  image,
  coffees,
  pastries,
  beers,
  snacks,
  id,
}) => {
  return (
    <MenuContainer id={id}>
      <MenuImage filter={image} />
      <MenuInfo>
        <p className="menu__tagline">{tagline}</p>
        <h4 className="menu__title">{title}</h4>
        <MenuTabs
          coffees={coffees}
          pastries={pastries}
          beers={beers}
          snacks={snacks}
        />
      </MenuInfo>
    </MenuContainer>
  )
}

export default Menu
