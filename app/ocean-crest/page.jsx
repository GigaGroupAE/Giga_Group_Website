import React from "react";
import OceanCrestHero from "../components/ProjectsPages/OceanCrestHero";
import Image from "next/image";
import bed from "../../public/bed.svg";
import { projectData } from "@/src/Data/ProjectData";

const page = () => {
  return (
    <section>
      <OceanCrestHero />
      <div className="bg-[#FBFBFB]">
        <div className=" container mx-auto  py-16 space-y-4 ">
          <h2 className="text-center text-3xl font-poppins text-TextandIcons">
            <b>Investing </b> in Dubai's Future
          </h2>

          <p className=" descriptionText text-center w-4/5  mx-auto">
            Great institutions are built over time, nurturing dreams and
            fostering visions that promote peaceful and inclusive societies for
            sustainable development. Giga Group is one such institution. Since
            its inception in 1956, the company has expanded its footprint across
            the textile industry, bullion trading, real estate development, and
            construction sectors in Dubai, United Arab Emirates.
          </p>
        </div>
      </div>

      <div className=" justify-between mx-auto flex  py-16  px-[120px] container    items-center">
        {projectData.map((item) => {
          return (
            <div
              key={item?.id}
              className="items-center py-7 px-7 justify-center flex flex-col  space-y-4"
            >
              <Image
                src={item.image}
                width={30}
                height={20}
                alt={item.heading}
                className="  object-contain "
              />
              <p className="font-poppins  text-base text-TextandIcons">
                {item?.title}
              </p>
            </div>
          );
        })}
      </div>

      <div className="">
        <iframe
         
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full  h-[600] object-contain"
        ></iframe>
      </div>
    </section>
  );
};

export default page;
