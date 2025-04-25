"use client";
import React from "react";
import ButtonPrimary from "../ButtonPrimary";
import GigaComponent from "../GigaComponent";
import { motion } from "framer-motion";

const fadeSlide = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const GroupAbout = () => {
  return (
    <div className="bg-white/50 backdrop-blur-[200px] relative">
      {/* Decorative blur circle */}
      <div className="bg-secondary h-40 w-60 absolute mt-[40rem] -left-9 blur-[160px] -z-50 rounded-full" />

      <div className="container mx-auto px-4 py-28">
        <div className="bg-grpupCover bg-cover h-[550px] w-full flex items-end rounded-[10px]">
          <motion.div
            className="bg-[rgb(237,237,237,0.9)] backdrop-blur-md space-y-4 w-[490px] px-9 py-5 rounded-tr-xl rounded-bl-md"
            variants={fadeSlide}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Great institutions are built over time, nurturing dreams and
              fostering visions that promote peaceful and inclusive societies
              for sustainable development. Giga Group is one such institution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <GigaComponent title="Najeeb Amin Pardesi" />
            </motion.div>

            <motion.div
              className="md:flex block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ButtonPrimary title="Learn More" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GroupAbout;
