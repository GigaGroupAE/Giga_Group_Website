'use client';
import React from 'react';
import HeroAbout from './HeroAbout';
import GroupAbout from './GroupAbout';
import WhoWeAre from './WhoWeAre';
import AboutBlog from './AboutBlog';
import AboutGiga from './AboutGiga';
import AboutAward from './AboutAward';
import Image from 'next/image';
import map from '../../../public/aboutMap.svg';

const AboutMain = () => {
  return (
    <main>
      <HeroAbout />
      <GroupAbout />
      <WhoWeAre />
      {/* <AboutBlog /> */}
      <AboutGiga />
      <AboutAward />

      <div className="w-full">
        <Image src={map} alt="map" className="w-full" />
      </div>
    </main>
  );
};

export default AboutMain;
