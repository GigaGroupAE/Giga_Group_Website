"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import architecture from "../../../public/architecture.svg";
import my_location from "../../../public/my_location.svg";
import psychiatry from "../../../public/psychiatry.svg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function RealEstate() {
  return (
    <div className="pt-40">
      <div className="container mt-10 mx-auto px-3 md:px-0">
        <motion.div
          className="w-full mb-8 sm:mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="headingSeaction">
            Revolutionizing Real Estate with <b>Vision</b>
          </h2>

          <p className="descriptionText text-start md:text-center">
            Giga Group’s real estate projects in Dubai reflect a strong
            commitment to world-class architecture, luxury lifestyle living, and
            innovative commercial infrastructure—solidifying the city’s position
            as a premier global destination for high-end real estate investment.
          </p>
        </motion.div>

        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-8">
          <motion.div
            className="cartContainer sm:w-1/3"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Image src={architecture} alt="architecture" />
            <h1 className="font-poppins text-TextandIcons text-xl sm:text-2xl mt-4">
              <b>Architectural Excellence</b> in Real Estate Development
            </h1>
            <p className="font-poppins text-sm text-TextandIcons mt-1">
              At Giga Group, our real estate developments showcase modern
              architectural design and intelligent building solutions, creating
              iconic structures that enhance residential and commercial
              experiences globally.​
            </p>
          </motion.div>

          <motion.div
            className="py-6 cartContainer w-full sm:w-1/3"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Image src={my_location} alt="location" />
            <h1 className="font-poppins text-TextandIcons text-xl sm:text-2xl mt-4">
              <b>Prime Real Estate</b> Locations with High Investment Potential
            </h1>
            <p className="font-poppins py-5 text-sm text-TextandIcons mt-2">
              We build in the most sought-after areas, ensuring convenience,
              connectivity, and future growth potential.
            </p>
          </motion.div>

          <motion.div
            className="cartContainer w-full sm:w-1/3"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Image src={psychiatry} alt="sustainability" />
            <h1 className="font-poppins text-TextandIcons text-xl sm:text-2xl mt-4">
              <b>Commitment to Sustainable</b> and Eco-Friendly Living
            </h1>
            <p className="font-poppins text-sm text-TextandIcons mt-2">
              We prioritise eco-friendly real estate development, integrating
              energy-efficient solutions and green building practices to foster
              a healthier environment and cultivate sustainable communities for
              future generations.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="bg-secondary w-60 h-60 -z-40 blur-[250px] top-[25rem] left-0 absolute rounded-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        />
        <motion.div
          className="bg-secondary w-60 h-20 blur-[200px] -z-40 right-96 2xl:right-96 absolute rounded-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        />
      </div>

      <div className="bg-excellenceCover mt-32 flex items-center z-50 justify-center bg-blend-multiply bg-[rgb(72,105,143,0.7)] py-24 w-full bg-repeat-round object-center bg-cover">
        <motion.div
          className="w-[95%] sm:[50rem] md:w-[70rem] px-4 sm:px-28 py-12 gap-4 backdrop-blur-lg items-center flex flex-col justify-center bg-white bg-opacity-30 rounded-2xl"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-white md:text-5xl text-4xl">
            Revolutionizing Real Estate with <b>Excellence</b>
          </h1>
          <p className="descriptionText text-white md:text-center">
            At Giga Group Real Estate Developers, we specialize in creating
            exceptional properties that combine innovative design, prime
            locations, and sustainable development...
          </p>
        </motion.div>
      </div>
    </div>
  );
}
