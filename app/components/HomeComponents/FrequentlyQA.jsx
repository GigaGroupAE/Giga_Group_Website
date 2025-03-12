"use client";
import { projectsName } from "@/src/Data/ProjectsName";
import React, { useState } from "react";
import GeneralQA from "../GeneralQA";

const FrequentlyQA = () => {
  const [activeItem, setActiveItem] = useState(1);
  return (
    <section className=" py-20 bg-gradient-to-b from-white to-secondary/10">
      <div className="md:w-4/6  mx-auto">
        <h1 className="font-poppins  leading-snug text-TextandIcons md:text-5xl text-4xl font-thin sm:text-center text-center">
          Frequently Asked <b>Questions </b>
        </h1>
        <p className="descriptionText text-center">Check for instant answer</p>
      </div>
      {/* Projects Name */}
      <div className="flex md:flex-row flex-col w-[80%] mx-auto justify-around mt-12">
        {projectsName.map((item) => {
          return (
            <div
              key={item?.id}
              onClick={() => setActiveItem(item?.id)}
              className={`${
                activeItem === item?.id
                  ? "bg-[rgba(252,252,242)] rounded-tl-lg px-6 py-6 border-l"
                  : "px-6 py-6"
              }`}
            >
              <h1 className="font-poppins text-sm font-semibold">
                {item?.name}
              </h1>

              {activeItem === item?.id && (
                <div className="mt-4 md:hidden">
                  {activeItem === 1 && <GeneralQA />}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {activeItem && (
        <div className="md:w-[80%] mx-auto mt-6 md:mt-12 hidden md:block">
          {activeItem === 1 && <GeneralQA />}
        </div>
      )}
    </section>
  );
};

export default FrequentlyQA;
