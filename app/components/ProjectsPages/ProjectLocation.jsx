import React from "react";
import Image from "next/image"; // assuming Next.js
import map from "../../../public/projectMap.svg";
import projectImage1 from "../../../public/aboutGiga2.webp";
import projectImage2 from "../../../public/aboutGiga2.webp";
import projectImage3 from "../../../public/aboutGiga2.webp";
import projectImage4 from "../../../public/aboutGiga2.webp";
import GigaComponent from "../GigaComponent";
import ButtonPrimary from "../ButtonPrimary";
import ButtonSecandary from "../ButtonSecandary";

const ProjectLocation = () => {
  return (
    <div>
      {/* Map + Ocean Crest */}
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[65%]">
          <Image src={map} alt="Map" className="w-full h-96 object-cover" />
        </div>
        <div className="w-full md:w-[35%] bg-[#FBFBFB] flex items-center justify-center">
          <div className="bg-white space-y-4 rounded-xl w-96 px-7 py-5">
            <button className="bg-[rgb(241,238,191)] px-5 py-1 rounded-full text-sm text-TextandIcons font-poppins">
              Coming Soon
            </button>
            <h2 className="font-poppins text-4xl text-TextandIcons">
              <b>Ocean </b>Crest
            </h2>
            <p className="descriptionText">
              Great institutions are built over time, nurturing dreams and
              fostering visions that promote peaceful and inclusive societies
              for sustainable development. Giga Group is one such institution.
            </p>
          </div>
        </div>
      </div>

      {/* Giga + Images */}
      <div className="container mx-auto py-24 flex flex-col md:flex-row md:space-x-16">
        {/* Text Content */}
        <div className="w-full md:w-[40%] space-y-5">
          <GigaComponent title="Giga" />
          <h1 className="subHeading">
            <b>Invest</b> In An Elegant Future
          </h1>
          <div>
            <h2 className="descriptionText">
              Payment Plan <b>3 Years</b>
            </h2>
            <h2 className="descriptionText">
              Starting prices from <b>AED 570000</b>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <ButtonPrimary title="Submit a query" />
            <ButtonSecandary title="Download" />
          </div>
        </div>

        {/* Image Grid */}
        <div className="w-full md:w-[60%] grid grid-cols-2 gap-4 mt-10 md:mt-0">
          <Image
            src={projectImage1}
            alt="Living Room"
            className="w-full h-48 object-cover rounded-md"
          />
          <Image
            src={projectImage2}
            alt="People Working"
            className="w-full h-48 object-cover rounded-md"
          />
          <Image
            src={projectImage3}
            alt="Building Construction"
            className="w-full h-48 object-cover rounded-md"
          />
          <Image
            src={projectImage4}
            alt="City View"
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectLocation;
