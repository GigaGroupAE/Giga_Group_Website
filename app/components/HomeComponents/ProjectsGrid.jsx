"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  { src: "/giga-group.webp", alt: "GIGA Group" },
  { src: "/al-ghurair-giga.webp", alt: "Al Ghurair Giga Pakistan (Pvt) Ltd" },
  { src: "/goldcrest-views.webp", alt: "Goldcrest Views" },
  { src: "/giga-mall.webp", alt: "GIGA Mall" },
  { src: "/giga-business-complex.webp", alt: "Giga Business Complex" },
  { src: "/goldcrest-highlife.webp", alt: "Goldcrest Highlife" },
  { src: "/goldcrest-commercial.webp", alt: "Goldcrest Commercial" },
  { src: "/giga-mall-extension.webp", alt: "GIGA Mall Extension" },
  { src: "/central-palace-residence.webp", alt: "Central Palace Residence" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ProjectsGrid = () => {
  return (
    <section className=" bg-white">
      <div className=" mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-6 justify-items-center items-center"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <div className="relative w-auto  transition duration-300 ease-in-out">
                <Image
                  src={project.src}
                  alt={project.alt}
                  height={200}
                  width={200}
                  className="object-contain"
                  //   loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
