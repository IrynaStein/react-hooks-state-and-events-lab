import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [mode, setMode] = useState(true)
  // this data will be passed down to the ShoppingList as a prop
  // console.log(items);
  console.log(mode)
  function handleEventClick() {
    setMode((mode) => !mode)
    console.log("mode")
  }
  return (
    <div className={"App " + (!mode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleEventClick}>{!mode ? "Dark": "Light"} Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
