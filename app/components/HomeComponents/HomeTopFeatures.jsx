import { topFeatures } from "@/src/Data/TopFeaturesData";
import React from "react";
import ButtonPrimary from "../ButtonPrimary";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

const HomeTopFeatures = () => {
  return (
    <section className="py-[120px] pl-12  my-[70px] md:my-0  md:pl-[100px] bg-gradient-to-br from-white to-[#F8F7E0] via-transparent">
      {/* Top section and heading */}

      <div className=" md:mx-auto my-4 md:w-[890px] w-full   ">
        <h2 className="headingSeaction">
          Explore Our <b> Top Features Projects</b>
        </h2>

        <p className="descriptionText md:text-center  ">
          These projects exemplify Giga Group's commitment to delivering
          high-quality, architecturally distinctive developments that contribute
          to Dubai's reputation as a hub for luxury living and modern business
          infrastructure.
        </p>
      </div>
         <div className="mt-12 mb-5">
              <div className="flex gap-4">
                <IoIosArrowRoundBack size={30} />
                <IoIosArrowRoundForward size={30} />
              </div>
            </div>
      {/* Horizontal scrollable container */}
      <div className="  w-full  ">
        {/* Parent container with horizontal scrolling enabled */}
        <div className="flex overflow-x-auto  gap-6 scrollbar-hide px-4">
          {/* Map through the features and display them */}
          {topFeatures.map((item, index) => {
            const imageUrl = item?.image ? `/${item.image}` : null;
            return (
              <div
                key={index}
                className="  group flex-shrink-0 relative w-72 h-[28rem] bg-cover bg-no-repeat cursor-pointer rounded-xl overflow-hidden shadow-lg transition-transform duration-300 "
                style={{
                  backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
                  borderRadius: "14px",
                }}
              >
                <h2 className="px-4 rounded-full py-1.5 border flex right-4 top-4 absolute text-white font-poppins text-sm">
                  {item?.status}
                </h2>

                <div className="px-4 absolute bottom-4">
                  <h1 className="text-white text-2xl font-semibold font-poppins">{item?.projectName}</h1>
                  <p className="font-poppins text-xs text-white">
                    {item?.description}
                  </p>
                  <div className="flex">
                    {/* Button is hidden by default and shows up on hover */}
                    <div className="opacity-0 my-3 group-hover:opacity-100 transition-opacity duration-300">
                      <ButtonPrimary title="Learn More" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="bg-red-600 w-full ">
          <div className="bg-red-700 absolute  opacity-70   h-96 rounded-full  w-96 right-52  bg-gradient-to-b -z-0 from-[#F8F7E0] to-white   "></div>
        </div> */}
      </div>
    </section>
  );
};

export default HomeTopFeatures;
