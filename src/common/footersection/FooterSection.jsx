import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = ({ title, items, isButtonList }) => (
  <div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2 relative inline-block">
      {title}
      <span className="absolute left-0 -bottom-1 w-10 h-0.5 bg-cyan-500"></span>
    </h3>
    {isButtonList ? (
      <div className="flex flex-wrap gap-2 mt-4">
        {items.map((item) => (
          <Link
            key={item}
            to="/"
            className="px-3 py-1 bg-cyan-500 text-white text-sm rounded hover:bg-cyan-600 transition"
          >
            {item}
          </Link>
        ))}
      </div>
    ) : (
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item}>
            <Link to="/" className="text-gray-700 hover:text-cyan-500 transition">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const FooterSection = () => {
  const topLinks = [
    {
      title: "About us",
      items: ["About us", "Location", "Blog", "Services", "Contact", "Shop"],
    },
    {
      title: "Popular categories",
      items: ["Laboratory", "Materials", "Metallurgy", "Industry", "Audio", "Video"],
    },
    {
      title: "Our products",
      items: [
        "Equipment",
        "Hand Tools",
        "Hardware",
        "Power Tools",
        "Storage",
        "Welding",
        "Workwear",
      ],
      isButtonList: true,
    },
  ];

  const bottomNavLinks = ["Home", "About us", "Services", "Projects", "Blog/News", "Shop"];

  return (
    <footer className="bg-white text-gray-800">
      {/* Top links */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {topLinks.map(({ title, items, isButtonList }) => (
          <FooterLinks key={title} title={title} items={items} isButtonList={isButtonList} />
        ))}
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-300 mx-auto max-w-6xl" />

      {/* Bottom nav */}
      <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap justify-center space-x-6 text-sm">
        {bottomNavLinks.map((link) => (
          <Link key={link} to="/" className="text-gray-600 hover:text-cyan-500 transition">
            {link}
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default FooterSection;
