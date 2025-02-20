import { distanceMap } from "@/src/Data/DistanceData";
import React from "react";

const DistanceDetails = () => {
  return (
    <section className="py-[120px] pl-[100px] bg-gradient-to-br from-white to-[#F8F7E0] via-transparent">
      <div className="w-4/6 mx-auto">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3 ">
          {distanceMap?.map((item, index) => (
            <div
              key={index}
              className=" px-6 py-2  rounded-md border border-white bg-transparent "
            >
              <h2 className="text-2xl font-bold text-TextandIcons font-poppins">
                {item.heading}
              </h2>
              <h4 className="font-poppins text-sm font-semibold mt-2 mb-1">
                {item?.subheading}
              </h4>
              <p className="font-poppins text-xs text-TextandIcons">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DistanceDetails;
