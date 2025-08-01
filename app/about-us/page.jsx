import React from "react";
import HeroAbout from "../components/AboutComponents/HeroAbout";
import GroupAbout from "../components/AboutComponents/GroupAbout";
import WhoWeAre from "../components/AboutComponents/WhoWeAre";
import AboutBlog from "../components/AboutComponents/AboutBlog";
import AboutGiga from "../components/AboutComponents/AboutGiga";
import AboutAward from "../components/AboutComponents/AboutAward";
import map from "../../public/aboutMap.svg";
import Image from "next/image";

const page = () => {
  return (
    <section>
      <HeroAbout />
      <GroupAbout />
      <WhoWeAre />
      <AboutBlog />
      <AboutGiga />
      <AboutAward />

      <div className="w-full">
        <Image src={map} alt="map" className="w-full" />
      </div>
    </section>
  );
};

export default page;
