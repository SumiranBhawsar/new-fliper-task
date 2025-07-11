import React from "react";
import Form from "./Form";
import bgImage from "../assets/bgimage.jpg";

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center min-h-screen flex items-center justify-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 max-w-7xl">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 items-center">
          {/* Left Text Section */}
          <div className="text-white text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Consultation,
              <br className="hidden sm:block" />
              Design, & Marketing
            </h1>
            <p className="text-base sm:text-lg mt-4">
              Build your digital brand with us.
            </p>
          </div>

          {/* Right Form Section */}
          <div className="w-full flex justify-center md:justify-end">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
