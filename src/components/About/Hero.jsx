import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const AboutUsHero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleButtonClick = () => {
    navigate('/shop');
  };

  return (
    <section
      id="about"
      className="bg-cover bg-center h-screen relative "
      style={{ backgroundImage: "url('https://img.freepik.com/free-vector/watercolor-colorful-butterfly-background_23-2150112175.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        {/* Hero Content */}
        <div className="text-center" data-aos="fade-up">
          <h1 className="text-white text-6xl font-extrabold leading-tight tracking-wide">
            Our Story of Craftsmanship
          </h1>
          <p className="text-gray-300 text-xl mt-4">
            A journey of precision, passion, and timeless beauty
          </p>

          {/* Call to Action Button */}
          <button
            onClick={handleButtonClick}
            className="mt-8 px-8 py-3 bg-gold text-white font-bold rounded-full shadow-lg hover:text-black hover:bg-white hover:shadow-xl transition duration-300"
            style={{ position: 'relative', zIndex: 10 }}
            data-aos="zoom-in"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
