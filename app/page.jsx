"use client";
import Navbar from "@/app/components/Navbar";
import HomeHeroSeaction from "./components/HomeComponents/HomeHeroSeaction";
import HomeAboutSeaction from "./components/HomeComponents/HomeAboutSeaction";
import HomeTopFeatures from "./components/HomeComponents/HomeTopFeatures";
import HomeMap from "./components/HomeComponents/HomeMap";
import DistanceDetails from "./components/HomeComponents/DistanceDetails";
import ExcellenceVision from "./components/HomeComponents/ExcellenceVision";
import ClientSays from "./components/HomeComponents/ClientSays";
import FrequentlyQA from "./components/HomeComponents/FrequentlyQA";
import NewsLetter from "./components/NewsLetter";
import architecture from "../public//architecture.svg";
import my_location from "../public//my_location.svg";
import psychiatry from "../public//psychiatry.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HomeHeroSeaction />

      <HomeAboutSeaction />

      <HomeTopFeatures />

      <div className="z-50 px-2 bg-white mx-auto relative max-w-[1440px] xl:px-20   py-28 ">
        {/* <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 flex-col items-center flex justify-center bg-white"> */}
        <div className=" container mx-auto px-3 md:px-0 ">
          <div className="w-full  mb-8 sm:mb-12">
            <h2 className="headingSeaction">
              Redefining Real Estate with <b>Excellence</b>
            </h2>

            <p className="descriptionText  md:text-center   md:w-4/5 mx-auto mt-4">
              At Giga Group Real Estate Developers, we pride ourselves on
              delivering exceptional properties that combine innovation, prime
              locations, and sustainability. Each development is thoughtfully
              designed to enhance lifestyles, create long-term value, and set
              new benchmarks in the real estate industry.
            </p>
          </div>

          <div className="w-full   flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="cartContainer  sm:w-1/3  ">
              <Image src={architecture} alt="architecture" />
              <h1 className="font-poppins text-TextandIcons text-xl sm:text-2xl mt-4">
                <b>Architectural</b> Excellence
              </h1>
              <p className="font-poppins text-sm text-TextandIcons mt-1">
                Our developments redefine modern living with cutting-edge
                designs, blending functionality with elegance.
              </p>
            </div>
            <div className="cartContainer w-full sm:w-1/3 ">
              <Image src={my_location} alt="architecture" />
              <h1 className="font-poppins text-TextandIcons text-xl sm:text-2xl mt-4">
                <b>Strategic </b> Locations
              </h1>
              <p className="font-poppins text-sm text-TextandIcons mt-2">
                We build in the most sought-after areas, ensuring convenience,
                connectivity, and future growth potential.
              </p>
            </div>
            <div className="cartContainer w-full sm:w-1/3 ">
              <Image src={psychiatry} alt="architecture" />
              <h1 className="font-poppins text-TextandIcons text-xl sm:text-2xl mt-4">
                <b>Eco-Friendly</b> Solutions
              </h1>
              <p className="font-poppins text-sm text-TextandIcons mt-2">
                Our projects integrate sustainable practices, promoting energy
                efficiency and a healthier environment for residents.
              </p>
            </div>
          </div>

          <div className="bg-secondary w-60 h-60 -z-40 blur-[250px] top-[25rem] left-0      absolute rounded-full"></div>

          <div className="bg-secondary w-60 h-20 blur-[200px]  -z-40 right-96 2xl:right-96  absolute rounded-full"></div>
        </div>
      </div>

      <div className="bg-excellenceCover flex items-center z-50 justify-center bg-blend-multiply bg-[rgb(72,105,143,0.7)] py-24  w-full bg-repeat-round  object-center  bg-cover">
        <div className=" w-[95%] sm:[50rem] md:w-[68rem] px-4 sm:px-28  py-12 gap-4 backdrop-blur-lg  items-center flex flex-col justify-center bg-white bg-opacity-30  rounded-lg">
          <h1 className="text-white md:text-5xl  text-4xl ">
            Redefining Real Estate with <b>Excellence</b>
          </h1>
          <p className="descriptionText text-white text-center">
            At Giga Group Real Estate Developers, we pride ourselves on
            delivering exceptional properties that combine innovation, prime
            locations, and sustainability. Each development is thoughtfully
            designed to enhance lifestyles, create long-term value, and set new
            benchmarks in the real estate industry.
          </p>
        </div>
      </div>

      <HomeMap />

      <DistanceDetails />
      <div className="bg-secondary blur-[200px]   w-96 h-20 rounded-full absolute right-0"></div>
      <div className="bg-secondary blur-[200px]   w-96 h-20 rounded-full absolute "></div>

      <ExcellenceVision />
      <div className="bg-white/70 flex items-center  -z-10 justify-center   w-11/12 h-96 absolute rounded-full   mx-auto ">
        <div className="bg-secondary w-96 h-96  blur-[240px]   absolute rounded-full  z-50 mx-auto "></div>
      </div>

      <ClientSays />

      <FrequentlyQA />

      <NewsLetter />
    </main>
  );
}
