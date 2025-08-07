'use client';
import { BusinessPost, investmentPost, posts, recentBlogs } from '@/src/Data/AnnouncementData';
import Image from 'next/image';
import React, { useRef } from 'react';
import newsImage from '../../public/residential-property-for-sale-in-islamabad.webp';
import FrequentlyQA from '../components/HomeComponents/FrequentlyQA';
import { motion, useInView } from 'framer-motion';
import { blogsData } from '@/src/Data/BlogsData';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
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

const page = () => {
  return (
    <div className="bg-[#FAFAFA] py-28 text-black">
      <div className="container mx-auto px-4  space-y-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="w-full md:w-2/3 md:h-[28rem]"
          >
            {/* <div className="absolute z-50 top-64 sm:top-72">
              <h1 className="bg-red-600">
                Top Tourist Spots to Visit Within 15km of New Dubai
              </h1>
            </div> */}

            <Link href="/residential-property-for-sale-in-islamabad">
              <Image
                src={newsImage}
                alt="Header"
                className="w-full  h-full  object-cover rounded-2xl"
              />
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="w-full md:w-[30%] md:h-[28rem] bg-white rounded-xl shadow-md p-6 space-y-6"
          >
            <h3 className="text-xl font-semibold">Recent Blogs</h3>
            {blogsData?.slice(0, 4).map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={index + 3}
                className="flex items-start gap-4"
              >
                <Image
                  src={item?.image}
                  alt="Thumbnail"
                  className=" w-16 h-16  rounded-md"
                  width={30}
                  height={30}
                  style={{ objectFit: 'cover' }}
                />
                <Link href={`${item.slug}`}>
                  <div>
                    <h4 className="text-sm font-semibold">{item?.title}</h4>
                    <p className="text-xs text-gray-600">{item?.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <Section title="Recent Posts" data={blogsData} />

        {/* <Section title="Investment Posts" data={investmentPost} /> */}

        {/* <Section title="Business Posts" data={BusinessPost} /> */}

        {/* FAQ */}
        <FrequentlyQA />
      </div>
    </div>
  );
};

const Section = ({ title, data }) => {
  return (
    <motion.div className="space-y-10" variants={slideUp} initial="hidden" animate="visible">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="bg-gray-200 px-4 py-1 rounded-full">
          <p className="text-xs text-gray-600">View all</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 p-4"
            variants={slideUp}
            initial="hidden"
            animate="visible"
          >
            <Link href={`${item.slug}`}>
              <Image
                src={item?.image}
                alt={item?.title || 'Blog image'}
                width={200}
                height={250}
                className="w-full h-48 object-cover rounded-lg"
              />
            </Link>

            <Link href={`${item.slug}`}>
              <h3 className="font-semibold text-lg mt-1">{item.title}</h3>
            </Link>
            <p className="text-sm text-gray-600 mt-1">
              {item?.introduction?.slice(0, 200)}
              {item?.introduction?.length > 200 ? '...' : ''}
            </p>
            <div className="flex items-center mt-4 space-x-3">
              <span className="text-xs font-semibold">Giga Group</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default page;
