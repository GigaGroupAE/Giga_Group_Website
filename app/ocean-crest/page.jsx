import React from "react";
import OceanCrestHero from "../components/ProjectsPages/OceanCrestHero";
import Image from "next/image";
import bed from "../../public/bed.svg";
import { projectData } from "@/src/Data/ProjectData";
import { projectImages } from "@/src/Data/ProjectImages";
import map from "../../public/projectMap.svg";
import GigaComponent from "../components/GigaComponent";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecandary from "../components/ButtonSecandary";

import projectImage from "../../public/aboutGiga1.webp";
import { amenites } from "@/src/Data/Amenities";
import ContactUsForm from "../components/ContactUsForm";

const page = () => {
  return (
    <section>
      <OceanCrestHero />
      <div className="bg-[#FBFBFB]">
        <div className=" container mx-auto  py-16 space-y-4 ">
          <h2 className="text-center text-3xl font-poppins text-TextandIcons">
            <b>Investing </b> in Dubai's Future
          </h2>

          <p className=" descriptionText text-center w-4/5  mx-auto">
            Great institutions are built over time, nurturing dreams and
            fostering visions that promote peaceful and inclusive societies for
            sustainable development. Giga Group is one such institution. Since
            its inception in 1956, the company has expanded its footprint across
            the textile industry, bullion trading, real estate development, and
            construction sectors in Dubai, United Arab Emirates.
          </p>
        </div>
      </div>

      <div className=" justify-between mx-auto flex  py-16  px-[120px] container    items-center">
        {projectData.map((item) => {
          return (
            <div
              key={item?.id}
              className="items-center py-7 px-7 justify-center flex flex-col  space-y-4"
            >
              <Image
                src={item.image}
                width={30}
                height={20}
                alt={item.heading}
                className="  object-contain "
              />
              <p className="font-poppins  text-base text-TextandIcons">
                {item?.title}
              </p>
            </div>
          );
        })}
      </div>

      <div className="">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full  h-[600] object-contain"
        ></iframe>
      </div>

      <div className="">
        <div className="mx-12 my-12 ">
          {/* Grid container wrapping all images */}
          <div className="grid md:grid-cols-3 ">
            {projectImages.map((item) => (
              <Image
                key={item.image}
                src={item.image}
                width={100}
                height={100}
                alt={item.heading}
                className="object-cover w-full h-auto "
              />
            ))}
          </div>
        </div>
      </div>

      <div
        className=" flex md:flex-row flex-col 
      "
      >
        <div className=" w-[70%]">
          <Image src={map} alt="Map" className="w-full" />
        </div>
        <div className="bg-[#FBFBFB] w-[30%] flex items-center">
          <div className="bg-white space-y-4 rounded-xl z-50 w-96 mx-auto my-auto px-7 py-5">
            <button className="bg-[rgb(241,238,191)] px-5 rounded-full text-TextandIcons text-sm font-poppins">
              Coming soon
            </button>
            <h2 className="font-poppins text-4xl text-TextandIcons ">
              <b>Ocean </b>Crest
            </h2>
            <p className="descriptionText ">
              Great institutions are built over time, nurturing dreams and
              fostering visions that promote peaceful and inclusive societies
              for sustainable development. Giga Group is one such institution.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className=" py-32  md:space-x-24 flex md:flex-row flex-col   container mx-auto">
        <div className=" w-96 space-y-5">
          <GigaComponent title="Giga" />
          <h1 className="subHeading">
            <b>Invest</b> In An Elegant Future
          </h1>
          <div className="">
            <h2 className="descriptionText">
              Payment Plan <b>3 Years</b>
            </h2>
            <h2 className="descriptionText">
              Starting prices from <b>AED570000</b>
            </h2>
          </div>

          <div className="flex md:flex-row   space-x-5">
            <ButtonPrimary title="Submit a query" />
            <ButtonSecandary title="Download" />
          </div>
        </div>
        <div className=" md:flex-row flex md:space-x-2">
          <div className=" md:space-y-2">
            <Image
              src={projectImage}
              className="w-80 h-48 object-cover rounded-md  "
            />
            <Image
              src={projectImage}
              className="w-80 h-48 rounded-md  object-cover "
            />
          </div>
          <div className="">
            <div className=" md:space-y-2">
              <Image
                src={projectImage}
                className="w-52  h-28 rounded-md  object-cover "
              />
              <Image
                src={projectImage}
                className="w-52 h-64 rounded-md  object-cover "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-tr py-16 ">
        <div className="mx-auto w-2/4 items-center">
          <h2 className="text-center subHeading">
            Investing in <b>Everything you Need</b>
          </h2>
          <p className="text-center descriptionText">
            Great institutions are built over time, nurturing dreams and
            fostering visions that promote peaceful and inclusive societies for
            sustainable development. Giga Group is one such institution.
          </p>
        </div>

        <div className=" gap-2 container mx-auto px-32 mt-16 grid md:grid-cols-4">
          {amenites?.map((item) => {
            return (
              <div className="bg-indigo-100 space-y-4 rounded-md  py-10 items-center flex-col  justify-center flex">
                <Image
                  src={item.image}
                  width={25}
                  height={23}
                  alt={item.title}
                  className="  rounded-md   object-cover"
                />
                <h2 className="descriptionText ">Hello</h2>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-secondary">
        <div
          className="w-4/6 mx-auto py-16  space-y-2
        "
        >
          <h1 className="text-center text-white font-poppins text-4xl font-semibold ">
            Why Choose <b>Pearl Bliss Residence?</b>{" "}
          </h1>
          <p className="text-center text-white font-poppins text-sm ">
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

      <ContactUsForm />
    </section>
  );
};

export default page;
