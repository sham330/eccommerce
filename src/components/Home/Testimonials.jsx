import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 bg-gray-100" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 mb-4">"The diamond ring I bought is stunning! Absolutely in love with the quality and design."</p>
            <h4 className="text-gray-800 font-semibold">- Jessica H.</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 mb-4">"Amazing craftsmanship! The gold bracelet exceeded my expectations."</p>
            <h4 className="text-gray-800 font-semibold">- Michael S.</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 mb-4">"Beautiful jewelry and fast shipping. Will definitely shop here again!"</p>
            <h4 className="text-gray-800 font-semibold">- Sarah W.</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
