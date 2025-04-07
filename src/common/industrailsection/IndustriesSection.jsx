import React from 'react';

const IndustriesSection = () => {
  const industries = [
    {
      title: 'Aerospace',
      description: 'Automotive components and assemblies are subject to performance evaluations according to industry standards.',
      icon: 'https://via.placeholder.com/40', // Replace with actual airplane icon URL
    },
    {
      title: 'Automotive',
      description: 'The materials selection process and safety protocols rank aerospace among the most carefully regulated industry today.',
      icon: 'https://via.placeholder.com/40', // Replace with actual car icon URL
    },
    {
      title: 'Coatings & Plating',
      description: 'Testing materials with a desired outward appearance and protection from corrosion, heat, abrasion, and chemicals.',
      icon: 'https://via.placeholder.com/40', // Replace with actual coating icon URL
    },
    {
      title: 'Consumer Products & Toys',
      description: 'Industrial has enhanced our services to include the latest technology for testing toys and children products.',
      icon: 'https://via.placeholder.com/40', // Replace with actual bicycle icon URL
    },
    {
      title: 'Oil & Gas',
      description: 'Our scope of work includes testing for structural fabrication, pressure systems and material selection.',
      icon: 'https://via.placeholder.com/40', // Replace with actual flame icon URL
    },
    {
      title: 'Plastics & Composites',
      description: 'Physical, mechanical testing, spectrometric and microscopic characterization that benefit our client’s product development.',
      icon: 'https://via.placeholder.com/40', // Replace with actual molecule icon URL
    },
    {
      title: 'Packaging & Plastics',
      description: 'For many years, Industrial has conducted field studies involving the public for the purposes of product screening.',
      icon: 'https://via.placeholder.com/40', // Replace with actual box icon URL
    },
    {
      title: 'Nuclear',
      description: 'Routine testing includes data collection for CMTR generation using mechanical, chemical and metallurgical techniques.',
      icon: 'https://via.placeholder.com/40', // Replace with actual atom icon URL
    },
  ];

  return (
    <div
      className="relative bg-gray-800 text-white py-16"
      style={{
        backgroundImage: 'url(https://via.placeholder.com/1920x1080)', // Replace with actual lab background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-sm text-gray-400 uppercase mb-2">Our Services</h2>
        <h1 className="text-4xl font-bold mb-6">
          Industries Served
          <span className="text-blue-400">__</span>
        </h1>
        <p className="text-lg mb-12 max-w-2xl">
          Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="text-center">
              <img src={industry.icon} alt={`${industry.title} icon`} className="w-10 h-10 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
              <p className="text-sm text-gray-300">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;