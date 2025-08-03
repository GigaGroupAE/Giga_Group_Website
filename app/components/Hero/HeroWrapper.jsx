"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeSlideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function HeroWrapper({ backgroundImage, children }) {
  return (
    <div
      className={`relative min-h-[700px] w-full bg-no-repeat bg-cover bg-center brightness-110 ${backgroundImage} flex items-end`}
    >
      <motion.div
        className="w-full max-w-[1440px] mx-auto px-3 md:px-[150px] pb-16"
        variants={fadeSlideUp}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.div>
    </div>
  );
}
