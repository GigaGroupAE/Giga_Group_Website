'use client';
import { announcementsData, posts, recentBlogs } from '@/src/Data/AnnouncementData';
import React from 'react';
import newsImage from '../../public/blog1.webp';
import searchImage from '../../public/search.webp';
import Image from 'next/image';
import ButtonPrimary from '../components/ButtonPrimary';
import { motion } from 'framer-motion';
import logo from '../../public/LogoMobile.svg';

const index = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="backdrop-blur-[50px] w-full bg-white/50 mx-auto xl:px-8">
      <div className="flex container mx-auto md:flex-row flex-col px-3 md:px-0 gap-10">
        <div className="md:w-[75rem] w-full">
          {announcementsData.map((item, index) => (
            <motion.div
              className="w-[95%] py-7 space-y-3"
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={item?.image}
                alt="AnnouncementImage"
                className="rounded-2xl h-64 object-cover w-full"
              />

              <div className="flex space-x-2 items-center">
                <p className="font-poppins font-semibold text-sm">{item?.date}</p>
                <p className="font-poppins text-sm">. {item?.author}</p>
              </div>

              <h2 className="font-poppins text-lg font-semibold text-TextandIcons">
                {item?.title}
              </h2>
              <p className="font-poppins text-base text-TextandIcons">{item?.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-[#FDFDFD] md:w-[25rem] w-[95%] space-y-7 py-7 px-4 rounded-xl shadow-sm"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-5">
            <h2 className="font-poppins text-lg text-TextandIcons font-semibold">Find & Search</h2>
            <div className="flex items-center gap-4">
              <input
                placeholder="Search"
                className="w-full px-3 py-2 rounded-lg outline-none shadow-md text-TextandIcons font-poppins"
              />
              <Image src={searchImage} alt="Search" className="w-10 h-10" />
            </div>
          </div>

          <div className="py-5 space-y-5">
            <h2 className="font-poppins text-lg text-TextandIcons font-semibold">About Author</h2>
            <div className="flex items-center space-x-3">
              <Image
                src={logo}
                alt="AnnouncementImage"
                className="h-14 w-14 rounded-full object-contain"
              />
              <h2 className="font-poppins text-sm text-TextandIcons font-semibold">Giga Group</h2>
            </div>
            <p className="font-poppin text-TextandIcons text-sm">
              Great institutions are built over decades, shaping skylines, empowering communities,
              and delivering iconic developments that drive progress, innovation, and sustainable
              urban living.
            </p>
          </div>

          <div className="py-5 space-y-5">
            <h2 className="font-poppins text-lg text-TextandIcons font-semibold">Recent Blogs</h2>
            <div className="space-y-5">
              {recentBlogs.map((item, index) => (
                <motion.div
                  className="flex items-center space-x-4"
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <img
                    src={item?.image}
                    alt="AnnouncementImage"
                    className="h-20 w-20 rounded-md object-cover"
                  />
                  <div>
                    <h2 className="font-poppins text-sm text-TextandIcons font-semibold">
                      {item?.title}
                    </h2>
                    <p className="font-poppins text-xs text-TextandIcons">{item?.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="py-5 space-y-5">
            <h2 className="font-poppins text-lg text-TextandIcons font-semibold">
              Subscribe for Newsletter
            </h2>
            <p className="font-poppins text-sm text-TextandIcons font-medium">
              Subscribe to newsletter to get an email when we post new content
            </p>
            <div className="flex items-center gap-4">
              <input
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-lg outline-none shadow-md text-TextandIcons font-poppins"
              />
              <ButtonPrimary title="Subscribe" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto py-12 px-3 md:px-0">
        <div className="flex justify-between items-center">
          <h2 className="subHeading">Posts</h2>
          <div className="px-5 py-1 text-center rounded-full bg-greyBG">
            <p className="font-poppins text-xs text-TextandIcons">View all</p>
          </div>
        </div>

        <div className="py-12 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {posts.map((item, index) => (
            <motion.div
              key={index}
              className="space-y-3"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={item?.image}
                alt="Post Image"
                className="rounded-2xl h-80 w-full object-cover"
              />
              <div className="flex space-x-2 items-center">
                <p className="font-poppins text-placeholderText font-medium text-sm">
                  {item?.date}
                </p>
              </div>
              <h2 className="font-poppins text-lg font-semibold text-TextandIcons">
                {item?.title}
              </h2>
              <p className="font-poppins text-xs text-TextandIcons">{item?.content}</p>
              <div className="flex items-center space-x-3">
                <Image src={logo} alt="Author" className="h-6 w-6 rounded-full object-contain" />
                <h2 className="font-poppins text-xs text-TextandIcons font-semibold">Giga Group</h2>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
