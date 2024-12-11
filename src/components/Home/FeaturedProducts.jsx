// src/components/FeaturedProducts.js
import React from 'react';
import ProductCard from '../Context/ProductCard';
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../../Store/productSlice'; // Adjust the path as needed

const FeaturedProducts = () => {
  // Use useSelector to get products from Redux state
  const products = useSelector(selectAllProducts);

  // Filter for non-special products with a rating above 4.0
  const highRatedNonSpecialProducts = products
    .filter(product => !product.special && product.rating > 4.0)
    .slice(0, 3); // Limit to 3 products

  return (
    <section id="products" className="py-12" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Featured Jewelry</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {highRatedNonSpecialProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

