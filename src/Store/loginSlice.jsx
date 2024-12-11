// src/Store/loginSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    loginError: null,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state, action) => {
            // Here you can add logic to handle successful login, e.g., setting the user info
            state.isAuthenticated = true; // Set authenticated status to true
            state.loginError = null; // Clear any previous login errors
        },
        logout: (state) => {
            state.isAuthenticated = false; // Reset authentication status
        },
        setLoginError: (state, action) => {
            state.loginError = action.payload; // Set the login error message
        },
    },
});

export const { login, logout, setLoginError } = loginSlice.actions;
export default loginSlice.reducer;
