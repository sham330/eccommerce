import React, { useState, useEffect } from 'react';
import ProductCard from '../Context/ProductCard';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux state
import { selectAllProducts } from '../../Store/productSlice'; // Adjust the path as needed
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const categories = ["All", "Rings", "Bracelets", "Necklaces", "Earrings"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const products = useSelector(selectAllProducts); // Fetch products from Redux state

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up" data-aos-duration="500">
          Shop Our Collection
        </h2>

        {/* Filter Section */}
        <div className="flex justify-center mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-2 py-2 mx-1 rounded-full border transition duration-200 ease-in-out ${
                selectedCategory === category ? "bg-blue-600 text-white" : "border-gray-300 text-gray-600"
              }`}
              onClick={() => setSelectedCategory(category)}
              data-aos="fade-up" // AOS fade-up effect on button click
              data-aos-duration="300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              data-aos="fade-up" // AOS fade-up effect for each product card
              data-aos-duration="500"
              data-aos-delay="100" // Delay the animation slightly for each item
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Pagination - Simplified */}
        <div className="flex justify-center mt-12">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-l">Previous</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700">1</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700">2</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700">3</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-r">Next</button>
        </div>
      </div>
    </section>
  );
};

export default Shop;
