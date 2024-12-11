// src/Store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialCart = JSON.parse(localStorage.getItem('cart')) || [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: initialCart,
    totalQuantity: initialCart.reduce((sum, item) => sum + item.quantity, 0),
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 });
      }
      state.totalQuantity++;

      // Check cookie consent
      if (localStorage.getItem('cookieConsent') === 'true') {
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.cartItems = state.cartItems.filter(item => item.id !== id);
        } else {
          existingItem.quantity--;
        }
        state.totalQuantity--;
      }

      if (localStorage.getItem('cookieConsent') === 'true') {
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
      }
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalQuantity = 0;

      if (localStorage.getItem('cookieConsent') === 'true') {
        localStorage.removeItem('cart');
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
