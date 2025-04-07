import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="relative h-screen bg-blue-500 flex items-center justify-center"
      style={{
        backgroundImage: 'url(https://via.placeholder.com/1920x1080)', // Replace with actual microscope image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <img
          src="https://via.placeholder.com/150" // Replace with actual lab icon URL
          alt="Lab Icon"
          className="mx-auto mb-4"
        />
        <h1 className="text-5xl font-bold mb-4">
          Reliable & <span className="text-blue-300">Analytic</span>
        </h1>
        <p className="text-lg mb-6">
          Nanotechnology immersion along the highway will close the laboratory services loop.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          OUR PORTFOLIO
        </button>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <span className="w-3 h-3 bg-white rounded-full"></span>
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
      </div>
    </div>
  );
};

export default HeroSection;