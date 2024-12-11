// src/Store/profileSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunks for async fetching
export const fetchOrders = createAsyncThunk('profile/fetchOrders', async (userId) => {
  const response = await axios.get(`/api/users/${userId}/orders`); // Replace with your API endpoint
  return response.data;
});

export const fetchReviews = createAsyncThunk('profile/fetchReviews', async (userId) => {
  const response = await axios.get(`/api/users/${userId}/reviews`); // Replace with your API endpoint
  return response.data;
});

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    orders: [],
    reviews: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle orders fetch
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.loading = false;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handle reviews fetch
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.loading = false;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default profileSlice.reducer;
