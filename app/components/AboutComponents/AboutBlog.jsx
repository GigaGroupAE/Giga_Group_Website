import { aboutBlog } from "@/src/Data/AboutBlog";
import Image from "next/image";
import React from "react";

const AboutBlog = () => {
  return (
    <div className="px-[75px] py-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-3  my-14 ">
        {aboutBlog.map((item) => (
          <div
            key={item.id}
            className="text-[#ffffff]  rounded-2xl px-7 py-7 space-y-4"
          >
            <Image
              src={item.image}
              width={430}
              height={430}
              alt={item.heading}
              className="  rounded-md   object-cover"
            />
            <h2 className="text-[18] font-bold text-TextandIcons">
              {item.heading}
            </h2>
            <h3 className="text-lg font-semibold text-gray-600"></h3>
            <p className="text-TextandIcons font-poppins text-sm">
              {item.description}
            </p>

            <h2 className="font-poppins text-sm text-TextandIcons font-semibold cursor-pointer">Learn More</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutBlog;
