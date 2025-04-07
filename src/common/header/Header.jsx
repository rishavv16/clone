import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center mr-2">
          <span className="text-white font-bold text-xl">9</span>
        </div>
        <span className="text-2xl font-bold ">Industrial</span>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
          </svg>
          <span>Working Hours: Mon - Sat 8:00 - 18:00</span>
        </div>
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm2 2v12h12V5H4z" />
          </svg>
          <span>Call Us: (+1) 555 234-8765</span>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          GET A QUOTE
        </button>
      </div>
    </header>
  );
};

export default Header;