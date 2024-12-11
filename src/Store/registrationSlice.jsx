// src/Store/registrationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    user: null,
    registrationStatus: null, // Can hold 'success', 'error', or other status strings
    error: null, // Holds any error message during registration
  },
  reducers: {
    register: (state, action) => {
      const { username, password, address, pincode, country, phone, email } = action.payload;
      state.user = { username, password, address, pincode, country, phone, email };
      state.registrationStatus = 'success'; // Set status to 'success' on successful registration
      state.error = null; // Clear any previous errors
    },
    setRegistrationError: (state, action) => {
      state.registrationStatus = 'error';
      state.error = action.payload; // Set error message
    },
    clearRegistrationStatus: (state) => {
      state.registrationStatus = null; // Reset status after displaying success or error
      state.error = null; // Clear error message
    },
  },
});

// Export actions
export const { register, setRegistrationError, clearRegistrationStatus } = registrationSlice.actions;

// Export reducer
export default registrationSlice.reducer;
