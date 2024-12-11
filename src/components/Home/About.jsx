import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const navigate = useNavigate();

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out', once: true });
  }, []);

  // Function to navigate to the about page
  const handleLearnMoreClick = () => {
    navigate('/aboutus'); // Ensure this route exists in your routing setup
  };

  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        
        {/* About Us Text Section */}
        <div
          data-aos="fade-right"
          className="flex flex-col justify-center"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Discover Our Story
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            We're more than just a store. Our products are crafted with passion, precision, and attention to detail. Every item tells a story—our story. Come explore the origins of our limited, high-quality offerings and discover why we believe in timeless craftsmanship.
          </p>
          
          <button
            onClick={handleLearnMoreClick} // Navigate to the About Us page on click
            className="self-start bg-gold text-black font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            Learn More About Us
          </button>
        </div>

        {/* Image Section */}
        <div
          data-aos="fade-left"
          className="relative"
        >
          <img
            src="https://m.media-amazon.com/images/I/51cJB1mwTrL.jpg"
            alt="Craftsmanship"
            className="rounded-lg shadow-lg"
          />
          
          {/* Optional overlay text */}
          <div
            className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-4 py-2 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p className="text-gray-800 font-semibold">Craftsmanship Since 1990</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

