import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const managementData = [
  {
    id: 1,
    name: 'Kirk Mathison',
    role: 'Chief Engineering Officer',
    imageUrl: '/images/kirk.jpg', // replace with actual path
  },
  {
    id: 2,
    name: 'Michael Lee',
    role: 'Chief Technology Officer',
    imageUrl: '/images/michael.jpg',
  },
  {
    id: 3,
    name: 'Jane Smith',
    role: 'Marketing Manager',
    imageUrl: '/images/jane.jpg',
  },
  {
    id: 4,
    name: 'Steven Jones',
    role: 'Chief Financial Officer',
    imageUrl: '/images/steven.jpg',
  },
];

const ManagementCard = ({ name, role, imageUrl }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="relative group">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
        <span className="text-white text-3xl">+</span>
      </div>
    </div>
    <div className="p-6 text-center">
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-sm text-gray-500 mb-4">{role}</p>
      <div className="flex justify-center space-x-4 text-gray-600">
        <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
        <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
        <a href="#" className="hover:text-blue-700"><FaLinkedinIn /></a>
      </div>
    </div>
  </div>
);

const ManagementSection = () => (
  <section className="py-16 px-4 md:px-8 bg-gray-50">
    <div className="max-w-4xl mx-auto text-center mb-12">
      <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">Learn More</p>
      <h2 className="text-3xl font-bold">Our Management</h2>
      <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 mb-6"></div>
      <p className="text-gray-600">
        Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.
        Override the digital divide with additional clickthroughs from DevOps.
        Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {managementData.map(person => (
        <ManagementCard
          key={person.id}
          name={person.name}
          role={person.role}
          imageUrl={person.imageUrl}
        />
      ))}
    </div>
  </section>
);

export default ManagementSection;
