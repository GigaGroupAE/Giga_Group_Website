import { topFeatures } from "@/src/Data/TopFeaturesData";
import React from "react";
import ButtonPrimary from "../ButtonPrimary";
import architecture from "../../../public/architecture.svg";
import my_location from "../../../public/my_location.svg";
import psychiatry from "../../../public/psychiatry.svg";
import Image from "next/image";

const HomeTopFeatures = () => {
  return (
    <section className="">
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

      <div className="w-2/3 my-12 mx-auto flex-col  items-center flex justify-center">
        <div className="">
          <h2 className="headingSeaction">
            Redefining Real Estate with <b>Excellence</b>
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

        <div className=" w-full   flex items-center justify-between gap-4">
          <div className="cartContainer">
            <Image src={architecture} alt="architecture" />
            <h1 className="font-poppins text-TextandIcons text-2xl">
              <b>Architectural</b> Excellence
            </h1>
            <p className="font-poppins text-sm text-TextandIcons">
              Our developments redefine modern living with cutting-edge designs,
              blending functionality with elegance.
            </p>
          </div>
          <div className="cartContainer">
            <Image src={my_location} alt="architecture" />
            <h1 className="font-poppins text-TextandIcons text-2xl">
              <b>Strategic </b> Locations
            </h1>
            <p className="font-poppins text-sm text-TextandIcons">
              We build in the most sought-after areas, ensuring convenience,
              connectivity, and future growth potential.
            </p>
          </div>
          <div className="cartContainer">
            <Image src={psychiatry} alt="architecture" />
            <h1 className="font-poppins text-TextandIcons text-2xl">
              <b>Eco-Friendly</b> Solutions
            </h1>
            <p className="font-poppins text-sm text-TextandIcons">
              Our projects integrate sustainable practices, promoting energy
              efficiency and a healthier environment for residents.
            </p>
          </div>

          <div className="h-[120px] bg-red-600"></div>
        </div>
      </div>
      <div className="bg-excellenceCover flex items-center justify-center bg-blend-multiply bg-[rgb(72,105,143,0.7)] h-[401px] w-full bg-repeat-round object-center bg-contain">
        {/* This is the frosted glass container */}
        <div className="w-[70%] gap-4 backdrop-blur-lg  items-center flex flex-col justify-center bg-white bg-opacity-30 p-8  rounded-lg">
          <h1 className="text-white text-5xl ">
            Redefining Real Estate with <b>Excellence</b>
          </h1>
          <p className="descriptionText text-white">
            At Giga Group Real Estate Developers, we pride ourselves on
            delivering exceptional properties that combine innovation, prime
            locations, and sustainability. Each development is thoughtfully
            designed to enhance lifestyles, create long-term value, and set new
            benchmarks in the real estate industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeTopFeatures;
