import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Machines',
      subtitle: 'Taking seamless key performance indicators offline.',
      icon: 'https://via.placeholder.com/40', // Replace with actual gear icon URL
      image: 'https://via.placeholder.com/300', // Replace with actual machines image URL
    },
    {
      title: 'Corrosion Tests',
      subtitle: 'Bring to the table win-win survival strategies.',
      icon: 'https://via.placeholder.com/40', // Replace with actual corrosion icon URL
      image: 'https://via.placeholder.com/300', // Replace with actual corrosion test image URL
    },
    {
      title: 'Mechanical',
      subtitle: 'Taking seamless key performance indicators.',
      icon: 'https://via.placeholder.com/40', // Replace with actual wrench icon URL
      image: 'https://via.placeholder.com/300', // Replace with actual mechanical image URL
    },
    {
      title: 'Agriculture',
      subtitle: 'Performance indicators offline to maximise.',
      icon: 'https://via.placeholder.com/40', // Replace with actual tractor icon URL
      image: 'https://via.placeholder.com/300', // Replace with actual agriculture image URL
    },
  ];

  return (
    <div className="bg-white-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <button className="text-white text-2xl font-bold">&lt;</button>
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
            {services.map((service, index) => (
              <div key={index} className="min-w-[300px] bg-white text-gray-800 p-4 rounded shadow">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover mb-4" />
                <img src={service.icon} alt={`${service.title} icon`} className="w-10 h-10 mb-2" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm">{service.subtitle}</p>
              </div>
            ))}
          </div>
          <button className="text-white text-2xl font-bold">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;