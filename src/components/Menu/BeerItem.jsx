import React from "react"

import MenuItemContainer from "./MenuItemContainer"

const BeerItem = ({ title, brewery, type }) => {
  return (
    <MenuItemContainer>
      <p className="menu-item__title">{title}</p>
      <p>
        <span className="menu-item__brewery">{brewery}</span> |{" "}
        <span className="menu-item__type">{type}</span>
      </p>
    </MenuItemContainer>
  )
}

export default BeerItem
