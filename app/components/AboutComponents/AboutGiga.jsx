"use client";
import React from "react";
import GigaComponent from "../GigaComponent";
import ButtonPrimary from "../ButtonPrimary";
import giga1 from "../../../public/aboutGiga1.webp";
import giga2 from "../../../public/aboutGiga2.webp";
import giga3 from "../../../public/aboutGiga3.webp";
import giga4 from "../../../public/aboutGiga4.webp";
import giga5 from "../../../public/aboutGiga5.webp";
import Image from "next/image";
import { motion } from "framer-motion";
import { signatureStructures } from "@/src/Data/WhoWeAre";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideFrom = (direction) => {
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const offset = direction === "left" || direction === "top" ? -100 : 100;

  return {
    hidden: { opacity: 0, [axis]: offset },
    visible: {
      opacity: 1,
      [axis]: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };
};

const AboutGiga = () => {
  return (
    <div className="bg-white/70 backdrop-blur-[200px] relative overflow-hidden py-28">
      <div className="bg-secondary h-60 -mt-60 mx-auto md:ml-96 blur-[200px] w-60 rounded-full absolute z-0"></div>

      <motion.div
        className="flex flex-col md:flex-row container xl:px-8 mx-auto items-center justify-between relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Text Section */}
        <motion.div className="space-y-4" variants={fadeUp}>
          <GigaComponent />
          <h2 className="font-poppins text-TextandIcons font-normal text-[35px]">
            Signature <b>Structures</b>
          </h2>
          <p className="w-[350px] descriptionText">
            Islamabad's landscape is evolving with several prominent
            developments that stand out as significant urban landmarks.
          </p>
          {signatureStructures.map((item, index) => (
            <motion.div key={index} variants={fadeUp}>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex md:flex-row px-6 flex-col md:items-center md:gap-6 mt-12 md:mt-0">
          <div className="flex flex-col items-center space-y-4">
            <motion.div
              className="md:w-[22rem] w-[23rem] h-[350px] relative rounded-2xl overflow-hidden"
              variants={slideFrom("left")}
            >
              <Image
                src={giga1}
                alt="Giga Group Image 1"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>

            <motion.div
              className="md:w-[22rem] w-[23rem] h-[200px] relative rounded-2xl overflow-hidden"
              variants={slideFrom("top")}
            >
              <Image
                src={giga2}
                alt="Giga Group Image 2"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </div>

          <div className="flex flex-col my-8 md:my-0 items-center space-y-4">
            <motion.div
              className="md:w-[20rem] bg-indigo-700 w-full h-[200px] relative rounded-2xl overflow-hidden"
              variants={slideFrom("bottom")}
            >
              <Image
                src={giga3}
                alt="Giga Group Image 3"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>

            <motion.div
              className="md:w-[20rem] w-full h-[139px] relative rounded-2xl overflow-hidden"
              variants={slideFrom("right")}
            >
              <Image
                src={giga4}
                alt="Giga Group Image 4"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>

            <motion.div
              className="md:w-[20rem] w-full h-[200px] relative rounded-2xl overflow-hidden"
              variants={fadeUp}
            >
              <Image
                src={giga5}
                alt="Giga Group Image 5"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutGiga;
