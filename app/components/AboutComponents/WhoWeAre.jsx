import { whoWeAre } from "@/src/Data/WhoWeAre";
import React from "react";
import ButtonPrimary from "../ButtonPrimary";

const WhoWeAre = () => {
  return (
    <div className="bg-gradient-to-tr from-[#F8F7EB] to-white  py-16 md:px-28 md:py-28">
      <h1 className="text-center text-3xl md:text-5xl font-semibold text-gray-800 mb-12">
        Who We <b className="text-black">Are?</b>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  my-14">
        {whoWeAre.map((item) => (
          <div
            key={item.id}
            className="text-[#ffffff]  rounded-2xl    px-8 py-7 space-y-7"
          >
            <h2 className="text-2xl font-bold text-TextandIcons">
              {item.title}{" "}
              <span className="font-normal">{item.designation}</span>
            </h2>
            <h3 className="text-lg font-semibold text-gray-600"></h3>
            <p className="text-TextandIcons font-poppins text-sm">
              {item.about}
            </p>

            <div className="bg-secondary px-[25px] py-[10px] text-center rounded-md">
              <h1 className="text-[#ffffff] font-poppins text-sm font-semibold">
                Learn More
              </h1>
            </div>
          </div>
        ))}
      </div>
 
      <p className="descriptionText md:text-center md:w-[854] px-8  w-[90%]  md:mx-auto">
        At Giga Group Real Estate Developers, we pride ourselves on delivering
        exceptional properties that combine innovation, prime locations, and
        sustainability. Each development is thoughtfully designed to enhance
        lifestyles, create long-term value, and set new benchmarks in the real
        estate industry.
      </p>
    </div>
  );
};

export default WhoWeAre;
