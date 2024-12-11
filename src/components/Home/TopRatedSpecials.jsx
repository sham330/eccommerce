import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectSpecialProductsByRating } from '../../Store/productSlice'; // Adjust the path as necessary
import ProductCard from '../Context/ProductCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TopRatedSpecials = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize with desired duration and one-time animation
  }, []);

  // Fetch special products sorted by rating from the Redux store
  const specialProducts = useSelector(selectSpecialProductsByRating);

  // Take the top 3 highest-rated special products
  const topRatedSpecials = specialProducts.slice(0, 3);

  return (
    <section
      className="py-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("https://t4.ftcdn.net/jpg/07/00/66/77/360_F_700667734_kLthKxBQQ4PqtR8PBHTxeLKzis9UiGqg.jpg")', // Replace with your image URL
      }}
    >
      <div
        className="container mx-auto bg-white bg-opacity-75 rounded-lg p-6"
        data-aos="fade-up"
      >
        <h2
          className="text-3xl font-bold text-center mb-8"
          data-aos="fade-down" // Add fade-down animation to the title
        >
          Top Rated Special Products
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topRatedSpecials.map((product, index) => (
            <div
              key={product.id}
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`} // Add delay for staggered animations
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedSpecials;
