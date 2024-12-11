// src/pages/ProfilePage.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Store/loginSlice';
import { fetchOrders, fetchReviews } from '../Store/profileSlice';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const user = useSelector((state) => state.registration.user);
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const orders = useSelector((state) => state.profile.orders);
  const reviews = useSelector((state) => state.profile.reviews);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      dispatch(fetchOrders(user.id));
      dispatch(fetchReviews(user.id));
    }
  }, [dispatch, user]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center mt-16">
        <h2 className="text-2xl font-bold">Please log in to view your profile.</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-16">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="border p-4 rounded-lg w-80 mb-4">
        <h3 className="text-xl font-semibold">Username: {user?.username}</h3>
        <p className="mt-2">Email: {user?.email ?? 'N/A'}</p>
      </div>

      <div className="w-full max-w-3xl">
        {/* Orders Section */}
        <div className="border p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold">Your Orders</h3>
          <ul>
            {orders && orders.length > 0 ? (
              orders.map((order, index) => (
                <li key={index} className="border-b py-2">
                  Order #{order.id} - {order.status}
                </li>
              ))
            ) : (
              <p>No orders found.</p>
            )}
          </ul>
        </div>

        {/* Reviews Section */}
        <div className="border p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold">Your Reviews</h3>
          <ul>
            {reviews && reviews.length > 0 ? (
              reviews.map((review, index) => (
                <li key={index} className="border-b py-2">
                  Review for {review.productName}: {review.comment}
                </li>
              ))
            ) : (
              <p>No reviews found.</p>
            )}
          </ul>
        </div>

        {/* Address Section */}
        <div className="border p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold">Your Address</h3>
          <p>{user?.address}</p>
        </div>

        {/* Help Center Section */}
        <div className="border p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold">Help Center</h3>
          <p>If you need assistance, please contact our support team.</p>
          <p>Email: support@jewelrystore.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        {/* Logout Section */}
        <div className="flex justify-end">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
