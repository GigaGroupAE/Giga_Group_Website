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
    <section className="bg-white py-6">
      <div className="mx-auto px-4">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            initial={{ x: 0 }}
            animate={{
              x: "-100%",
              transition: {
                ease: "linear",
                duration: 15,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
            style={{
              display: "flex",
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="relative w-40 h-40">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    height={200}
                    width={200}
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
            {/* Second loop of projects to make seamless scroll */}
            {projects.map((project, index) => (
              <motion.div
                key={`copy-${index}`}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="relative w-40 h-40">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    height={200}
                    width={200}
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
