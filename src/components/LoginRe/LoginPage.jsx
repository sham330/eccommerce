// src/pages/LoginPage.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, setLoginError } from '../../Store/loginSlice';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

//These login funcions are used as an example using javascript
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loginError = useSelector((state) => state.login.loginError);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleLogin = () => {
    if (username && password) {
      dispatch(login({ username, email: `${username}@example.com` }));
      navigate('/');
    } else {
      dispatch(setLoginError('Please enter both username and password'));
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIn4KpAIDNbQ5fuE6ob0dCU3XXOb4DhnXWg&s)` }} // Set the background image here
    >
      {/* Background Overlay with Light Rose Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 opacity-80 pointer-events-none"></div>

      {/* Login Card with AOS Animations */}
      <div
        className="z-10 bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-xl shadow-2xl max-w-md w-full transform transition duration-500 hover:scale-105"
        data-aos="zoom-in"
      >
        <h2
          className="text-4xl font-extrabold text-black text-center mb-8 drop-shadow-lg"
          data-aos="fade-down"
        >
          Welcome Back!
        </h2>
        
        {loginError && (
          <p
            className="text-red-400 mb-4 text-center font-semibold"
            data-aos="fade-right"
          >
            {loginError}
          </p>
        )}
        
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full bg-white/20 text-black placeholder-black px-4 py-3 mb-6 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500"
          data-aos="fade-left"
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-white/20 text-black placeholder-black px-4 py-3 mb-8 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500"
          data-aos="fade-left"
        />
        
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-blue-500/50 transition duration-300 transform hover:scale-105"
          data-aos="fade-up"
        >
          Login
        </button>

        <button
          onClick={() => navigate('/register')}
          className="w-full mt-4 bg-gray-700 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-800 transition duration-300 transform hover:scale-105"
          data-aos="fade-up"
        >
          Register
        </button>
      </div>

    
    </div>
  );
};

export default LoginPage;
