import { FeedBackData } from "@/src/Data/FeedBackData";
import Image from "next/image";
import React from "react";
import diamond from "../../../public/diamond.svg";

const ClientSays = () => {
  return (
    <section className=" mt-10">
      <div className="md:w-4/6 w-11/12 mx-auto">
        <h1 className="font-poppins text-TextandIcons text-5xl font-thin  md:text-center">
          What Our <b>Clients Say </b>
        </h1>
        <p className="descriptionText">
          Discover why Giga Group Real Estate Developers is trusted by countless
          happy clients. Here’s what they have to say about our commitment to
          quality, innovation, and customer satisfaction.
        </p>
      </div>

      {/* Top Container */}
      <div className=" flex gap-4  my-10  overflow-x-auto flex-nowrap">
        {FeedBackData.map((item, index) => {
          console.log(item?.avatar);
          return (
            <div
              key={index}
              className="bg-[rgb(250,250,244)] w-[300px] px-6 py-6 rounded-lg border border-white flex-shrink-0"
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

      <div className=" h-[200px] flex items-center">
        <div className="w-4/6  mx-auto flex  justify-between">
          <Image src={diamond} className="" alt="images" />
          <Image src={diamond} className="" alt="images" />
          <Image src={diamond} className="" alt="images" />
          <Image src={diamond} className="" alt="images" />
          <Image src={diamond} className="" alt="images" />
        </div>
      </div>
    </section>
  );
};

export default ClientSays;
