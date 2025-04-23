import { topFeatures } from "@/src/Data/TopFeaturesData";
import React from "react";
import ButtonPrimary from "../ButtonPrimary";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { motion } from "framer-motion";

const HomeTopFeatures = () => {
  return (
    <section className="container max-w-[1440px] xl:px-20 bg-white mx-auto py-28 px-4 md:px-0">
      <div className="md:mx-auto md:w-4/5 w-full">
        <h2 className="headingSeaction">
          Explore Our <b>Top Features Projects</b>
        </h2>
        <p className="descriptionText md:text-center">
          These developments embody Giga Group’s unwavering dedication to
          architectural excellence and premium quality, reinforcing Dubai’s
          status as a global epicentre for luxurious living and cutting-edge
          commercial infrastructure.
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row md:overflow-x-auto py-14 gap-6 md:gap-10 px-4 scrollbar-hide items-center md:items-stretch justify-center">
        {topFeatures.map((item, index) => {
          const imageUrl = item?.image ? `/${item.image}` : null;

          return (
            <motion.div
              key={index}
              className="group relative flex-shrink-0 w-full md:w-96 h-[33rem] bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden shadow-lg"
              style={{
                backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

              <div className="absolute bottom-4 px-4 z-10 w-full">
                <motion.div
                  className="flex flex-col gap-2 transition-all duration-500 ease-in-out"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <motion.h1
                    className="text-white text-2xl font-semibold font-poppins"
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
                    className="mt-3"
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
