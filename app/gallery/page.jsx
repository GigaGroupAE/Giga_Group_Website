"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import HeroWrapper from "../components/Hero/HeroWrapper";
import HeroPageTitle from "../components/Hero/HeroPageTitle";
import HeroCard from "../components/Hero/HeroCard";
import { galleryData } from "@/src/Data/GalleryData";
import ButtonPrimary from "../components/ButtonPrimary";

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
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Page = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section>
      <HeroWrapper backgroundImage="bg-heroImage">
        <div className="w-full flex flex-col-reverse md:flex-row justify-between md:ml-12 md:items-end relative">
          <HeroPageTitle title="Gallery" />
          <HeroCard
            title="A Legacy of Leadership "
            subtitle="Across Industries"
            description="From textiles and bullion to real estate, construction, and global trading, Giga Group’s dynamic portfolio reflects decades of innovation, strategic partnerships, and impact-driven growth across Pakistan, the Middle East, and Africa."
            onButtonClick={() => console.log("Navigate to Goldcrest")}
          />
        </div>
      </HeroWrapper>

      <motion.div
        ref={ref}
        className="w-full px-4"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 py-24  container mx-auto gap-6">
          {galleryData.map((item, index) => {
            const imageUrl = item?.image ? `/${item.image}` : "";
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                className="group overflow-hidden relative"
                variants={cardVariants}
              >
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={item?.title}
                    className="w-full rounded-2xl h-96 object-cover"
                  />
                )}

                <div className="py-4">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {item?.title}
                  </h2>

                  <motion.p
                    initial={{ height: "6rem", opacity: 0.8 }}
                    animate={{
                      height: isExpanded ? "auto" : "6rem",
                      opacity: isExpanded ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: isExpanded ? "unset" : 4,
                    }}
                    className=" text-black font-poppins text-sm"
                  >
                    {item?.description}
                  </motion.p>

                  {!isExpanded && (
                    <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                  )}

                  <div className="flex">
                    <div className="cardButtonWrapper">
                      <ButtonPrimary
                        title={isExpanded ? "Show Less" : "Learn More"}
                        onClick={() => toggleExpand(index)}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Page;
