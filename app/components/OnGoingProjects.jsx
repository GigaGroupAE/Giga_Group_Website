"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroWrapper from "../components/Hero/HeroWrapper";
import HeroPageTitle from "../components/Hero/HeroPageTitle";
import HeroCard from "../components/Hero/HeroCard";
import managementData from "@/src/Data/managementData";

// Animation variants (copied and reused)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const page = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section>
      {/* Hero Section */}
      <HeroWrapper backgroundImage="bg-managementHero">
        <div className="w-full flex flex-col-reverse md:flex-row justify-between md:ml-12 md:items-end relative">
          <HeroPageTitle title="Management" />
          <HeroCard
            title="About"
            subtitle="Giga Group"
            description="Great institutions are built over time, nurturing dreams and fostering visions that promote peaceful and inclusive societies for sustainable development. Giga Group is one such institution. Since its inception in 1956, the company has expanded its footprint across the textile industry, bullion trading, real estate development, and construction sectors in Dubai, United Arab Emirates."
            onButtonClick={() => console.log("Navigate to Goldcrest")}
          />
        </div>
      </HeroWrapper>

      {/* Management Section */}
      <div className="relative w-full bg-white py-16 overflow-hidden">
        {/* Background Blurs */}
        <div className="absolute top-96 left-0 h-96 w-40 bg-gradient-to-r from-secondary via-transparent to-transparent blur-[100px] md:blur-3xl z-0"></div>
        <div className="absolute right-0 bottom-20 h-96 w-40 bg-gradient-to-l from-secondary via-transparent to-transparent blur-[100px] md:blur-3xl z-0"></div>

        {/* Animated Content Container */}
        <motion.div
          ref={ref}
          className="relative z-10 max-w-7xl mx-auto px-6 space-y-24"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {managementData.map((person, index) => (
            <motion.div
              key={person.name}
              variants={cardVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-start gap-8`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/3">
                <img
                  src={person.image}
                  alt={person.name}
                  className="rounded-lg shadow-lg object-cover h-[408px] w-full"
                />
                <h2 className="text-lg font-poppins font-semibold mt-4">
                  {person.name}
                </h2>
                <h3 className="text-lg font-poppins font-normal text-secondary mb-4">
                  {person.title}
                </h3>
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-2/3">
                <p className="text-justify font-poppins text-base whitespace-pre-line leading-relaxed text-TextandIcons">
                  {person.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default page;
