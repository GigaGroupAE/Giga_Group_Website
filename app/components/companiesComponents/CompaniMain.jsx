'use client';
import React, { useRef, useState } from 'react';

import { motion, useInView } from 'framer-motion';
import { businessSectors } from '@/src/Data/CompaniesData';
import CompaniHeroSection from './CompanHero';
import ButtonPrimary from '../ButtonPrimary';
import Link from 'next/link';

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

const CompaniMain = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = index => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <section>
      <CompaniHeroSection />

      <div className="container xl:px-8 mx-auto">
        <div className="flex justify-between items-center py-16 px-6 md:px-0">
          <p className="font-poppins text-sm text-center">
            The Giga Group comprises several companies independently and jointly owned by the Giga
            family in Pakistan and the Middle East. The Giga Group has a multifarious set of
            business activities in textile, gold refining, bullion trade, real estate development,
            and the construction industry.
          </p>
        </div>

        <motion.div
          ref={ref}
          className="w-full px-4"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessSectors.map((item, index) => {
              const imageUrl = item?.image ? `/${item.image}` : '';
              const isExpanded = expandedIndex === index;

              return (
                <motion.div
                  key={index}
                  className="group overflow-hidden relative"
                  variants={cardVariants}
                >
                  {imageUrl && (
                    <Link href={`${item.slug}`}>
                      <img
                        src={imageUrl}
                        alt={item?.title}
                        className="w-full rounded-2xl h-96 object-cover"
                      />
                    </Link>
                  )}

                  <div className="py-4">
                    <Link href={`${item.slug}`}>
                      <h2 className="text-lg font-semibold text-gray-800 mb-2">{item?.title}</h2>
                    </Link>

                    <motion.p
                      initial={{ height: '6rem', opacity: 0.8 }}
                      animate={{
                        height: isExpanded ? 'auto' : '6rem',
                        opacity: isExpanded ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      style={{
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: isExpanded ? 'unset' : 4,
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
                          title={isExpanded ? 'Show Less' : 'Learn More'}
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
      </div>
    </section>
  );
};

export default CompaniMain;
