import React from "react";
import house from "../assets/house.png";
import Design from "../assets/design.png";
import dollar from "../assets/doller.png";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-2">Why Choose Us?</h2>
      <div className="w-32 h-1 bg-blue-600 mx-auto mb-10 rounded-full"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {/* Card 1 - ROI */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center mb-4 shadow-md">
            <img src={house} alt="ROI" className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-blue-800">Potential ROI</h3>
          <p className="text-gray-600 mt-2 text-sm max-w-xs">
            Whether you're looking to buy, develop, or renovate your home, we guide you through potential returns for success.
          </p>
        </div>

        {/* Card 2 - Design */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center mb-4 shadow-md">
            <img src={Design} alt="Design" className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-blue-800">Design</h3>
          <p className="text-gray-600 mt-2 text-sm max-w-xs">
            Our interior design team helps you visualize the perfect home by guiding design and layout decisions.
          </p>
        </div>

        {/* Card 3 - Marketing */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center mb-4 shadow-md">
            <img src={dollar} alt="Marketing" className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-blue-800">Marketing</h3>
          <p className="text-gray-600 mt-2 text-sm max-w-xs">
            We provide strong visuals and advanced marketing plans that help your property stand out.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
