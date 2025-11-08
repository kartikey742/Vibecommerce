import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { Cartitem } from "../components/Cartitem";
import { setLoading,setCartItems } from "../store/cartSlice";
import { useState } from "react";
import { CheckoutModal } from "../components/CheckoutModal";
import CheckoutForm from "../components/CheckoutForm";
const Cart = ({ handleRemove }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);  
  const [isForm, setIsForm] = useState(false);
  const [modalData, setModalData] = useState(null); 
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = cartItems?.reduce(
    (acc, item) => acc + item.productId.price * item.quantity,
    0
  );

const dispatch = useDispatch();
  console.log(cartItems);
  const onSubmit =async (formData) => {
    
  try{
    setLoading(true);
    const res=await fetch('http://localhost:5000/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartItems }),
    });

    const data = await res.json();
    console.log(data);
    if (res.ok) {
      setIsForm(false);
      setModalData({ ...formData, ...data });
    setIsModalOpen(true);
      dispatch(setCartItems([]));
    } 
  } catch (error) {
    console.error("Error during checkout:", error);
  } finally {
    setLoading(false);
  }
}
  return (
    <div className="cart-container">
      <h2 className="cart-title">
        <FaShoppingCart /> Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <img
            src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
            alt="Empty cart"
            className="empty-cart-img"
          />
          <h3>Your cart is empty</h3>
          <p>Start adding some products!</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
             <Cartitem key={item._id} item={item} handleRemove={handleRemove} />
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ₹{total.toFixed(2)}</h3>
            <button className="checkout-btn" onClick={() => { setIsForm(true); }}>Proceed to Checkout</button>
          </div>
        </>
      )}
      {isModalOpen && <CheckoutModal modalData={modalData}  setIsModalOpen={setIsModalOpen} />}
      {isForm && <CheckoutForm onSubmit={onSubmit} setIsForm={setIsForm} />}
    </div>
  );
};

export default Cart;
