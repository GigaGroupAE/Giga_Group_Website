"use client";
import React from "react";
import Label from "../components/Label";
import ButtonPrimary from "../components/ButtonPrimary";
import OnGoingProjects from "../components/OnGoingProjects";
import DeliveredProjects from "../components/DeliveredProjects";
import ClientSays from "../components/HomeComponents/ClientSays";
import FrequentlyQA from "../components/HomeComponents/FrequentlyQA";
import NewsLetter from "../components/NewsLetter";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const page = () => {
  return (
    <main>
      <div className="bg-projectsHero flex items-end h-[38rem] bg-cover bg-center relative">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-6 flex-col md:w-3/4 w-11/12 mx-auto space-y-5 bg-[rgba(241,242,245,0.89)] px-8 py-5 backdrop-blur-md flex rounded-3xl shadow-lg"
        >
          <div className="flex">
            <Label title="Coming Soon" />
          </div>

          <h1 className="subHeading">
            <b>Ocean</b> Crest
          </h1>

          <p className="descriptionText">
            Great institutions are built over time, nurturing dreams and
            fostering visions that promote peaceful and inclusive societies for
            sustainable development. Giga Group is one such institution. Since
            its inception in 1956, the company has expanded its footprint across
            the textile industry, bullion trading, real estate development, and
            construction sectors in Dubai, United Arab Emirates.
          </p>

          <motion.div
            className="md:flex block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            <ButtonPrimary title="Learn More" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-[#FEFEFE] xl:px-20"
      >
        <div className="container mx-auto px-4 md:px-0 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 gap-x-6 md:gap-x-10 text-center">
            {[
              ["60+", "Years of Excellence"],
              ["5000+", "Employees around the Globe"],
              ["99.99%", "Customer Satisfaction"],
              ["10000+", "Projects Delivered"],
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

      <NewsLetter />
    </main>
  );
};

export default page;
