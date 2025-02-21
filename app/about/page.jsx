import React from "react";
import HeroAbout from "../components/AboutComponents/HeroAbout";
import GroupAbout from "../components/AboutComponents/GroupAbout";
import WhoWeAre from "../components/AboutComponents/WhoWeAre";
import AboutBlog from "../components/AboutComponents/AboutBlog";

const page = () => {
  return (
    <section>
      <HeroAbout />
      <GroupAbout />
      <WhoWeAre />
      <AboutBlog />
    </section>
  );
};

export default page;
