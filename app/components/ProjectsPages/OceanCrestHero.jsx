"use client";
import React from "react";
import ButtonPrimary from "../ButtonPrimary";
import { motion } from "framer-motion";

const OceanCrestHero = () => {
  return (
    <div className="w-full">
      <div className="bg-oceanCrest bg-cover bg-center flex items-end py-8 md:py-0 md:h-[38rem]">
        <div className="container mx-auto flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0 mb-12 px-4">
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-[500px] bg-[rgba(240,240,241,0.9)] backdrop-blur-sm px-6 py-10  rounded-2xl space-y-4"
          >
            <div>
              <p className="bg-[rgb(232,227,181)] px-5 py-1 rounded-full text-TextandIcons font-poppins text-sm inline-block">
                Coming Soon
              </p>
            </div>
            <h1 className="text-TextandIcons font-poppins text-4xl font-bold">
              Ocean <span className="font-normal">Crest</span>
            </h1>
            <p className="text-TextandIcons font-poppins text-sm md:w-96">
              Great institutions are built over time, nurturing dreams and
              fostering visions that promote peaceful and inclusive societies
              for sustainable development. Giga Group is one such institution.
            </p>
          </motion.div>

          {/* Right Form Block */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-[600px] bg-[rgba(173,173,172,0.7)] backdrop-blur-md px-6 py-10 rounded-2xl"
          >
            <h2 className="text-center text-white font-poppins font-semibold text-2xl mb-4">
              Check Available Units
            </h2>

            <form className="flex flex-col space-y-3 items-center w-full">
              <input
                placeholder="Name"
                className="bg-white px-4 py-3 rounded-md w-[95%] font-poppins text-TextandIcons text-sm outline-none"
              />
              <input
                placeholder="Email Address"
                className="bg-white px-4 py-3 rounded-md w-[95%] font-poppins text-TextandIcons text-sm outline-none"
              />
              <input
                placeholder="Phone Number"
                className="bg-white px-4 py-3 rounded-md w-[95%] font-poppins text-TextandIcons text-sm outline-none"
              />
              <div className="w-[95%]">
                <ButtonPrimary title="Submit" />
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OceanCrestHero;
