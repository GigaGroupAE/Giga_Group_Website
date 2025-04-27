"use client";
import { aboutBlog } from "@/src/Data/AboutBlog";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { posts } from "@/src/Data/AnnouncementData";

const blogCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const AboutBlog = () => {
  return (
    <div className="bg-white/20 backdrop-blur-[200px] py-28">
      <div className="container mx-auto">
        <motion.h1
          className="text-center text-3xl md:text-5xl font-semibold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          From Our <b className="text-black">Blog</b>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-14">
          {posts.map((item, index) => (
            <motion.div
              key={item.id}
              className="text-[#ffffff] rounded-2xl px-7 space-y-4"
              custom={index}
              variants={blogCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                src={item.image}
                width={430}
                height={430}
                alt={item.heading}
                className="rounded-md object-cover w-full h-[250px]"
              />
              <h2 className="text-lg md:text-xl font-bold text-TextandIcons">
                {item.title}
              </h2>
              <p className="text-TextandIcons font-poppins text-sm">
                {item.content}
              </p>
              <h2 className="font-poppins text-sm text-TextandIcons font-semibold cursor-pointer hover:underline transition-all">
                Learn More
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutBlog;
