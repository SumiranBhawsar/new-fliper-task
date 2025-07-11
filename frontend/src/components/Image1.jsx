import React from "react";
import livingRoom from "../assets/livingRoom.png";

const Image1 = () => {
  return (
    <div className="relative bg-white py-16 px-4 sm:px-6 md:px-8 overflow-hidden min-h-[600px]">
      {/* Background Decorations */}
      <div className="absolute left-0 bottom-0 w-72 h-72 sm:w-96 sm:h-96 bg-blue-100 rounded-full opacity-30 -z-10" />
      <div className="absolute right-0 top-0 w-60 h-60 sm:w-80 sm:h-80 bg-blue-100 rounded-full opacity-10 -z-10" />
      <div className="absolute right-6 top-6 w-20 h-20 border border-dotted border-gray-300 opacity-10 -z-10" />

      {/* Images Container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 relative">
        {/* Image 1 */}
        <div className="relative mt-0">
          <img
            src={livingRoom}
            alt="Image 1"
            className="w-52 sm:w-64 md:w-72 rounded-md"
          />
          <div className="absolute -top-1 -left-1 w-4 h-8 bg-orange-500" />
          <div className="absolute -top-1 -left-1 w-8 h-4 bg-orange-500" />
        </div>

        {/* Image 2 */}
        <div className="relative mt-6 md:mt-16">
          <img
            src={livingRoom}
            alt="Image 2"
            className="w-60 sm:w-72 md:w-96 rounded-md"
          />
          <div className="absolute -top-1 -right-1 w-4 h-8 bg-blue-500" />
          <div className="absolute -top-1 -right-1 w-8 h-4 bg-blue-500" />
        </div>

        {/* Image 3 */}
        <div className="relative mt-6 md:mt-32">
          <img
            src={livingRoom}
            alt="Image 3"
            className="w-52 sm:w-64 md:w-72 rounded-md"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-8 bg-orange-500" />
          <div className="absolute -bottom-1 -right-1 w-8 h-4 bg-orange-500" />
        </div>
      </div>
    </div>
  );
};

export default Image1;
