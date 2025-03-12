import { onGoinProjects } from "@/src/Data/OnGoingProjectsData";
import React from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import ButtonPrimary from "./ButtonPrimary";

const OnGoingProjects = () => {
  return (
    <div className="container mx-auto py-20">
      <div className=" flex justify-between items-center ">
        <h2 className="subHeading font-semibold">On Going Projects</h2>
        <p className="bg-greyBG  px-5 rounded-full text-xs font-poppins py-1">
          View all
        </p>
      </div>
      <div className="mt-12">
        <div className="flex gap-4">
          <IoIosArrowRoundBack size={30} />
          <IoIosArrowRoundForward size={30} />
        </div>
      </div>
      <div className="w-full py-10">
        {/* Horizontal scrolling container */}
        <div className="flex overflow-x-auto gap-6 scrollbar-hide px-4">
          {onGoinProjects.map((item, index) => {
            const imageUrl = item?.image ? `/${item.image}` : null;
            return (
              <div
                key={index}
                className="  group flex-shrink-0 relative w-72 h-[28rem] bg-cover bg-no-repeat cursor-pointer rounded-xl overflow-hidden shadow-lg transition-transform duration-300 "
                style={{
                  backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
                }}
              >
                {/* Status badge */}
                <h2 className="absolute top-4 right-4 bg-white/30 backdrop-blur-md px-4 py-1.5 rounded-full text-white font-semibold text-sm">
                  {item?.status}
                </h2>

                {/* Content */}
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 transition-opacity duration-300 group-hover:bg-black/60">
                  <h1 className="text-white text-2xl  font-poppins font-bold mb-1">
                    {item?.title}
                  </h1>
                  <p className="text-white font-poppins text-sm opacity-80">
                    {item?.description}
                  </p>
                  <div className="flex">
                    {/* Animated Learn More button */}
                    <div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="opacity-0 group-hover:opacity-100 mt-4"
                      layout
                    >
                      <ButtonPrimary title="Learn More" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OnGoingProjects;
