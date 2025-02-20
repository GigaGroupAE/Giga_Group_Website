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
      <Navbar />

      <HomeHeroSeaction />

      <HomeAboutSeaction />

      <HomeTopFeatures />

      <div className="z-50 relative   ">
        {/* Reddeing the real estate with  */}

        <div className="  mx-auto px-[120px] py-[120px] flex-col  items-center flex justify-center  bg-gradient-to-br from-white to-[#F8F7E0] via-transparent">
          <div className=" w-[950] mb-[40]">
            <h2 className="headingSeaction">
              Redefining Real Estate with <b>Excellence</b>
            </h2>

            <p className="descriptionText text-center ">
              At Giga Group Real Estate Developers, we pride ourselves on
              delivering exceptional properties that combine innovation, prime
              locations, and sustainability. Each development is thoughtfully
              designed to enhance lifestyles, create long-term value, and set
              new benchmarks in the real estate industry.
            </p>
          </div>

          {/* cards  */}

          <div className=" w-full   flex items-center justify-between gap-4">
            <div className="cartContainer">
              <Image src={architecture} alt="architecture" />
              <h1 className="font-poppins text-TextandIcons text-2xl">
                <b>Architectural</b> Excellence
              </h1>
              <p className="font-poppins text-sm text-TextandIcons">
                Our developments redefine modern living with cutting-edge
                designs, blending functionality with elegance.
              </p>
            </div>
            <div className="cartContainer">
              <Image src={my_location} alt="architecture" />
              <h1 className="font-poppins text-TextandIcons text-2xl">
                <b>Strategic </b> Locations
              </h1>
              <p className="font-poppins text-sm text-TextandIcons">
                We build in the most sought-after areas, ensuring convenience,
                connectivity, and future growth potential.
              </p>
            </div>
            <div className="cartContainer">
              <Image src={psychiatry} alt="architecture" />
              <h1 className="font-poppins text-TextandIcons text-2xl">
                <b>Eco-Friendly</b> Solutions
              </h1>
              <p className="font-poppins text-sm text-TextandIcons">
                Our projects integrate sustainable practices, promoting energy
                efficiency and a healthier environment for residents.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-excellenceCover flex items-center justify-center bg-blend-multiply bg-[rgb(72,105,143,0.7)] h-[401px] w-full bg-repeat-round object-center bg-contain">
          {/* This is the frosted glass container */}
          <div className="w-[70%] gap-4 backdrop-blur-lg  items-center flex flex-col justify-center bg-white bg-opacity-30 p-8  rounded-lg">
            <h1 className="text-white text-5xl ">
              Redefining Real Estate with <b>Excellence</b>
            </h1>
            <p className="descriptionText text-white">
              At Giga Group Real Estate Developers, we pride ourselves on
              delivering exceptional properties that combine innovation, prime
              locations, and sustainability. Each development is thoughtfully
              designed to enhance lifestyles, create long-term value, and set
              new benchmarks in the real estate industry.
            </p>
          </div>
        </div>
      </div>

      <HomeMap />

      <DistanceDetails />

      <ExcellenceVision />

      <ClientSays />

      <FrequentlyQA />

      <NewsLetter />
    </main>
  );
}
