"use client";
import React from "react";
import GigaComponent from "../GigaComponent";
import ButtonPrimary from "../ButtonPrimary";
import { motion } from "framer-motion";

const fadeSlideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const HeroAbout = () => {
  return (
    <div className="bg-aboutCover h-[615px] flex items-end justify-center bg-no-repeat bg-cover">
      <motion.div
        className="md:w-[1040px] w-[90%] bg-[rgb(237,237,237,0.9)] flex flex-col my-8 px-[30px] py-[20px] rounded-[10px] backdrop-blur-md border border-white/20 shadow-lg"
        variants={fadeSlideUp}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <GigaComponent />
        </motion.div>

        <div className="space-y-4">
          <motion.h1
            className="font-poppins text-TextandIcons font-medium text-[35px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About <b>Giga Group</b>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            Since 1956, Giga Group has grown into a global institution,
            committed to fostering inclusive growth and sustainable development.
            With strong roots in the textile industry, the company has expanded
            into bullion trading, real estate, and construction. Today, Giga
            Group continues to shape modern skylines across Dubai and the UAE
            with a legacy of innovation and integrity.
          </motion.p>

          <motion.div
            className="md:flex block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            <ButtonPrimary title="Learn More" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroAbout;
