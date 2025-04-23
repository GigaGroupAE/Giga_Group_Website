import React from "react";
import { motion } from "framer-motion";
import ButtonPrimary from "../ButtonPrimary";

const HomeHeroSeaction = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <section className="bg-heroImage  backdrop-brightness-200  h-[100vh] object-contain bg-cover md:items-center md:justify-center flex ">
      {/* center container  */}

      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className=" w-[90%] md:w-3/4 h-2/3  mt-6 md:mt-0 mx-auto flex flex-col  items-center "
      >
        <motion.h1
          variants={fadeInUp}
          className="sectionHeading text-center text-white"
        >
          <b className="font-bold  font-poppins">Start </b>your search today
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="w-[95%] md:w-[60%] sectionDesciption"
        >
          In just two decades, Dubai has envisioned, built, and delivered
          extraordinary state-of-the-art real estate projects that set
          benchmarks not only in the region but also globally.
        </motion.p>

        {/* form submit  */}

        <motion.div
          variants={fadeInUp}
          className="backdrop-blur-md w-full h-[100%]  md:h-auto  py-4  shadow-lg bg-opacity-5  rounded-3xl   "
        >
          {/* <div className=" bg-secondary  absolute z-0 w-full  h-full"></div> */}
          <form action="" className="relative z-50">
            <div className=" flex md:flex-row flex-col   md:items-center  w-[90%]  mx-auto mt-10 gap-4 ">
              <select className="md:w-[225px] w-[100%] p-3 rounded-lg  text-TextandIcons  bg-white  border border-white/40 outline-none ">
                <option className="font-poppins text-TextandIcons text-sm font-normal">
                  Select Project
                </option>
              </select>

              <input
                type="text"
                placeholder="Name"
                className="md:w-[225px] w-[100%] outline-none rounded-md bg-white px-4 py-2 font-poppins text-placeholderText "
              />
              <input
                type="text"
                placeholder="Email Address"
                className="md:w-[225px] w-[100%] rounded-md outline-none bg-white px-4 py-2 font-poppins text-placeholderText "
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="md:w-[225px] w-[100%] rounded-md bg-white outline-none px-4 py-2 font-poppins text-placeholderText "
              />
            </div>

            <div className=" w-[90%]    mx-auto md:mt-10 mt-5">
              <textarea
                name=""
                placeholder="Type your message "
                id=""
                className="w-full outline-none  bg-white px-4 h-24 rounded-md shadow-md py-3 "
              ></textarea>
            </div>

            <div className="w-[90%]  mx-auto ">
              <div className=" mt-5 mb-6 flex">
                <ButtonPrimary title="Submit your query" />
              </div>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeHeroSeaction;
