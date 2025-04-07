import React from 'react';

const TestimonialSection = () => {
  return (
    <div className="bg-blue-500 text-white py-6">
      <div className="container mx-auto px-4 flex items-center justify-between flex-col md:flex-row">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/80" // Replace with actual person image URL
            alt="John Smith"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <p className="text-lg italic">&quot;Collaboratively administer turnkey channels whereas virtual e-tailers. Objectively seize metrics. Dramatically synthesize integrated schemas&quot;</p>
            <p className="text-sm mt-2">- John Smith, Magnum CTO</p>
          </div>
        </div>
        <button className="mt-4 md:mt-0 bg-transparent border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-blue-500 transition duration-300">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection;