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

      {/* <div className="w-full">
        <Image src={map} alt="map" className="w-full" />
      </div> */}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d106434.6482267791!2d73.06690929709029!3d33.52523391820261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x38dfedbc825db4d3%3A0xf2067784d377d58d!2sBlock%2010%2C%20G5G2%2BF4G%20Al%20Ghurair%20Giga%2C%20Defense%20Residency%2C%20Sector%20Road%2C%20Sector%20A%20DHA%20Phase%20II%2C%20Islamabad!3m2!1d33.525261199999996!2d73.1493105!5e0!3m2!1sen!2s!4v1754322815423!5m2!1sen!2s"
        className="  h-96  w-full  rounded-2xl"
      ></iframe>
    </main>
  );
};

export default AboutMain;
