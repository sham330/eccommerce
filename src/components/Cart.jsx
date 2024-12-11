// src/components/Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { removeFromCart, clearCart } from '../Store/cartSlic';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate function

  const handlePlaceOrder = () => {
    navigate('/Checkoutpage'); // Redirect to checkout page
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.name} (x{item.quantity})</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
              <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-500">Remove</button>
            </div>
          ))}
          <button onClick={() => dispatch(clearCart())} className="mt-4 bg-red-500 text-white px-4 py-2">
            Clear Cart
          </button>
          <button onClick={handlePlaceOrder} className="mt-4 ml-4 bg-blue-500 text-white px-4 py-2">
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
