import { whoWeAre } from "@/src/Data/WhoWeAre";
import React from "react";
import ButtonPrimary from "../ButtonPrimary";

const WhoWeAre = () => {
  return (
    <div className="bg-white/50 py-28  backdrop-blur-[200px]">
      <div className="bg-secondary blur-[200px]   h-60 w-60 absolute mt-[20rem]  right-0  -z-50  rounded-full"></div>

      <div className="container mx-auto ">
        <h1 className="text-center text-3xl md:text-5xl font-semibold text-gray-800 ">
          Who We <b className="text-black">Are?</b>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6   backdrop-blur-[200px]  ">
          {whoWeAre.map((item) => (
            <div
              key={item.id}
              className="text-[#ffffff] bg-white/20  rounded-2xl    px-8 py-7 space-y-7"
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
    </div>
  );
};

export default WhoWeAre;
