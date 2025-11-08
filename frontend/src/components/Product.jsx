import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
export const Product = ({ product, addtocart }) => {
  const { cartItems } = useSelector((state) => state.cart);  
    const [value, setValue] = useState(1);
    const inCart = cartItems.some((item) => item.productId._id === product._id);
    return (
    <div key={product._id} className="product">
      <img src={product.picture} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">Rs. {product.price}</p>
      {
        <button
          className="add-to-cart-button"
          onClick={() => {if(!inCart) {addtocart(product._id, value)}}}
        >
          <div>{inCart ? 'Already In Cart' : 'Add to Cart'}</div>
          {
            !inCart && (
              <div
              className="quantity-selector"
              onClick={(e) => e.stopPropagation()}
              >
            <button onClick={() =>{if(value > 1) setValue(value - 1)}}>-</button>
            <input value={value} className="qty-input" />
            <button onClick={() => setValue(value + 1)}>+</button>
          </div>
            )
        }
        </button>
      }
    </div>
  );
};
