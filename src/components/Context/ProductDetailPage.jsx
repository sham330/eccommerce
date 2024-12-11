import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllProducts } from '../../Store/productSlice'; // Adjust the path as needed
import { addToCart } from '../../Store/cartSlic'; // Import the addToCart action
import ProductCard from '../Context/ProductCard'; // Import your ProductCard component
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const products = useSelector(selectAllProducts);

  // Scroll to top and initialize AOS when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 800, once: true });
  }, []);

  // Find the product based on the ID from the URL
  const product = products.find((item) => item.id === parseInt(id));

  // State for the main image, defaulting to the first image or main image
  const [mainImage, setMainImage] = useState(product?.images?.[0] || product?.image);

  // Ensure that mainImage updates if product changes
  useEffect(() => {
    if (product) {
      setMainImage(product.images?.[0] || product.image);
    }
  }, [product]);

  if (!product) {
    return <h2 className="text-center text-2xl font-bold">Product not found</h2>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert(`${product.name} has been added to your cart!`);
  };

  const handleBuyNow = () => {
    dispatch(addToCart(product));
    navigate('/CheckoutPage'); // Use navigate to go to the checkout page
  };

  const relatedProducts = products.filter(item => item.category === product.category && item.id !== product.id);

  // Handler for changing the main image
  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Product Image and Thumbnails */}
        <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
          <img 
            src={mainImage} 
            alt={product.name} 
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
          <div className="mt-4 flex space-x-2 overflow-x-auto">
            {/* Display product images if they exist */}
            {product.images?.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={product.name} 
                className="w-20 h-20 rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-105 object-cover"
                onClick={() => handleThumbnailClick(image)} // Change main image on click
                data-aos="zoom-in"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2" data-aos="fade-left">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-xl font-semibold mt-2">${product.price.toFixed(2)}</p>
          <p className="mt-4 text-gray-700">{product.story || product.description}</p>
          <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-500 transition duration-200"
              data-aos="fade-up"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-500 transition duration-200"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-12" data-aos="fade-up">
        <h3 className="text-2xl font-semibold mb-4">Related Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedProducts.map(relatedProduct => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} data-aos="zoom-in" />
          ))}
        </div>
      </div>
    </div>
  );  
};

export default ProductDetailPage;
