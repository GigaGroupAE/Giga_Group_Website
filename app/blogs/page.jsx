"use client";

import {
  investmentPost,
  posts,
  recentBlogs,
} from "@/src/Data/AnnouncementData";
import Image from "next/image";
import React from "react";
import newsImage from "../../public/blog1.webp";
import FrequentlyQA from "../components/HomeComponents/FrequentlyQA";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const page = () => {
  return (
    <div className="bg-[#FAFAFA] text-black">
      <div className="container mx-auto px-4 py-10 space-y-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="w-full md:w-2/3"
          >
            <Image
              src={newsImage}
              alt="Header"
              className="w-full h-64 md:h-[25rem] object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="w-full md:w-[30%] bg-white rounded-xl shadow-md p-6 space-y-6"
          >
            <h3 className="text-xl font-semibold">Recent Blogs</h3>
            {recentBlogs.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={index + 3}
                className="flex items-start gap-4"
              >
                <Image
                  src={newsImage}
                  alt="Thumbnail"
                  className="h-16 w-16 object-cover rounded-md"
                />
                <div>
                  <h4 className="text-sm font-semibold">{item.title}</h4>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <Section title="Recent Posts" data={posts} />

        <Section title="Investment Posts" data={investmentPost} />

        <Section title="Business Posts" data={investmentPost} />

        {/* FAQ */}
        <FrequentlyQA />
      </div>
    </div>
  );
};

const Section = ({ title, data }) => {
  return (
    <motion.div
      className="space-y-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
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
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            <Image
              src={newsImage}
              alt="Post"
              className="w-full h-48 object-cover rounded-lg"
            />
            <p className="text-sm text-gray-500 mt-2">{item.date}</p>
            <h3 className="font-semibold text-lg mt-1">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{item.content}</p>
            <div className="flex items-center mt-4 space-x-3">
              <Image
                src={newsImage}
                alt="Author"
                className="h-6 w-6 rounded-full object-cover"
              />
              <span className="text-xs font-semibold">John Mathew</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default page;
