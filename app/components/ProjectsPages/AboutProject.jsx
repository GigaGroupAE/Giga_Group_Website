import React from "react";
import { FaBed, FaBath, FaMapMarkerAlt, FaHome } from "react-icons/fa";

const features = [
  { label: "1 Bed Room", icon: <FaBed size={24} /> },
  { label: "2 Bed Room", icon: <FaBed size={24} /> },
  { label: "Washroom", icon: <FaBath size={24} /> },
  { label: "Studio", icon: <FaHome size={24} /> },
  { label: "Prime Location", icon: <FaMapMarkerAlt size={24} /> },
];

const AboutProject = () => {
  return (
    <div className="relative px-4 overflow-hidden">
      {/* Golden blur overlay on right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-60 h-60 bg-[#C9BB00] opacity-20 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative  mx-auto z-10 space-y-12">
        {/* Text box with slight background */}
        <div className="bg-[rgba(250,250,250,0.75)] backdrop-blur-sm px-6 py-10">
          <h2 className="text-center text-3xl md:text-4xl font-poppins font-extrabold text-[#2D2D2D]">
            <span className="font-extrabold">Investing</span>{" "}
            <span className="font-normal">in Dubai&apos;s Future</span>
          </h2>

          <p className="text-center max-w-5xl mx-auto mt-6 text-base md:text-lg text-[#2D2D2D] font-poppins leading-relaxed">
            Great institutions are built over time, nurturing dreams and
            fostering visions that promote peaceful and inclusive societies for
            sustainable development. Giga Group is one such institution. Since
            its inception in 1956, the company has expanded its footprint across
            the textile industry, bullion trading, real estate development, and
            construction sectors in Dubai, United Arab Emirates.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-md rounded-xl flex flex-col items-center justify-center py-6 px-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition hover:shadow-md"
            >
              <div className="text-yellow-500 text-2xl mb-2">
                {feature.icon}
              </div>
              <p className="text-sm text-center font-poppins text-[#2D2D2D]">
                {feature.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
