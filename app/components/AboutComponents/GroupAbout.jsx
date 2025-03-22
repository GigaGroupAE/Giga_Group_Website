import React from "react";
import ButtonPrimary from "../ButtonPrimary";
import GigaComponent from "../GigaComponent";

const GroupAbout = () => {
  return (
    <div className=" bg-white/50 backdrop-blur-[200px] ">
      <div className="bg-secondary h-40 w-60 absolute mt-[40rem] -left-9 blur-[160px] -z-50  rounded-full"></div>

      <div className="container mx-auto px-4 py-28">
        <div className="bg-grpupCover bg-cover h-[550px] w-full flex items-end rounded-[10px]">
          <div className="bg-[rgb(237,237,237,0.9)] backdrop-blur-md space-y-4 w-[490px] px-9 py-5 rounded-tr-xl rounded-bl-md">
            <p>
              Great institutions are built over time, nurturing dreams and
              fostering visions that promote peaceful and inclusive societies
              for sustainable development. Giga Group is one such institution.
            </p>

            <GigaComponent title="Najeeb Amin Pardesi" />

            <div className="md:flex block">
              <ButtonPrimary title="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupAbout;
