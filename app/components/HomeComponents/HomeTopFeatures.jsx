import { topFeatures } from "@/src/Data/TopFeaturesData";
import React, { useRef } from "react";
import ButtonPrimary from "../ButtonPrimary";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const HomeTopFeatures = () => {
  const scrollContainerRef = useRef(null);

  const handleLeftArrowClick = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const handleRightArrowClick = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="md:ml-[175px] z-50 bg-white mx-auto pt-40 px-4 md:px-0 relative">
      <div className="md:mx-auto md:w-4/5 w-full">
        <h2 className="headingSeaction text-center text-4xl font-semibold mb-6">
          Explore Our <b>Top Features Projects</b>
        </h2>
        <p className="descriptionText text-center mb-12 text-lg">
          These developments embody Giga Group’s unwavering dedication to
          architectural excellence and premium quality, strengthening Dubai’s
          position as a rising hub for luxurious living and world-class
          commercial infrastructure.
        </p>
      </div>

      <div className=" flex gap-6">
        <div onClick={handleLeftArrowClick}>
          <FaArrowLeft />
        </div>
        <div onClick={handleRightArrowClick}>
          <FaArrowRight />
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="w-full flex gap-6 md:gap-10 overflow-x-auto py-14 px-4 scrollbar-hide justify-start items-center"
      >
        {topFeatures.map((item, index) => {
          const imageUrl = item?.image ? `/${item.image}` : null;

          return (
            <motion.div
              key={index}
              className="group relative flex-shrink-0 w-[320px] h-[500px] bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden shadow-lg"
              style={{
                backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

              <div className="absolute bottom-4 px-6 z-10 w-full">
                <motion.div
                  className="flexflex-col gap-3 transition-all duration-500 ease-in-out"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <motion.h1
                    className="text-white text-2xl font-semibold"
                    variants={{
                      rest: { y: 0, opacity: 1 },
                      hover: { y: -10, opacity: 1 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {item?.projectName}
                  </motion.h1>

                  <motion.p
                    className="font-poppins text-sm text-white leading-relaxed"
                    variants={{
                      rest: { y: 0, opacity: 1 },
                      hover: { y: -10, opacity: 1 },
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {item?.description}
                  </motion.p>

                  <motion.div
                    className="mt-4"
                    variants={{
                      rest: { opacity: 0, y: 10 },
                      hover: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                  >
                    <ButtonPrimary title="Learn More" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="bg-[#f1eebf] w-72 h-36 blur-3xl right-48 2xl:right-96 absolute rounded-full" />
    </section>
  );
};

export default HomeTopFeatures;
