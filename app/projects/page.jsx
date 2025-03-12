import React from "react";
import Label from "../components/Label";
import ButtonPrimary from "../components/ButtonPrimary";
import OnGoingProjects from "../components/OnGoingProjects";
import DeliveredProjects from "../components/DeliveredProjects";
import ClientSays from "../components/HomeComponents/ClientSays";
import FrequentlyQA from "../components/HomeComponents/FrequentlyQA";
import NewsLetter from "../components/NewsLetter";

const page = () => {
  return (
    <main>
      <div className="bg-projectsHero flex items-end   h-[38rem] bg-cover">
        <div className="  mb-6   w-3/4 mx-auto space-y-5 bg-[rgba(241,242,245,0.89)] px-8 py-5 backdrop-blur-md flex md:flex-col rounded-3xl">
          <div className="flex">
            <Label title="Coming Soon" />
          </div>

          <h1 className="subHeading ">
            <b>Ocean</b> Crest
          </h1>

          <p className="descriptionText">
            Great institutions are built over time, nurturing dreams and
            fostering visions that promote peaceful and inclusive societies for
            sustainable development. Giga Group is one such institution. Since
            its inception in 1956, the company has expanded its footprint across
            the textile industry, bullion trading, real estate development, and
            construction sectors in Dubai, United Arab Emirates.
          </p>
          <div className="flex">
            <ButtonPrimary title="Learn More" />
          </div>
        </div>
      </div>

      <div className=" container md:my-[100] px-4 my-24     mx-auto     flex md:flex-row flex-col md:items-center justify-center  md:space-x-[150px] ">
        <div className="flex flex-1   gap-16 md:justify-between  items-center  px-4">
          <div className="">
            <h2 className="headingCount ">60+</h2>
            <p className="countSubHeading">Years of Excellence</p>
          </div>

          <div className="">
            <h2 className="headingCount ">5000+</h2>
            <p className="countSubHeading">Employees around the Globe</p>
          </div>
        </div>

        <div className="flex flex-1  gap-16  md:justify-between items-center   px-4">
          <div className="">
            <h2 className="headingCount ">99.99%</h2>
            <p className="countSubHeading">Customer Satisfaction</p>
          </div>

          <div className="">
            <h2 className="headingCount ">10000+</h2>
            <p className="countSubHeading">Years of Excellence</p>
          </div>
        </div>
      </div>

      <OnGoingProjects />
      <DeliveredProjects />
      <ClientSays />

      <FrequentlyQA />

      <NewsLetter />
    </main>
  );
};

export default page;
