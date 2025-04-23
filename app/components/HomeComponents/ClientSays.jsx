import { FeedBackData } from "@/src/Data/FeedBackData";
import Image from "next/image";
import React from "react";
import diamond from "../../../public/diamond.svg";
import "./ClientSaysAnimation.css"; // Make sure to import the CSS with animations

const ClientSays = () => {
  return (
    <section className="bg-white/0 py-28">
      <div className="md:w-4/6 w-11/12 mx-auto">
        <h1 className="headingSeaction">
          What Our <b>Clients Say </b>
        </h1>
        <p className="descriptionText md:text-center">
          Discover why Giga Group Real Estate Developers is trusted by countless
          happy clients. Here’s what they have to say about our commitment to
          quality, innovation, and customer satisfaction.
        </p>
      </div>

      {/* Top Row (Scroll Right) */}
      <div className="overflow-hidden my-10">
        <div className="scroll-right gap-4">
          {FeedBackData.map((item, index) => (
            <div
              key={index}
              className="bg-[rgb(250,250,244)] w-[300px] px-6 py-6 rounded-lg border-2 backdrop-blur-[200px] border-white flex-shrink-0 mx-2"
            >
              <div className="flex gap-2">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h2 className="font-poppins text-sm text-TextandIcons font-semibold">
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
          ))}
        </div>
      </div>

      {/* Bottom Row (Scroll Left) */}
      <div className="overflow-hidden my-10">
        <div className="scroll-left gap-4 ml-10">
          {FeedBackData.map((item, index) => (
            <div
              key={index}
              className="bg-[rgb(250,250,244)] w-[300px] px-6 py-6 rounded-lg border-2 backdrop-blur-[200px] border-white flex-shrink-0 mx-2"
            >
              <div className="flex gap-2">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h2 className="font-poppins text-sm text-TextandIcons font-semibold">
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
          ))}
        </div>
      </div>

      <div className="bg-secondary w-60 h-60 blur-[200px] -z-40 absolute rounded-full z-50 mx-auto"></div>
    </section>
  );
};

export default ClientSays;
