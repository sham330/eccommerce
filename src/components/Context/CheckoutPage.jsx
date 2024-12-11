import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../../Store/cartSlic';
import { useNavigate } from 'react-router-dom';
import GooglePayComponent from '../Payment/GooglepayComponent';

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const [couponCode, setCouponCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [isEditingContact, setIsEditingContact] = useState(false); // Track edit mode
  const [address, setAddress] = useState('123 Main St, Springfield'); // Initial address (replace with user's data)
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890'); // Initial phone number (replace with user's data)
  const [newAddress, setNewAddress] = useState(address);
  const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber);

  const applyDiscount = () => (totalQuantity > 4 ? 0.1 : 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = applyDiscount() * totalPrice;
  const finalPrice = totalPrice - discount;

  const handleQuantityChange = (item, type) => {
    if (type === 'increase') dispatch(addToCart(item));
    else if (type === 'decrease') dispatch(removeFromCart(item.id));
  };

  const handleClearCart = () => dispatch(clearCart());
  const handleCheckout = () => {
    if (selectedPaymentMethod === 'GPay' && paymentSuccessful) {
      alert('Order placed successfully!');
      dispatch(clearCart());
      navigate('/');
    } else alert('Please complete the payment before placing the order.');
  };
  const handlePaymentSuccess = () => {
    setPaymentSuccessful(true);
    handleCheckout();
  };

  const handleEditContact = () => {
    setIsEditingContact(true);
  };

  const handleSaveContact = () => {
    setAddress(newAddress);
    setPhoneNumber(newPhoneNumber);
    setIsEditingContact(false);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>

      {/* Cart Items */}
      <div className="border p-4 rounded-lg shadow-md mb-6">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <img src={item.images[0]} alt={item.name} className="w-20 h-20 rounded-lg" />
              <div className="flex-grow ml-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <button
                    onClick={() => handleQuantityChange(item, 'decrease')}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item, 'increase')}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="text-xl font-bold">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))
        )}
        {cartItems.length > 0 && (
          <button onClick={handleClearCart} className="bg-red-600 text-white px-4 py-2 rounded-lg mt-4">
            Clear Cart
          </button>
        )}
      </div>

      {/* Contact Information */}
      <div className="border p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
        {isEditingContact ? (
          <div className="space-y-2">
            <input
              type="text"
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
              placeholder="Enter your address"
              className="w-full px-4 py-2 border rounded-lg"
            />
            <input
              type="text"
              value={newPhoneNumber}
              onChange={(e) => setNewPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border rounded-lg"
            />
            <button onClick={handleSaveContact} className="bg-green-600 text-white px-4 py-2 rounded-lg">
              Save
            </button>
          </div>
        ) : (
          <div>
            <p>Address: {address}</p>
            <p>Phone Number: {phoneNumber}</p>
            <button onClick={handleEditContact} className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4">
              Edit Contact Info
            </button>
          </div>
        )}
      </div>

      {/* Coupon Code */}
      <div className="border p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-2">Coupon Code</h3>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="px-4 py-2 border rounded-lg w-full"
          />
          <button onClick={() => setDiscountApplied(true)} className="bg-green-600 text-white px-4 py-2 rounded-lg">
            Apply Coupon
          </button>
        </div>
        {discountApplied && (
          <p className="mt-2 text-green-600">
            {totalQuantity > 4
              ? `Discount applied! You saved $${discount.toFixed(2)}`
              : 'Discount not applicable (You need more than 4 items)'}
          </p>
        )}
      </div>

      {/* Total Price */}
      <div className="border p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
        <div className="flex justify-between mb-2">
          <p>Subtotal</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        {discount > 0 && (
          <div className="flex justify-between mb-2">
            <p>Discount</p>
            <p>-${discount.toFixed(2)}</p>
          </div>
        )}
        <div className="flex justify-between mb-2">
          <p>Total</p>
          <p>${finalPrice.toFixed(2)}</p>
        </div>
      </div>

      {/* Payment Options */}
      <div className="border p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Payment Options</h3>
        <div className="flex flex-col space-y-4">
          {['COD', 'GPay', 'UPI', 'Card'].map((method) => (
            <div key={method} className="flex items-center">
              <input
                type="radio"
                id={method}
                name="payment"
                value={method}
                className="mr-2"
                onChange={(e) => setSelectedPaymentMethod(e.target.value)}
              />
              <label htmlFor={method}>{method}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Google Pay Component */}
      {selectedPaymentMethod === 'GPay' && (
        <GooglePayComponent totalAmount={finalPrice} onPaymentSuccess={handlePaymentSuccess} />
      )}

      {/* Checkout Button */}
      <div className="flex justify-end">
        <button
          onClick={handleCheckout}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-500 transition duration-200"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
