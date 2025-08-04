'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
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
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const MediaProject = ({ videoUrl, gallery }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <div className="bg-white text-gray-800 container mx-auto px-4 md:px-8 py-8">
      {videoUrl && (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          div
          className="aspect-w-16 aspect-h-9 mb-8 rounded-xl overflow-hidden shadow-lg"
        >
          <iframe
            className="w-full h-[25rem] md:h-[40rem]"
            src={videoUrl}
            title="Dubai Skyline Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {gallery.slice(0, 4).map((img, index) => (
          <motion.div
            key={index}
            className="relative h-52 rounded-xl overflow-hidden shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            variants={cardVariants}
          >
            <Image
              src={img}
              alt={`Interior ${index + 1}`}
              fill
              className="object-fill"
              sizes="(max-width: 768px) 50vw, 25vw"
              priority={index < 4}
            />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {gallery.slice(4, 7).map((img, index) => (
          <motion.div
            key={index + 4}
            className="relative h-52 rounded-xl overflow-hidden shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (index + 4) * 0.2, duration: 0.6 }}
          >
            <Image
              src={img}
              alt={`Interior ${index + 5}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MediaProject;
