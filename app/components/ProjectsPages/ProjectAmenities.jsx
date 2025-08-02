"use client";

import React from "react";

const ProjectAmenities = ({
  amenitiesFeaturesTitle,
  amenities,
  whyChooseTitle,
  whyChooseDesc,
}) => {
  return (
    <section className="bg-[#fdfcf6] backdrop-blur-sm py-16  text-gray-800">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold">
          {amenitiesFeaturesTitle}
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {amenities?.slice(0, 10).map((amenity, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:border hover:border-secondary"
          >
            <div className="text-secondary text-4xl mb-3">{amenity.icon}</div>
            <h4 className="text-gray-800 font-medium text-base">
              {amenity.title}
            </h4>
          </div>
        ))}
      </div>

      <div className="bg-secondary w-full mt-20 py-[70px]  text-white text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          {whyChooseTitle}
        </h3>
        <p className="max-w-4xl mx-auto text-sm font-poppins leading-relaxed">
          {whyChooseDesc}
        </p>
      </div>
    </section>
  );
};

export default ProjectAmenities;
