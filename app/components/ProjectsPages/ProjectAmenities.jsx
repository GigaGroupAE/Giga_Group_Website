'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
      ease: 'easeOut',
    },
  },
};

const ProjectAmenities = ({ amenitiesFeaturesTitle, amenities, whyChooseTitle, whyChooseDesc }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleExpand = index => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="bg-[#fdfcf6] backdrop-blur-sm py-16 text-gray-800" ref={ref}>
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold">{amenitiesFeaturesTitle}</h2>
      </div>

      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
      >
        {amenities?.slice(0, 10).map((amenity, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:border hover:border-secondary"
          >
            <div className="text-secondary text-4xl mb-3">{amenity.icon}</div>
            <h4 className="text-gray-800 font-medium text-base">{amenity.title}</h4>
          </motion.div>
        ))}
      </motion.div>

      <div className="bg-secondary w-full mt-20 py-[70px] text-white text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">{whyChooseTitle}</h3>
        <p className="max-w-4xl mx-auto text-sm font-poppins leading-relaxed">{whyChooseDesc}</p>
      </div>
    </section>
  );
};

export default ProjectAmenities;
