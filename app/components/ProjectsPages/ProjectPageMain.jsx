'use client';
import React from 'react';

import { motion } from 'framer-motion';
import HeroWrapper from '../Hero/HeroWrapper';
import HeroPageTitle from '../Hero/HeroPageTitle';
import HeroCard from '../Hero/HeroCard';
import OnGoingProjects from '../OnGoingProjects';
import DeliveredProjects from '../DeliveredProjects';
import ClientSays from '../HomeComponents/ClientSays';
import FrequentlyQA from '../HomeComponents/FrequentlyQA';
import Newsletter from '../NewsLetter';

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const ProjectPageMain = () => {
  return (
    <main>
      <HeroWrapper backgroundImage="bg-projectsHero">
        <div className="w-full flex  flex-col-reverse md:flex-row justify-between  md:ml-12 md:items-end relative">
          <HeroPageTitle title="Projects" />
          <HeroCard
            // badgeText="Giga___________"
            title="Shaping Skylines"
            subtitle="Building Dreams"
            description="From luxury high-rises and commercial marvels in Islamabad to iconic developments across Dubai, Karachi, and Lahore, Giga Group’s projects redefine real estate excellence across borders."
            // buttonText="Learn More"
            // onButtonClick={() => console.log("Navigate to Goldcrest")}
          />
        </div>
      </HeroWrapper>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-[#FEFEFE] xl:px-20"
      >
        <div className="container mx-auto px-4 md:px-0 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 gap-x-6 md:gap-x-10 text-center">
            {[
              ['60+', 'Years of Excellence'],
              ['5000+', 'Employees around the Globe'],
              ['99.99%', 'Customer Satisfaction'],
              ['7M+ SQFT', 'Commercial & Residential Space'],
            ].map(([value, label], i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                className="flex flex-col items-center"
              >
                <h2 className="headingCount">{value}</h2>
                <p className="countSubHeading">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <OnGoingProjects />
      <DeliveredProjects />

      <ClientSays />

      <FrequentlyQA />

      <Newsletter />
    </main>
  );
};

export default ProjectPageMain;
