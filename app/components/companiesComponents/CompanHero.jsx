'use client';
import React from 'react';
import HeroPageTitle from '../Hero/HeroPageTitle';
import HeroCard from '../Hero/HeroCard';
import HeroWrapper from '../Hero/HeroWrapper';

const CompaniHeroSection = () => {
  return (
    <HeroWrapper backgroundImage="bg-heroImage">
      <div className="w-full flex  flex-col-reverse md:flex-row justify-between  md:ml-12 md:items-end relative">
        <HeroPageTitle title="Companies" />
        <HeroCard
          // badgeText="Special Offer"
          title="A Legacy of Leadership "
          subtitle="Across Industries"
          description="From textiles and bullion to real estate, construction, and global trading, Giga Group’s dynamic portfolio reflects decades of innovation, strategic partnerships, and impact-driven growth across Pakistan, the Middle East, and Africa."
          // buttonText="Learn More"
          // onButtonClick={() => console.log("Navigate to Goldcrest")}
        />
      </div>
    </HeroWrapper>
  );
};

export default CompaniHeroSection;
