import React from "react";
import {
  FaPhoneAlt,
  FaGlobe,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-blue-900">
      {/* Background image & overlay */}
      <div className="absolute inset-0">
        <img
          src="/assets/industrial-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-16 px-4">
        {/* Card 1: Headquarters */}
        <div>
          <h3 className="text-sm text-gray-400 uppercase mb-2">New York</h3>
          <h2 className="text-2xl text-white font-bold mb-4">
            Headquarters
          </h2>
          <p className="text-base text-white mb-6">
            Interactively coordinate proactive “outside the box” thinking.
          </p>
          <ul className="space-y-2 text-white">
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2" /> +1 555 236 7890
            </li>
            <li className="flex items-center">
              <FaGlobe className="mr-2" /> www.bold-themes.com
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2" /> info@bold-themes.com
            </li>
          </ul>
        </div>

        {/* Card 2: Locations */}
        <div>
          <h3 className="text-sm text-gray-400 uppercase mb-2">Locations</h3>
          <h2 className="text-2xl text-white font-bold mb-4">
            We Are Everywhere
          </h2>
          <img
            src="/assets/world-map-dots.png"
            alt="World map"
            className="w-full h-auto mb-6"
          />
          <h4 className="text-white font-semibold mb-3">Our Network</h4>
          <ul className="space-y-2 text-white">
            {[
              { city: "Chicago", phone: "+1 555 4529 148" },
              { city: "Amsterdam", phone: "+1 555 9345 678" },
              { city: "Berlin", phone: "+1 555 236 7890" },
            ].map((loc) => (
              <li key={loc.city} className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                {loc.city}: {loc.phone}
              </li>
            ))}
          </ul>
        </div>

        {/* Card 3: Get in Touch */}
        <div>
          <h3 className="text-sm text-gray-400 uppercase mb-2">
            Get in Touch
          </h3>
          <h2 className="text-2xl text-white font-bold mb-4">
            Follow Our Activity
          </h2>
          <p className="text-base text-white mb-6">
            Interactively coordinate proactive e‑commerce via process‑centric
            “outside the box” thinking.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-cyan-500 rounded-full text-white hover:bg-cyan-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-cyan-500 rounded-full text-white hover:bg-cyan-600 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-cyan-500 rounded-full text-white hover:bg-cyan-600 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Card 4: Repeat or Custom */}
        <div>
          <h3 className="text-sm text-gray-400 uppercase mb-2">Support</h3>
          <h2 className="text-2xl text-white font-bold mb-4">Customer Care</h2>
          <p className="text-base text-white mb-6">
            We’re here 24/7 to answer your questions and help you succeed.
          </p>
          <ul className="space-y-2 text-white">
            <li>Email: support@example.com</li>
            <li>Live Chat: Available now</li>
            <li>FAQ: Visit our Help Center</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
