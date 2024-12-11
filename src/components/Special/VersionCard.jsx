import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaStar } from 'react-icons/fa'; // Import star icon
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS
import { useEffect } from 'react';

// Component to render each version card
const VersionCard = ({ version }) => {
  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`h-5 w-5 ${i <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
        />
      );
    }
    return stars;
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div
      className="bg-gradient-to-b from-white to-gray-100 shadow-lg rounded-lg p-6 m-4 max-w-sm cursor-pointer transition-transform duration-300"
      data-aos="fade-up" // AOS animation trigger
    >
      <Link to={`/product/${version.id}`} className="block">
        {/* Badge for limited edition */}
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
          Limited Edition
        </div>

        <img
          src={version.images[0]}
          alt={version.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-2xl font-bold mb-2 text-gray-800">{version.name}</h3>
        <p className="text-gray-600 mb-4">{version.story}</p>

        {/* Render rating stars */}
        <div className="flex mb-4">
          {renderStars(version.rating)} {/* Assume `version.rating` is provided */}
        </div>

        {/* Call-to-action button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition duration-300">
          Learn More
        </button>
      </Link>
    </div>
  );
};

export default VersionCard;
