import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Home} from './pages/Home';
import './css/navbar.css'; 
import './css/form.css';
import './css/checkout.css';
import './css/product.css'; 
import './css/Cart.css'; 
import Cart from './pages/Cart';
import { useState,useEffect } from 'react';
import Navbar from './components/Navbar'
import { useSelector,useDispatch } from 'react-redux';
import { setCartItems ,setLoading} from './store/cartSlice';
function App() {
  const dispatch = useDispatch();
  const { cartItems,loading } = useSelector((state) => state.cart);
  useEffect(()=>{
    const fetchCartItems = async () => {
        try{
            dispatch(setLoading(true));
            const response = await fetch('http://localhost:5000/api/cart');
            const data = await response.json();
            dispatch(setCartItems(data.data));
            console.log(data.data);
           
        } catch (error) {
            console.log('Error fetching cart items:', error);
        } finally {
            dispatch(setLoading(false));
        }
    };
    fetchCartItems();
  }, []);
  const handleRemove = async(id) => {
    dispatch(setLoading(true));
      try {
        const response = await fetch(`http://localhost:5000/api/cart/${id}`, {
          method: 'DELETE',
        });
        const data = await response.json();
        if (response.ok) {
          console.log('Item removed from cart');
          dispatch(setCartItems(cartItems.filter((item) => item._id !== id)));
        } 
      } catch (error) {
        console.log('Error removing item from cart:', error);
      } finally {
        dispatch(setLoading(false));
      }
    
  
  };

  return (
    <div className="App">
      <Navbar />
     <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/cart" element={<Cart handleRemove={handleRemove} />} />
</Routes>

{loading && (
  <div className="loader-overlay">
    <div className="loader-ring"></div>
  </div>
)}
    </div>
  );
}

export default App;
