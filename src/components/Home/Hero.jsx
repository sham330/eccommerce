// src/components/HeroSection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    const handleShopNow = () => {
        navigate('/shop');
    };

    return (
        <section className="relative bg-black text-white py-20 overflow-hidden">
            <div className="container mx-auto relative text-center">
                {/* Hero Text */}
                <div className="z-10">
                    <h1 className="text-6xl md:text-7xl font-extrabold tracking-wide text-gold mb-6" data-aos="fade-right" data-aos-delay="1000">
                        Discover True Luxury
                    </h1>
                    <p className="text-xl md:text-2xl max-w-xl mx-auto text-gray-200 mb-8" data-aos="fade-left" data-aos-delay="1000">
                        Unveil our exclusive collection, crafted with precision and passion.
                    </p>
                    {/* Shop Now Button */}
                    <button
                        onClick={handleShopNow}
                        className="bg-gold text-black px-8 py-3 font-bold text-lg rounded-full shadow-lg"
                    >
                        Shop Now
                    </button>
                </div>

                {/* Background Glow */}
                <div className="absolute inset-0 flex justify-center items-center opacity-20">
                    <div className="w-80 h-80 md:w-96 md:h-96 bg-gold rounded-full filter blur-3xl animate-pulse" />
                </div>

                {/* Background Image */}
                <div className="absolute top-0 left-0 w-full h-full opacity-30">
                    <img
                        src="https://img.freepik.com/premium-photo/springtime-butterflies-floral-haze_1331575-48.jpg"
                        alt="Premium background"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
