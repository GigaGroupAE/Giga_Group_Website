import { topFeatures } from "@/src/Data/TopFeaturesData";
import React from "react";
import ButtonPrimary from "../ButtonPrimary";

const HomeTopFeatures = () => {
  return (
    <section className="h-screen">
      {/* Top section and heading */}
      <div className="w-2/3 mx-auto my-4">
        <h2 className="headingSeaction">
          Explore Our <b> Top Features Projects</b>
        </h2>

        <p className="descriptionText ">
          These projects exemplify Giga Group's commitment to delivering
          high-quality, architecturally distinctive developments that contribute
          to Dubai's reputation as a hub for luxury living and modern business
          infrastructure.
        </p>
      </div>

      {/* Horizontal scrollable container */}
      <div className="h-96 w-4/5 mx-auto">
        {/* Parent container with horizontal scrolling enabled */}
        <div className="flex overflow-x-auto gap-5">
          {/* Map through the features and display them */}
          {topFeatures.map((item, index) => {
            const imageUrl = item?.image ? `/${item.image}` : null;
            return (
              <div
                key={index}
                className="group flex-shrink-0 relative z-50 w-[230px] h-96 bg-cover bg-no-repeat cursor-pointer"
                style={{
                  backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
                  borderRadius: "14px",
                }}
              >
                <h2 className="px-4 rounded-full py-1.5 border flex right-4 top-4 absolute text-white font-poppins text-sm">
                  {item?.status}
                </h2>

                <div className="px-4 absolute bottom-4">
                  <h1 className="text-white text-xl">{item?.projectName}</h1>
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
      </div>

      {/* Reddeing the real estate with  */}

      <div className="w-2/3 mx-auto flex-col my-4 bg-blue-500 items-center flex justify-center">
        <div className="">
          <h2 className="headingSeaction">
            Redefining Real Estate with <b>Excellence</b>{" "}
          </h2>

          <p className="descriptionText">
            At Giga Group Real Estate Developers, we pride ourselves on
            delivering exceptional properties that combine innovation, prime
            locations, and sustainability. Each development is thoughtfully
            designed to enhance lifestyles, create long-term value, and set new
            benchmarks in the real estate industry.
          </p>
        </div>

        {/* cards  */}

        <div className="bg-yellow-500 w-full flex items-center justify-between">
          <div className="bg-pink-600 flex-1">
            <h1>1</h1>
          </div>
          <div className="bg-pink-500 flex-1">
            <h1>1</h1>
          </div>
          <div className="bg-pink-400 flex-1">
            <h1>1</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTopFeatures;
