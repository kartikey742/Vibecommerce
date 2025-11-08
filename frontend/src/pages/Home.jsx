import React from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { useEffect, useState } from "react";
import { Product } from "../components/Product";
import { set } from "mongoose";
import { setCartItems, setLoading } from '../store/cartSlice';
export const Home = () => {
  const dispatch = useDispatch();
  const { cartItems} = useSelector((state) => state.cart);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        dispatch(setLoading(true));
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();
        setProducts(data.data);
        
        
        dispatch(setLoading(false));  
      } catch (error) {
        console.log("Error fetching products:", error);
      } finally {
        dispatch(setLoading(false));  
      }
    };
    fetchProducts();
  }, []);
  const addtocart = async (id,value) => {
    try {
       dispatch(setLoading(true));
      const res = await fetch(`http://localhost:5000/api/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: id, quantity: value }),
      });
      const data = await res.json();
      if (res.ok) {
       dispatch(setCartItems([...cartItems, data.data]));
        console.log("Product added to cart");
      }
    } catch (error) {
      console.log("Error adding to cart:", error);
    }
    finally {
       dispatch(setLoading(false));  
    }
  };
 
  return (
    <div>
      <div className="products">
        {products.map((product) => (
          <Product key={product._id} product={product} addtocart={addtocart}  />
        ))}
      </div>
    </div>
  );
};
