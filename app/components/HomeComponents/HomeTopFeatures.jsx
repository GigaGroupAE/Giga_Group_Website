import { topFeatures } from "@/src/Data/TopFeaturesData";
import React from "react";
import ButtonPrimary from "../ButtonPrimary";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

const HomeTopFeatures = () => {
  return (
    <section className="container max-w-[1440px] xl:px-20  bg-white mx-auto py-28 px-4 md:px-0">
      {/* Top section and heading */}

      <div className=""></div>

      <div className=" md:mx-auto  md:w-4/5  w-full     ">
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
      <div className="  w-full  ">
        <div className="flex overflow-x-auto  gap-6 scrollbar-hide px-4">
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
                  <h1 className="text-white text-2xl font-semibold font-poppins">
                    {item?.projectName}
                  </h1>
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
        <div className="bg-[#f1eebf] w-72 h-36  blur-3xl right-48 2xl:right-96  absolute rounded-full"></div>
      </div>
    </section>
  );
};

export default HomeTopFeatures;
