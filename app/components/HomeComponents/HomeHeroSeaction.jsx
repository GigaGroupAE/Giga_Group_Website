"use client";
import React from "react";
import HeroWrapper from "../Hero/HeroWrapper";
import HeroInputForm from "../Hero/HeroInputForm";

const HomeHeroSection = () => {
  return (
    <HeroWrapper backgroundImage="bg-heroImage">
      <div className="w-full flex justify-center md:justify-end  md:ml-12 md:items-end relative">
        <HeroInputForm />
      </div>
    </HeroWrapper>
  );
};

export default HomeHeroSection;
