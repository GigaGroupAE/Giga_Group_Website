'use client';
import React from 'react';
import HeroWrapper from '../Hero/HeroWrapper';
import HeroPageTitle from '../Hero/HeroPageTitle';
import HeroCard from '../Hero/HeroCard';

const HeroAbout = () => {
  return (
    <HeroWrapper backgroundImage=" bg-aboutCover">
      <div className="w-full flex  flex-col-reverse md:flex-row justify-between  md:ml-12 md:items-end relative">
        <HeroPageTitle title="About" />
        <HeroCard
          // badgeText="Giga___________"
          title="Rooted in Heritage,"
          subtitle="Growing Without Bounds"
          description="From a single textile venture in 1956 to a diversified global powerhouse across textiles, bullion, real estate, construction, and trade, Giga Group enriches lives and landscapes with visionary leadership, trusted partnerships, and a commitment to sustainable growth."
          // buttonText="Learn More"
          onButtonClick={() => console.log('Navigate to Goldcrest')}
        />
      </div>
    </HeroWrapper>
  );
};

export default HeroAbout;
