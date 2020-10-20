import React, { useState, Fragment } from "react"
import MenuLinks from "./MenuLinks"
import MenuItems from "./MenuItems"
import BeerItem from "./BeerItem"
import FoodItem from "./FoodItem"

const MenuTabs = ({ coffees, pastries, beers, snacks }) => {
  const [activeTab, setActiveTab] = useState("coffee")

  return (
    <Fragment>
      <MenuLinks>
        <button
          className={activeTab === "coffee" ? "active" : ""}
          type="button"
          onClick={() => setActiveTab("coffee")}
        >
          Coffee
        </button>
        <button
          className={activeTab === "pastries" ? "active" : ""}
          type="button"
          onClick={() => setActiveTab("pastries")}
        >
          Pastries
        </button>
        <button
          className={activeTab === "beer" ? "active" : ""}
          type="button"
          onClick={() => setActiveTab("beer")}
        >
          Beer
        </button>
        <button
          className={activeTab === "snacks" ? "active" : ""}
          type="button"
          onClick={() => setActiveTab("snacks")}
        >
          Snacks
        </button>
      </MenuLinks>
      <MenuItems>
        {activeTab === "coffee" &&
          coffees.map((coffee, i) => (
            <FoodItem key={i} title={coffee.title1.text} price={coffee.price} />
          ))}
        {activeTab === "pastries" &&
          pastries.map((pastry, i) => (
            <FoodItem key={i} title={pastry.title1.text} price={pastry.price} />
          ))}
        {activeTab === "beer" &&
          beers.map((beer, i) => (
            <BeerItem
              key={i}
              title={beer.title1.text}
              brewery={beer.brewery.text}
              type={beer.type}
            />
          ))}
        {activeTab === "snacks" &&
          snacks.map((snack, i) => (
            <FoodItem key={i} title={snack.title1.text} price={snack.price} />
          ))}
      </MenuItems>
    </Fragment>
  )
}

export default MenuTabs
