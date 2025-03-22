import { FeedBackData } from "@/src/Data/FeedBackData";
import Image from "next/image";
import React from "react";
import diamond from "../../../public/diamond.svg";

const ClientSays = () => {
  return (
    <section className=" bg-white/70  py-28">
      <div className="md:w-4/6 w-11/12 mx-auto">
        <h1 className="font-poppins  text-TextandIcons text-5xl font-normal  md:text-center">
          What Our <b>Clients Say </b>
        </h1>
        <p className="descriptionText text-center">
          Discover why Giga Group Real Estate Developers is trusted by countless
          happy clients. Here’s what they have to say about our commitment to
          quality, innovation, and customer satisfaction.
        </p>
      </div>

      {/* Top Container */}
      <div className=" flex gap-4 overflow-x-auto   my-10 scrollbar-hide  flex-nowrap">
        {FeedBackData.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[rgb(250,250,244)] scrollbar-hide overflow-hidden w-[300px] px-6 py-6 rounded-lg border   backdrop-blur-[200px] border-white flex-shrink-0"
            >
              <div className="flex gap-2">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="  rounded-full"
                />

                <div className="">
                  <h2 className="  font-poppins text-sm text-TextandIcons font-semibold">
                    {item?.name}
                  </h2>
                  <h4 className="font-poppins text-xs font-medium text-TextandIcons">
                    {item?.username}
                  </h4>
                </div>
              </div>

              <p className="font-poppins text-xs my-2 font-medium text-TextandIcons">
                {item?.comment}
              </p>
            </div>
          );
        })}
      </div>
      <div className=" flex gap-4 ml-10 overflow-x-auto   my-10 scrollbar-hide  flex-nowrap">
        {FeedBackData.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[rgb(250,250,244)] scrollbar-hide overflow-hidden w-[300px] px-6 py-6 rounded-lg border   backdrop-blur-[200px] border-white flex-shrink-0"
            >
              <div className="flex gap-2">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="  rounded-full"
                />

                <div className="">
                  <h2 className="  font-poppins text-sm text-TextandIcons font-semibold">
                    {item?.name}
                  </h2>
                  <h4 className="font-poppins text-xs font-medium text-TextandIcons">
                    {item?.username}
                  </h4>
                </div>
              </div>

              <p className="font-poppins text-xs my-2 font-medium text-TextandIcons">
                {item?.comment}
              </p>
            </div>
          );
        })}
      </div>

      <div className="bg-secondary w-60 h-60 blur-[200px]  -z-40    absolute rounded-full  z-50 mx-auto "></div>

      {/* <div className=" h-[200px] flex items-center">
        <div className="w-4/6  mx-auto flex  justify-between">
          <Image src={diamond} className="" alt="images" />
          <Image src={diamond} className="" alt="images" />
          <Image src={diamond} className="" alt="images" />
          <Image src={diamond} className="" alt="images" />
          <Image src={diamond} className="" alt="images" />
        </div>
      </div> */}
    </section>
  );
};

export default ClientSays;
