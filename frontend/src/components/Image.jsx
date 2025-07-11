import React from "react";
import livingRoom from "../assets/livingRoom.png";

const Image = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 py-16 bg-white mt-20 gap-10">
      {/* Left Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4">
          Not Your Average Realtor
        </h2>
        <p className="text-gray-600 max-w-md mx-auto md:mx-0">
          Real estate is an eye for staging a property, standout content, selling design, and effective marketing to get homes more exposure on the market.
        </p>
      </div>

      {/* Right Images Layout */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        {/* Large Circle Image */}
        <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg z-10">
          <img
            src={livingRoom}
            alt="Realtor 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Small Stacked Circles */}
        <div className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
              src={livingRoom}
              alt="Realtor 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
              src={livingRoom}
              alt="Realtor 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
