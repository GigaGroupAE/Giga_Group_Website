import React from "react";
import HeroAbout from "../components/AboutComponents/HeroAbout";
import GroupAbout from "../components/AboutComponents/GroupAbout";
import WhoWeAre from "../components/AboutComponents/WhoWeAre";
import AboutBlog from "../components/AboutComponents/AboutBlog";
import AboutGiga from "../components/AboutComponents/AboutGiga";

const page = () => {
  return (
    <section>
      <HeroAbout />
      <GroupAbout />
      <WhoWeAre />
      <AboutBlog />
      <AboutGiga />
    </section>
  );
};

export default page;
