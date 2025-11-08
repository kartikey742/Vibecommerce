import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
const Navbar = () => {
  const {cartItems}= useSelector((state) => state.cart);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div onClick={() => {navigate('/')}} className="navbar-logo" > E-Commerce</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li className="cart-link">
          <a href="/cart">
            <FaShoppingCart className="cart-icon" />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
