import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './Hero';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/shop');
  };

  return (
    <div className="about-us-page">
      <Hero />

      {/* Why We Sell Section with Split Layout */}
      <section className="why-we-sell-section py-16 bg-gray-50 relative" data-aos="fade-up">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
          {/* Images on the left */}
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:pr-8 mb-8 md:mb-0" data-aos="zoom-in">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEaUTOM7uagx-tdPa8Ia3emqf8qqsc0ese1EtOGKIcTi_1KA2hFKO0oj0NzSB7-q81vjk&usqp=CAU"
              alt="Handcrafted items"
              className="rounded-lg shadow-xl transition-transform duration-500 hover:scale-105 w-full"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCPYDlHlKZV7m32j0GdmcKAHwHdYQU7PhaK5s7SH0pqdWbnKfJTXKubUnWi08dxMgrlRU&usqp=CAU"
              alt="Additional handcrafted item"
              className="rounded-lg shadow-xl transition-transform duration-500 hover:scale-105 w-full"
            />
          </div>
          {/* Text on the right */}
          <div className="w-full md:w-1/2 text-center md:text-left px-4">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-aos="fade-left">
              Why We Sell
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6" data-aos="fade-left" data-aos-delay="100">
              Our brand was born from a passion for creating meaningful, sustainable products that leave a lasting impact. Each piece reflects our commitment to quality and our belief that every product tells a story.
            </p>
          </div>
        </div>
      </section>

      {/* Limited Products Section with Parallax Effect */}
      <section
        className="limited-products-section relative py-16 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url('https://img.freepik.com/free-photo/fantasy-landscape-with-butterfly_23-2151451715.jpg?semt=ais_hybrid')` }}
        data-aos="fade-up"
      >
        <div className="container mx-auto text-center text-white bg-black bg-opacity-50 p-8 rounded-lg shadow-xl">
          <h2 className="text-4xl font-extrabold mb-4">Why We Offer Limited Products</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We believe in exclusivity. By offering a carefully curated selection of products, we ensure that each piece is of the highest quality, with attention to detail that makes it truly special.
          </p>
        </div>
      </section>

      {/* Unique Stories Section with an Overlapping Image */}
      <section className="unique-stories-section py-16 relative" data-aos="fade-up">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4">
          {/* Text on the left */}
          <div className="w-full md:w-1/2 text-center md:text-left md:pr-8 mb-8 md:mb-0" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              The Unique Stories Behind Our Products
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every product we offer has a story. Whether it’s handcrafted by local artisans or designed with a specific inspiration, each piece brings a unique narrative that you’ll love to share.
            </p>
          </div>

          {/* Images on the right */}
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="zoom-in">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCPYDlHlKZV7m32j0GdmcKAHwHdYQU7PhaK5s7SH0pqdWbnKfJTXKubUnWi08dxMgrlRU&usqp=CAU"
              alt="Unique stories"
              className="rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105 w-full"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEaUTOM7uagx-tdPa8Ia3emqf8qqsc0ese1EtOGKIcTi_1KA2hFKO0oj0NzSB7-q81vjk&usqp=CAU"
              alt="Additional unique story"
              className="rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105 w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
