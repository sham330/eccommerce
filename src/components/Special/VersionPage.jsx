import React, { useEffect } from 'react';
import VersionCard from './VersionCard'; // Import your VersionCard component
import { useSelector } from 'react-redux';
import { selectSpecialProductsByRating } from '../../Store/productSlice'; // Adjust the path as needed
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS

const VersionPage = () => {
  // Get special products sorted by rating
  const specialProducts = useSelector(selectSpecialProductsByRating);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust animation duration
      easing: 'ease-in-out', // Change easing method
      once: true, // Animation runs only once when element comes into view
    });
  }, []);

  return (
    <div className="container mx-auto py-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1
          className="text-5xl font-bold text-gradient"
          data-aos="fade-up" // AOS animation trigger
        >
          Discover Our Limited Editions
        </h1>
        <p
          className="text-lg mt-2 text-gray-700"
          data-aos="fade-up"
          data-aos-delay="200" // Delay the animation slightly
        >
          Unique pieces that tell a story.
        </p>
      </header>

      {/* Hero Section */}
      <div className="relative mb-10">
        <img
          src="https://t4.ftcdn.net/jpg/07/00/66/77/360_F_700667734_kLthKxBQQ4PqtR8PBHTxeLKzis9UiGqg.jpg"
          alt="Hero"
          className="w-full h-80 object-cover rounded-lg shadow-lg"
          data-aos="zoom-in" // AOS animation trigger
          data-aos-duration="500" // Duration of the animation
        />
        {/* Overlay with text */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center rounded-lg p-4">
          <h2
            className="text-3xl text-white font-semibold mb-2"
            data-aos="fade-up"
            data-aos-delay="300" // Slight delay for the text to appear
          >
            Limited Edition Awaits
          </h2>
          <p
            className="text-lg text-gray-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Explore our collection of unique pieces.
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        data-aos="fade-up" // AOS animation trigger
        data-aos-delay="500" // Delay for the grid
      >
        {specialProducts.map((version) => (
          <VersionCard key={version.id} version={version} />
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center">
        <p className="text-gray-600">© 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default VersionPage;
