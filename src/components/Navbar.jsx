import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaStar, FaShoppingCart, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const userProfileImage = useSelector((state) => state.registration.userProfileImage);
  const location = useLocation();
  
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu on/off
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu after clicking any link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white p-4 shadow-md sticky top-0 z-50 transition duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">JewelryStore</div>

        {/* Hamburger icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes className="text-gray-600 text-2xl" /> : <FaBars className="text-gray-600 text-2xl" />}
        </div>

        {/* Links section */}
        <ul
          className={`md:flex md:flex-row flex-col md:space-x-6 items-center md:static w-full md:w-auto transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? 'fixed top-0 right-0 bg-white w-3/4 h-full flex flex-col justify-start items-center z-50 pt-16'
              : 'hidden'
          }`}
        >
          {/* Close button for mobile menu */}
          {isMenuOpen && (
            <div className="absolute top-4 right-4 md:hidden" onClick={toggleMenu}>
              <FaTimes className="text-gray-600 text-3xl cursor-pointer" />
            </div>
          )}

          <li className="mb-6 md:mb-0">
            <Link
              to="/"
              onClick={handleLinkClick}
              className={`text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out ${location.pathname === '/' ? 'font-bold text-gray-800 border-b-2 border-black' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="mb-6 md:mb-0">
            <Link
              to="/aboutus"
              onClick={handleLinkClick}
              className={`text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out ${location.pathname === '/aboutus' ? 'font-bold text-gray-800 border-b-2 border-black' : ''}`}
            >
              About
            </Link>
          </li>
          <li className="mb-6 md:mb-0">
            <Link
              to="/shop"
              onClick={handleLinkClick}
              className={`text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out ${location.pathname === '/shop' ? 'font-bold text-gray-800 border-b-2 border-black' : ''}`}
            >
              Shop
            </Link>
          </li>
          <li className="mb-6 md:mb-0">
            <Link
              to="/special"
              onClick={handleLinkClick}
              className={`flex items-center px-3 py-1 rounded-lg transition duration-200 ease-in-out ${location.pathname === '/special' ? 'bg-red-600 text-white font-bold' : 'text-red-600 border border-red-600 hover:bg-red-600 hover:text-white'}`}
            >
              <FaStar className="mr-1" />
              Special
            </Link>
          </li>
          <li className="mb-6 md:mb-0">
            <Link
              to="/cart"
              onClick={handleLinkClick}
              className={`flex items-center px-3 py-1 rounded-lg transition duration-200 ease-in-out ${location.pathname === '/cart' ? 'bg-blue-600 text-white font-bold' : 'text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white'}`}
            >
              <FaShoppingCart className="mr-1" />
              Cart ({cartItems.length})
            </Link>
          </li>

          {/* Login/Profile Link */}
          <li className="flex items-center mb-6 md:mb-0">
            {isAuthenticated ? (
              <Link to="/profile" onClick={handleLinkClick} className="flex items-center px-3 py-1">
                {userProfileImage ? (
                  <img
                    src={userProfileImage}
                    alt="Profile"
                    className="w-12 h-12 rounded-full border border-gray-300"
                  />
                ) : (
                  <FaUserCircle className="text-3xl text-gray-600" />
                )}
                <span className="ml-2 text-lg text-gray-600">Logged in</span>
              </Link>
            ) : (
              <Link
                to="/login"
                onClick={handleLinkClick}
                className="text-gray-600 hover:text-gray-800 flex items-center px-3 py-1 transition duration-300 ease-in-out"
              >
                <FaUserCircle className="mr-1" />
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
