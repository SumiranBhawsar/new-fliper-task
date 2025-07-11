import React from "react";

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-gray-50 text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-2">
        About Us
      </h2>

      <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>

      <p className="max-w-md sm:max-w-xl md:max-w-2xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
        Fifteen years of experience in real estate, excellent customer service and a commitment to work hard, listen and follow through.
        We provide quality services to build relationships with clients and, more importantly, maintain those relationships by communicating effectively.
      </p>

      <button className="border border-blue-600 text-blue-600 text-sm sm:text-base px-5 py-2 sm:px-6 sm:py-2.5 rounded-full hover:bg-blue-600 hover:text-white transition">
        LEARN MORE
      </button>
    </section>
  );
};

export default AboutSection;
