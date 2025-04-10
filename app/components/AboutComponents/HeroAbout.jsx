import React from "react";
import GigaComponent from "../GigaComponent";
import ButtonPrimary from "../ButtonPrimary";

const HeroAbout = () => {
  return (
    <div className="bg-aboutCover h-[615px]  flex items-end justify-center bg-no-repeat bg-cover">
      <div
        className="md:w-[1040px] w-[90%] bg-[rgb(237,237,237,0.9)]  flex flex-col my-8 px-[30px] py-[20px] rounded-[10px] 
                    backdrop-blur-md border border-white/20 shadow-lg"
      >
        <div className="mb-4">
          <GigaComponent />
        </div>

        <div className="  space-y-4">
          <h1 className="font-poppins text-TextandIcons font-medium  text-[35px]">
            About <b>Giga Group</b>
          </h1>

          <p>
            Great institutions are built over time, nurturing dreams and
            fostering visions that promote peaceful and inclusive societies for
            sustainable development. Giga Group is one such institution. Since
            its inception in 1956, the company has expanded its footprint across
            the textile industry, bullion trading, real estate development, and
            construction sectors in Dubai, United Arab Emirates.
          </p>

          <div className="md:flex block">
            <ButtonPrimary title="Learn More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
