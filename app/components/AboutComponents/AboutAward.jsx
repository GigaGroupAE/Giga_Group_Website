'use client';
import { awards } from '@/src/Data/AwardData';
import React from 'react';
import { motion } from 'framer-motion';

const slideFromIndex = index => {
  const directions = ['left', 'top', 'right'];
  const direction = directions[index % directions.length];
  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y';
  const offset = direction === 'left' || direction === 'top' ? -100 : 100;

  return {
    hidden: { opacity: 0, [axis]: offset },
    visible: {
      opacity: 1,
      [axis]: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.1 },
    },
  };
};

const AboutAward = () => {
  return (
    <div className="bg-white/50 py-28 backdrop-blur-[200px] relative overflow-hidden">
      <div className="bg-yellow-400 blur-[200px] h-60 w-60 -mt-60 rounded-full absolute z-0"></div>

      <div className="container mx-auto xl:px-8 relative z-10">
        <div className="mb-16 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-5">
            Featured <b className="text-black">Awards</b>
          </h1>
          <p className="descriptionText md:w-[854px] px-8 md:px-0 mx-auto">
            Giga Group has been recognized for its commitment to innovation and sustainability with
            several prestigious awards. In 2024, it earned the Water Conservation Achievement Award
            for its eco-conscious infrastructure. It also received the High-Rise Development
            Technology Award, celebrating its advanced engineering in vertical living solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-7 md:px-0">
          {awards.map((item, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden flex items-end group rounded-2xl h-[450px] shadow-md cursor-pointer"
              style={{
                backgroundImage: `url(${item?.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              variants={slideFromIndex(index)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="inset-0 bg-black/40  w-full h-full flex items-end p-6 transition-all duration-300 group-hover:bg-black/60">
                <h1 className="text-white text-xl font-semibold z-10">{item?.title}</h1>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutAward;
