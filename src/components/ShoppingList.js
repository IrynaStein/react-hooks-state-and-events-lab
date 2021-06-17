import React, { useState }from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  console.log(items)
  const [filterBy, setFilter] = useState("Filter by category")
  const selectByCategory = items.filter((item) =>{
    if(filterBy === "Filter by category"){
      return true
    }
    else {
      return item.category === filterBy
      
    }
  })

  function handleFilterChange(event){
    setFilter(event.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectByCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
