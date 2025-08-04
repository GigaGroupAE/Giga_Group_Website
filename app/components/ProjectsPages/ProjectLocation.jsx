'use client';
import React from 'react';
import Image from 'next/image';
import map from '../../../public/projectMap.svg';
import { motion } from 'framer-motion';
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const slideFrom = direction => {
  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y';
  const offset = direction === 'left' || direction === 'top' ? -100 : 100;

  return {
    hidden: { opacity: 0, [axis]: offset },
    visible: {
      opacity: 1,
      [axis]: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };
};
const ProjectLocation = ({
  mapTitle,
  mapDesc,
  mapEmbedUrl,
  galleryTitle,
  galleryDesc,
  gallery,
}) => {
  return (
    <div className="w-full bg-white px-4 md:px-12 py-16 space-y-20">
      <div className="flex flex-col md:flex-row md:items-center max-w-7xl mx-auto gap-8">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <iframe src={mapEmbedUrl} width="600" height="320" className="  rounded-2xl"></iframe>
        </motion.div>

        <motion.dev
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex items-center"
        >
          <div className="bg-white/90 rounded-xl  shadow-sm p-6 md:p-10 space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{mapTitle}</h3>
            <p className="text-gray-600 text-sm font-poppins leading-relaxed">{mapDesc}</p>
          </div>
        </motion.dev>
      </div>
      <div className="bg-secondary   blur-[200px]    -left-10  w-52 h-52  rounded-full absolute "></div>
      <div className="bg-white text-gray-800 gap-24 flex-col md:flex-row flex container mx-auto px-4 md:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full  space-y-6 flex flex-col justify-center"
        >
          <div className="space-y-3">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{galleryTitle}</h3>
            <p className="text-gray-700 text-base">{galleryDesc}</p>
          </div>
        </motion.div>
        <div className=" flex ">
          <div className="flex md:flex-row md:px-6 flex-col md:items-center md:gap-3 mt-6 md:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:items-center space-y-2"
            >
              <motion.div
                className="md:w-[354] w-[380] h-[220px] relative rounded-2xl overflow-hidden"
                variants={slideFrom('left')}
              >
                <Image src={gallery[1].src} alt={gallery[1].alt} layout="fill" objectFit="cover" />
              </motion.div>

              <motion.div
                className="md:w-[354] w-[380] h-[200px] relative rounded-2xl overflow-hidden"
                variants={slideFrom('top')}
              >
                <Image src={gallery[2].src} alt={gallery[2].alt} layout="fill" objectFit="cover" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col my-8 md:my-0 items-center space-y-4"
            >
              <motion.div
                className="md:w-[209] bg-indigo-700 w-full h-[139px] relative rounded-2xl overflow-hidden"
                variants={slideFrom('bottom')}
              >
                <Image src={gallery[3].src} alt={gallery[3].alt} layout="fill" objectFit="cover" />
              </motion.div>

              <motion.div
                className="md:w-[209] w-full h-[259px] relative rounded-2xl overflow-hidden"
                variants={slideFrom('right')}
              >
                <Image src={gallery[0].src} alt={gallery[0].alt} layout="fill" objectFit="cover" />
              </motion.div>
            </motion.div>
          </div>
          <div className="-z-10  md:left-1/3 blur-3xl  absolute w-96 md:w-[600px] h-96  rounded-b-full    bg-[#f8f7e0]"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLocation;
