import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Shop from './components/Shop/Shop';
import { Home } from './components/Home/Home';
import VersionPage from './components/Special/VersionPage';
import ProductDetailPage from './components/Context/ProductDetailPage';
import { Provider } from 'react-redux';
import store from './Store/Store';
import Cart from './components/Cart';
import CheckoutPage from './components/Context/CheckoutPage';
import AboutUs from './components/About/Aboutus';
import Scrolltop from './components/Scrolltop';
import LoginPage from './components/LoginRe/LoginPage';
import RegisterPage from './components/LoginRe/RegisterPage';
import ProfilePage from './components/ProfilePage';
import CookieConsent from './components/Context/CookieConsent';



const App = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (optional)
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div>
      <Provider store={store}>
       <Router>
        <Scrolltop/>
        
      <div>
        <Navbar />
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />

          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/special" element={<VersionPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} /> {/* Route for product detail page */}
          <Route path="/CheckoutPage" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />

        </Routes>
        <Footer />
      </div>
      <CookieConsent/>


    </Router>
    </Provider>
    </div>
  );
};

export default App;
