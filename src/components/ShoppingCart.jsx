import React from "react";
import { Link } from "react-router-dom";

const ShoppingCart = ({ cartBooks }) => {
  return (
    <div className="Cart">
      {cartBooks.map((product) => (
        <div key={product.id} className="cartBook">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button>Remove from Cart</button>
        </div>
      ))}
      <Link to={"/Checkout"}>
        <button id="checkOut">Proceed to Check Out</button>
      </Link>
    </div>
  );
};

export default ShoppingCart;
