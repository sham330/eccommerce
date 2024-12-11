// src/Store/store.js
import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './loginSlice';
import productReducer from './productSlice';
import registrationSlice from './registrationSlice'
import profileSlice from './profileSlice'
import cartReducer from './cartSlic'; // Assuming you have a cart slice

const store = configureStore({
  reducer: {
    login: loginSlice,
    registration:registrationSlice,
    products: productReducer,
    profile: profileSlice,
    cart: cartReducer, // Add your cart reducer here
  },
});

export default store;
