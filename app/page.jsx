"use client";
import HomeHeroSeaction from "./components/HomeComponents/HomeHeroSeaction";
import HomeAboutSeaction from "./components/HomeComponents/HomeAboutSeaction";
import HomeTopFeatures from "./components/HomeComponents/HomeTopFeatures";
import DistanceDetails from "./components/HomeComponents/DistanceDetails";
import ExcellenceVision from "./components/HomeComponents/ExcellenceVision";
import ClientSays from "./components/HomeComponents/ClientSays";
import FrequentlyQA from "./components/HomeComponents/FrequentlyQA";
import NewsLetter from "./components/NewsLetter";
import RealEstate from "./components/HomeComponents/RealEstateSection";
import ProjectsGrid from "./components/HomeComponents/ProjectsGrid";

export default function Home() {
  return (
    <main className="">
      <HomeHeroSeaction />
      <ProjectsGrid />
      <HomeAboutSeaction />

      <HomeTopFeatures />

      <RealEstate />

      {/* <HomeMap /> */}

      <DistanceDetails />
      {/* <div className="bg-secondary blur-[200px]   w-96 h-20 rounded-full absolute right-0"></div>
      <div className="bg-secondary blur-[200px]   w-96 h-20 rounded-full absolute "></div> */}

      <ExcellenceVision />
      <div className="bg-white/70 flex items-center  -z-10 justify-center   w-11/12 h-96 absolute rounded-full   mx-auto ">
        <div className="bg-secondary w-96 h-96  blur-[240px]   absolute rounded-full  z-50 mx-auto "></div>
      </div>

      {/* <ClientSays /> */}

      <FrequentlyQA />

      <NewsLetter />
    </main>
  );
}
