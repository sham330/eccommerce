import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  // If the product has an images array, use the first image, otherwise use a default fallback image.
  const mainImage = product.images && product.images.length > 0 ? product.images[0] : 'https://via.placeholder.com/150'; // Fallback image if none provided

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="border rounded-lg overflow-hidden shadow-md cursor-pointer"
      onClick={handleClick}
      data-aos="fade-up" // AOS fade-up animation when scrolling into view
      data-aos-duration="500" // Duration for the animation
      data-aos-easing="ease-out" // Easing for the animation
    >
      {/* Image Section */}
      <img
        src={mainImage} // Use mainImage which pulls from the images array
        alt={product.name}
        className="w-full h-48 object-cover"
        data-aos="zoom-in" // AOS zoom-in effect on image when in view
        data-aos-duration="300" // Duration for the zoom-in effect
      />

      {/* Product Info */}
      <div className="p-4 bg-white">
        <h3
          className="text-lg font-semibold text-gray-800"
          data-aos="fade-right" // AOS fade-right effect for text
          data-aos-duration="500"
        >
          {product.name}
        </h3>
        <p className="text-gray-500 mt-1">{product.description}</p>
        <p
          className="text-xl font-bold text-blue-600 mt-2"
          data-aos="fade-left" // AOS fade-left effect for price
          data-aos-duration="500"
        >
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
