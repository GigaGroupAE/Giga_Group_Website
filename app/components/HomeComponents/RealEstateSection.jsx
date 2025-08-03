'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import architecture from '../../../public/architecture.svg';
import my_location from '../../../public/my_location.svg';
import psychiatry from '../../../public/psychiatry.svg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function RealEstate() {
  return (
    <div className="">
      <div className="-z-50  md:left-1/3 blur-3xl  absolute w-96 md:w-[600px] h-96  rounded-b-full bg-[#f8f7e0]"></div>

      <div className="container py-20 md:py-28  mx-auto px-2 md:px-0">
        <motion.div
          className="w-full mb-8 sm:mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="headingSeaction">
            Revolutionizing Real Estate with <b>Vision</b>
          </h2>

          <p className="descriptionText text-start md:text-center">
            Giga Group’s real estate projects across Pakistan and also in Dubai embody a steadfast
            commitment to architectural brilliance, modern lifestyle experiences, and innovative
            commercial spaces, positioning Islamabad and other key cities as emerging hubs for
            premium real estate investment.
          </p>
        </motion.div>

        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-8">
          <motion.div
            className="cartContainer sm:w-1/3"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Image src={architecture} alt="architecture" />
            <h1 className="font-poppins text-TextandIcons text-xl sm:text-2xl mt-4">
              <b>Architectural </b>Excellence
            </h1>
            <p className="font-poppins text-sm text-TextandIcons mt-1">
              At Giga Group, we design Islamabad’s skyline with architectural mastery and smart
              building solutions. Our iconic residential and commercial landmarks, like Goldcrest
              Views and Giga Downtown, redefine urban living while enhancing lifestyles and
              investment value across Pakistan’s most vibrant cities and communities.
            </p>
          </motion.div>

          <motion.div
            className="py-6 cartContainer w-full sm:w-1/3"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Image src={my_location} alt="location" />
            <h1 className="font-poppins text-TextandIcons text-xl sm:text-2xl mt-4">
              <b>Prime Real Estate</b> Locations
            </h1>
            <p className="font-poppins py-5 text-sm text-TextandIcons mt-2">
              Our developments are Pakistan’s most sought-after areas, including DHA Phase 2
              Islamabad, providing exceptional convenience, outstanding connectivity, and future
              growth potential. Our projects create ideal opportunities for investors seeking prime
              locations that promise strong returns and long-term stability in the Pakistani real
              estate market.
            </p>
          </motion.div>
          <div className="-z-50  blur-3xl left-0 absolute w-20 h-52  rounded-r-full bg-[#f8f7e0]"></div>

          <motion.div
            className="cartContainer w-full sm:w-1/3"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Image src={psychiatry} alt="sustainability" />
            <h1 className="font-poppins text-TextandIcons text-xl sm:text-2xl mt-4">
              <b>Commitment to </b>Sustainable
            </h1>
            <p className="font-poppins text-sm text-TextandIcons mt-2">
              We champion eco-friendly real estate across Pakistan, using energy-efficient solutions
              and sustainable practices to promote healthier environments. Our commitment ensures
              communities like Giga City thrive, fostering sustainable urban living and protecting
              the future for generations seeking modern, responsible lifestyles in Pakistan’s key
              cities.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-excellenceCover  flex items-center z-50 justify-center bg-blend-multiply bg-[rgb(72,105,143,0.7)] py-24 w-full bg-repeat-round object-center bg-cover">
        <motion.div
          className="w-[95%] sm:[50rem] md:w-[70rem] px-4 sm:px-28 py-12 gap-4 backdrop-blur-lg items-center flex flex-col justify-center bg-white bg-opacity-30 rounded-2xl"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-white md:text-5xl text-4xl">
            A Legacy of <b>Excellence</b>
          </h1>
          <p className="descriptionText text-white md:text-center">
            Over 60 years of experience, 5,000+ team members worldwide, and millions of square feet
            delivered in iconic projects like Giga Mall and Giga Downtown. With 99.99% customer
            satisfaction, Giga Group sets the benchmark for premium real estate in Pakistan.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-[#FEFEFE] xl:px-20"
      >
        <div className="container mx-auto px-4 md:px-0 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 gap-x-6 md:gap-x-10 text-center">
            {[
              ['60+', 'Years of Excellence'],
              ['5000+', 'Employees around the Globe'],
              ['99.99%', 'Customer Satisfaction'],
              ['7M+', 'Commercial & Residential Space'],
            ].map(([value, label], i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                className="flex flex-col items-center"
              >
                <h2 className="headingCount">{value}</h2>
                <p className="countSubHeading">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
