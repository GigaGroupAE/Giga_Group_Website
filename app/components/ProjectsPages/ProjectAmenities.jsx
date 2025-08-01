import { useState } from "react";
import Image from "next/image";

export default function ProjectAmenities({ amenities }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-gradient-to-tr py-16">
      <div className="mx-auto w-2/4 items-center">
        <h2 className="text-center subHeading">
          Investing in <b>Everything you Need</b>
        </h2>
        <p className="text-center descriptionText">
          Great institutions are built over time, nurturing dreams and fostering
          visions that promote peaceful and inclusive societies for sustainable
          development. Giga Group is one such institution.
        </p>
      </div>

      <div
        className="container mx-auto mt-16 px-4 md:px-32
        grid grid-flow-col md:grid-cols-4 overflow-x-auto md:overflow-visible gap-4 snap-x scroll-smooth"
      >
        {amenities?.map((item, index) => (
          <div
            key={index}
            className={`
              min-w-[70%] md:min-w-0 flex flex-col items-center justify-center space-y-4 
              rounded-md py-10 px-4
              snap-center
              transition-all duration-300
              ${
                activeIndex === index
                  ? "border border-yellow-400 bg-white shadow-md"
                  : "bg-gray-100"
              }
            `}
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={item.image}
              width={25}
              height={23}
              alt={item.title}
              className="rounded-md object-cover"
            />
            <h2 className="descriptionText text-center">{item.title}</h2>
          </div>
        ))}
      </div>

      <div className="bg-secondary">
        <div className="w-4/6 mx-auto py-16 space-y-2">
          <h1 className="text-center text-white font-poppins text-4xl font-semibold">
            Why Choose <b>Pearl Bliss Residence?</b>
          </h1>
          <p className="text-center text-white font-poppins text-sm">
            Pearl Bliss Residence by Giga Group offers a lifestyle like no
            other, set in a prime location that caters to your every need.
            Surrounded by lush parks, top-rated schools, nurseries, and a
            diverse range of restaurants and retail outlets, this community is
            thoughtfully designed for families seeking comfort and convenience.
            With advanced security and daycare services, Pearl Bliss Residence
            ensures peace of mind for every resident.
          </p>
        </div>
      </div>
    </div>
  );
}
