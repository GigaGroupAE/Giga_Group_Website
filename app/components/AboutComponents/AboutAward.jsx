import { awards } from "@/src/Data/AwardData";
import React from "react";

const AboutAward = () => {
  return (
    <div className=" py-[120px] px-[80px]">
      <h1 className="text-center text-3xl md:text-5xl font-semibold text-gray-800 mb-5">
        Featured <b className="text-black">Awards</b>
      </h1>

      <p className="descriptionText text-center w-[854px] mx-auto">
        These projects exemplify Giga Group's commitment to delivering
        high-quality, architecturally distinctive developments that contribute
        to Dubai's reputation as a hub for luxury living and modern business
        infrastructure.
      </p>

      {/* Grid layout for awards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {awards.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden flex items-end"
            style={{
              backgroundImage: `url(${item?.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "450px",
              borderRadius:"16px",
            //   width:"350px"
            
            }}
          >
            {/* You can add content on top of the image, such as award title */}
            <div className="inset-0 flex px-8 py-8 items-center justify-center  ">
              <h1 className="text-white font-poppins font-semibold text-xl">{item?.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutAward;
