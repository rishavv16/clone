import React from 'react';

const QuoteSection = ({
  backgroundImage,
  quote,
  author,
  ctaText = 'CONTACT US',
  ctaLink = '#',
  promptText = 'Looking for a First‑Class Scientific Partner?'
}) => {
  return (
    <section className="relative w-full">
      {/* Background */}
      <div
        className="w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Dark overlay */}
        <div className="w-full h-full bg-black bg-opacity-50 flex items-center">
          {/* Quote container */}
          <div className="max-w-3xl mx-6 md:mx-16 lg:mx-32 text-white">
            <div className="flex items-start space-x-4">
              {/* Quote icon */}
              <div className="flex-shrink-0 bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.17 6A5.01 5.01 0 0 0 2 11.17V18a2 2 0 0 0 2 2h6.83A5.01 5.01 0 0 0 16 14.83V12a2 2 0 0 0-2-2H8a1 1 0 0 1-1-1V6zM17.17 6A5.01 5.01 0 0 0 12 11.17V18a2 2 0 0 0 2 2h6.83A5.01 5.01 0 0 0 26 14.83V12a2 2 0 0 0-2-2h-6a1 1 0 0 1-1-1V6z" />
                </svg>
              </div>
              {/* Quote text */}
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                  {quote}
                </h2>
                <p className="mt-4 text-lg">— {author}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA bar */}
      <div className="bg-[#0B1A44] py-6 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
        <span className="text-white text-lg font-medium mb-4 md:mb-0">
          {promptText}
        </span>
        <a
          href={ctaLink}
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
};

export default QuoteSection;
