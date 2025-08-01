"use client";
import React from "react";
import HeroPageTitle from "../Hero/HeroPageTitle";
import HeroCard from "../Hero/HeroCard";
import HeroWrapper from "../Hero/HeroWrapper";

const CompaniHeroSection = () => {
  return (
    <HeroWrapper backgroundImage="bg-heroImage">
      <div className="w-full flex  flex-col-reverse md:flex-row justify-between  md:ml-12 md:items-end relative">
        <HeroPageTitle title="Companies" />
        <HeroCard
          badgeText="Special Offer"
          title="Goldcrest"
          subtitle="Views"
          description="Great institutions are built over time, nurturing dreams and fostering visions that promote peaceful and inclusive societies for sustainable development. Giga Group is one such institution. Since its inception in 1956, the company has expanded its footprint across the textile industry, bullion trading, real estate development, and construction sectors in Dubai, United Arab Emirates."
          buttonText="Learn More"
          onButtonClick={() => console.log("Navigate to Goldcrest")}
        />
      </div>
    </HeroWrapper>
  );
};

export default CompaniHeroSection;
