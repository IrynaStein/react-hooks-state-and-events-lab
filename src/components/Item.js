import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(true)
  // console.log(item.id)

  function addToCart(){
    setCart((cart) => !cart)
    console.log (cart)
}

return (
  <li className={cart ? "" : "in-cart"}>
    <span>{name}</span>
    <span className="category">{category}</span>
    <button className="add" onClick={addToCart}>{cart? "Add to Cart" : "Remove from Cart"}</button>
  </li>
);
}

export default Item;
