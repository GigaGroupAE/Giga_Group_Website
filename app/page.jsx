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
import RealEstate from "./components/HomeComponents/RealEstateSection";

export default function Home() {
  return (
    <main className="">
      <HomeHeroSeaction />

      <HomeAboutSeaction />

      <HomeTopFeatures />

      <RealEstate />

      {/* <HomeMap /> */}

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
