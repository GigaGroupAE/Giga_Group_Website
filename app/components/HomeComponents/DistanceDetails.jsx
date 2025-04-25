import { distanceMap } from "@/src/Data/DistanceData";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const DistanceDetails = () => {
  return (
    <section className=" bg-white/ mx-auto pt-40 max-w-[1440px] xl:px-20">
      <div className="container mx-auto">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3">
          {distanceMap?.map((item, index) => (
            <motion.div
              key={index}
              className="px-7 py-3 w-96 rounded-md border border-white bg-transparent"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-TextandIcons font-poppins">
                {item.heading}
              </h2>
              <h4 className="font-poppins text-sm font-semibold mt-2 mb-1">
                {item?.subheading}
              </h4>
              <p className="font-poppins text-xs text-TextandIcons">
                {item?.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DistanceDetails;
