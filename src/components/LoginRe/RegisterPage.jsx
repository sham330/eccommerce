// src/pages/RegisterPage.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { register, setRegistrationError } from '../../Store/registrationSlice';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleRegister = () => {
    if (!username || !password || !confirmPassword || !address || !pincode || !country || !phone || !email) {
      setError('Please fill in all fields.');
      dispatch(setRegistrationError('Please fill in all fields.'));
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      dispatch(setRegistrationError('Passwords do not match.'));
      return;
    }

    // Clear error and dispatch the register action
    setError('');
    dispatch(register({ username, password, address, pincode, country, phone, email }));
    navigate('/login');
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(https://img.freepik.com/free-vector/watercolor-colorful-butterfly-background_23-2150112175.jpg)` }} // Set the background image here
    >
      {/* Background Overlay with Light Gray Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 opacity-80 pointer-events-none"></div>

      <div
        className="z-10 bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-xl shadow-2xl max-w-md w-full transform transition duration-500 hover:scale-105"
        data-aos="zoom-in"
      >
        <h2 className="text-4xl font-extrabold text-black text-center mb-8 drop-shadow-lg" data-aos="fade-down">
          Register
        </h2>
        
        {error && <p className="text-red-500 mb-4 text-center font-semibold">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full bg-white/20 text-black placeholder-black px-4 py-3 mb-4 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500"
          data-aos="fade-left"
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-white/20 text-black placeholder-black px-4 py-3 mb-4 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500"
          data-aos="fade-left"
        />
        
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full bg-white/20 text-black placeholder-black px-4 py-3 mb-4 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500"
          data-aos="fade-left"
        />
        
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full bg-white/20 text-black placeholder-black px-4 py-3 mb-4 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500"
          data-aos="fade-left"
        />
        
        <input
          type="text"
          placeholder="Pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          className="w-full bg-white/20 text-black placeholder-black px-4 py-3 mb-4 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500"
          data-aos="fade-left"
        />
        
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full bg-white/20 text-black placeholder-black px-4 py-3 mb-4 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500"
          data-aos="fade-left"
        />
        
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full bg-white/20 text-black placeholder-black px-4 py-3 mb-4 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500"
          data-aos="fade-left"
        />
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-white/20 text-black placeholder-black px-4 py-3 mb-4 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500"
          data-aos="fade-left"
        />
        
        <button
          onClick={handleRegister}
          className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          data-aos="fade-up"
        >
          Register
        </button>

        <button
          onClick={() => navigate('/login')}
          className="w-full mt-4 bg-gray-700 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-800 transition duration-300 transform hover:scale-105"
          data-aos="fade-up"
        >
          Already have an account? Login
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
