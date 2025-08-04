'use client';
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { onGoinProjects } from '@/src/Data/OnGoingProjectsData';
import Link from 'next/link';
import ButtonPrimary from '../ButtonPrimary';

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

const OnGoingProjectsCom = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = index => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="container xl:px-8 mx-auto py-20">
      <div className="flex justify-between items-center px-6 md:px-0">
        <h2 className="subHeading font-semibold">Other Ongoing Projects</h2>
        <Link href="/projects">
          <div className="px-5 py-1 text-center rounded-full bg-greyBG">
            <p className="font-poppins text-xs text-TextandIcons">View all</p>
          </div>
        </Link>
      </div>

      <motion.div
        ref={ref}
        className="w-full py-10 px-4"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {onGoinProjects.slice(0, 4).map((item, index) => {
            const imageUrl = item?.image ? `/${item.image}` : '';
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                className="group cardWrapper"
                style={{
                  backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
                  backgroundColor: !imageUrl ? '#333' : undefined,
                }}
                variants={cardVariants}
              >
                <h2 className="cardBadge">{item?.status}</h2>

                <div className="cardOverlay">
                  <Link href={`/project/${item.slug}`} target="_blank">
                    <h1 className="cardTitle">{item?.title}</h1>
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
                    className="cardDescription"
                  >
                    {item?.description}
                  </motion.p>

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
  );
};

export default OnGoingProjectsCom;
