"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const AboutProject = ({ amenitiesDesc, amenitiesTitle, features }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="relative px-1 md:px-4 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-60 h-60 bg-[#C9BB00] opacity-20 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative mx-auto z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="bg-[rgba(250,250,250,0.75)] backdrop-blur-sm px-6 py-14"
        >
          <motion.h2
            variants={cardVariants}
            className="text-start md:text-center text-3xl md:text-4xl font-poppins text-[#2D2D2D]"
          >
            {amenitiesTitle}
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="text-start md:text-center font-normal max-w-5xl mx-auto mt-6 text-base text-TextandIcons font-poppins leading-relaxed"
          >
            {amenitiesDesc}
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid py-12  items-center justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white/60  backdrop-blur-md rounded-xl flex flex-col items-center justify-center py-6 px-2 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition hover:shadow-md"
              >
                <div className="text-yellow-500 text-2xl mb-2">
                  {feature.icon}
                </div>
                <p className="text-sm text-center font-poppins text-[#2D2D2D]">
                  {feature.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutProject;
