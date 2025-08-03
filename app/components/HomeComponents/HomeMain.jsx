'use client';
import React from 'react';
import ProjectsGrid from './ProjectsGrid';
import HomeHeroSeaction from './HomeHeroSeaction';
import HomeTopFeatures from './HomeTopFeatures';
import RealEstate from './RealEstateSection';
import DistanceDetails from './DistanceDetails';
import ExcellenceVision from './ExcellenceVision';
import FrequentlyQA from './FrequentlyQA';
import Newsletter from '../NewsLetter';
import HomeAboutSeaction from './HomeAboutSeaction';
import HomeMap from './HomeMap';

const HomeMain = () => {
  return (
    <main className="">
      <HomeHeroSeaction />
      <ProjectsGrid />
      <HomeAboutSeaction />

      <HomeTopFeatures />

      <RealEstate />

      <HomeMap />

      <DistanceDetails />
      {/* <div className="bg-secondary blur-[200px]   w-96 h-20 rounded-full absolute right-0"></div>
      <div className="bg-secondary blur-[200px]   w-96 h-20 rounded-full absolute "></div> */}

      <ExcellenceVision />
      <div className="bg-white/70 flex items-center  -z-10 justify-center   w-11/12 h-96 absolute rounded-full   mx-auto ">
        <div className="bg-secondary w-96 h-96  blur-[240px]   absolute rounded-full  z-50 mx-auto "></div>
      </div>

      {/* <ClientSays /> */}

      <FrequentlyQA />

      <Newsletter />
    </main>
  );
};

export default HomeMain;
