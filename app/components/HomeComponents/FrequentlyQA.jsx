import { projectsName } from "@/src/Data/ProjectsName";
import React, { useState } from "react";
import GeneralQA from "../GeneralQA";

const FrequentlyQA = () => {
  const [activeItem, setActiveItem] = useState(1);
  return (
    <section className=" my-40">
      <div className="w-4/6 mx-auto">
        <h1 className="font-poppins text-TextandIcons text-5xl font-thin sm:text-center text-center">
          Frequently Asked <b>Questions </b>
        </h1>
        <p className="descriptionText">Check for instant answer</p>
      </div>

      {/* Projects Name  */}

      <div className=" flex w-[80%] mx-auto justify-around mt-12">
        {projectsName.map((item) => {
          return (
            <div
              key={item?.id}
              onClick={() => setActiveItem(item?.id)} // Set active item on click
              className={`${
                activeItem === item?.id
                  ? "bg-[rgba(252,252,242)] rounded-tl-lg px-6 py-6 border-l"
                  : " px-6 py-6 "
              }`} // Apply styles only if it's the active item
            >
              <h1 className="font-poppins text-sm font-semibold">
                {item?.name}
              </h1>
            </div>
          );
        })}
      </div>

      {activeItem === 1 && <GeneralQA />}
    </section>
  );
};

export default FrequentlyQA;
