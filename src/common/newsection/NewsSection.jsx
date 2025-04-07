import React from 'react';

// Single news card (small)
const NewsCard = ({ image, date, category, title, excerpt }) => (
  <div className="flex bg-white shadow-md overflow-hidden mb-6 last:mb-0">
    <img src={image} alt={title} className="w-32 object-cover" />
    <div className="p-4 flex-1">
      <p className="text-xs text-gray-500 mb-1">
        {date} / <span className="uppercase">{category}</span>
      </p>
      <h3 className="font-semibold text-lg mb-2 hover:text-blue-500 cursor-pointer">
        {title}
      </h3>
      <p className="text-sm text-gray-700">{excerpt}</p>
    </div>
  </div>
);

// Featured big card (left)
const FeaturedNews = ({ image, label, title, excerpt }) => (
  <div className="relative group">
    <img src={image} alt={title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition" />
    <div className="absolute bottom-0 left-0 right-0 p-6 bg-white bg-opacity-90 group-hover:bg-opacity-100 transition">
      <p className="text-xs text-gray-600 mb-1">{label}</p>
      <h2 className="text-2xl font-bold mb-2 hover:text-blue-500 cursor-pointer">
        {title}
      </h2>
      <p className="text-sm text-gray-700">{excerpt}</p>
    </div>
  </div>
);

const NewsSection = ({  
  headingSmall = 'FROM OUR FACTORY',
  headingLarge = 'Latest news and events',
  description = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
  featured,
  articles = []
}) => {
  return (
    <section className="py-16 bg-gray-100">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <p className="text-sm text-gray-600 uppercase">{headingSmall}</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{headingLarge}</h1>
        <div className="w-12 h-1 bg-blue-500 mb-4" />
        <p className="text-gray-700">{description}</p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Featured */}
        <div className="lg:col-span-2 h-[400px] overflow-hidden rounded-md shadow-lg">
          <FeaturedNews {...featured} />
        </div>

        {/* Right: List */}
        <div>
          {articles.map((art, idx) => (
            <NewsCard key={idx} {...art} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
