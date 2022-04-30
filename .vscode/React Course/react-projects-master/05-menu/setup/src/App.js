import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(
  items.map((item) => {
    return item.category;
  })
)]
console.log(allCategories);
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    const newItems = items.filter((item) => {
      if (item.category === category) {
        return item;
      }
      if (category === "all") {
        return items;
      }
    });
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filter={filterItems} cats={allCategories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
