import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    loading: false,
  },
  reducers: {
    setCartItems: (state, action) => { 
      state.cartItems = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
 
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        item => item._id !== action.payload
      );
    },

  },
});

export const { 
  setCartItems, 
  setLoading, 
  removeCartItem, 

} = cartSlice.actions;

export default cartSlice.reducer;