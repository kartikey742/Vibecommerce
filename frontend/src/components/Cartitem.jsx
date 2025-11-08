import React from "react";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { setLoading,setCartItems } from "../store/cartSlice";
export const Cartitem = ({ item, handleRemove }) => {
    const {cartItems}=useSelector((state) => state.cart);
    console.log(cartItems);
    
    const [value, setValue] = useState(item?.quantity);
    const dispatch = useDispatch();
    const onChangeQuantity = async(value) => {
        dispatch(setLoading(true));
      const res = await fetch(`http://localhost:5000/api/cart/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: value }),
      });
        const data = await res.json();
        if (res.ok) {
          setValue(value);
            dispatch(setCartItems(cartItems.map((cartItem) => cartItem._id === item._id ? data.data : cartItem)));
        } else {
          console.error(data.message);
        }
        dispatch(setLoading(false));
    }
  return (
    <div className="cart-item" key={item?._id}>
      <div className="cart-item-info">
        <img
          src={item?.productId.picture}
          alt={item?.productId.name}
          className="cart-item-img"
        />
        <div className="cart-item-details">
          <h4>{item?.productId.name}</h4>
          <p>
            ₹{item?.productId.price} X {item?.quantity} = ₹
            {(item?.productId.price * item?.quantity).toFixed(2)}
          </p>
          <p>Quantity: {item?.quantity}</p>
        </div>
      </div>

      <div className="cart-item-actions">
        <div className="quantity-selector" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => {
              if (value > 1) {setValue(value - 1); onChangeQuantity(value - 1);};
            }}
          >
            -
          </button>
          <input value={value} className="qty-input" />
          <button onClick={() =>{ setValue(value + 1); onChangeQuantity(value + 1);}}>+</button>
        </div>
        <button className="remove-btn" onClick={() => handleRemove(item._id)}>
          Remove
        </button>
      </div>
    </div>
  );
};
