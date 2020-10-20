import React from "react"

import MenuItemContainer from "./MenuItemContainer"

const FoodItem = ({ title, price }) => {
  return (
    <MenuItemContainer>
      <p className="menu-item__title">{title}</p>
      <p className="menu-item__price">{`$${price}`}</p>
    </MenuItemContainer>
  )
}

export default FoodItem
