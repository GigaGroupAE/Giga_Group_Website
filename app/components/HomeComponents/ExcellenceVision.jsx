import React from 'react';
import Image from 'next/image';
import car from '../../../public/islamabad.jpg';
import beach from '../../../public/Goldcrest-Views-4.webp';
import Historical from '../../../public/historical-places.webp';
import shoopingMall from '../../../public/Pakistan_National.jpg';
import { motion } from 'framer-motion';
import sportsClub from '../../../public/GME.webp';

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const ExcellenceVision = () => {
  return (
    <section className="pt-40 mx-auto px-6 relative container md:max-w-[1440px] xl:px-20">
      <motion.div
        className="md:w-4/5 mx-auto mb-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="headingSeaction">
          Experience the <b>Vision of Excellence</b>
        </h2>
        <p className="descriptionText md:text-center">
          In just two decades, Pakistan has envisioned, built, and delivered extraordinary,
          state-of-the-art real estate projects that set benchmarks not only in the country but also
          across South Asia.
        </p>
      </motion.div>

      <div className="gap-4 flex md:flex-row flex-col container mx-auto items-center">
        <motion.div
          className="w-[21rem] md:w-[35rem]"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* <h1 className="font-poppins text-TextandIcons text-[17px] py-2">
            <b className="bold">Recreational </b> Areas
          </h1> */}
          <Image
            src={car}
            alt="Recreational Areas"
            className="bg-repeat-round h-[20rem] bg-cover rounded-2xl md:h-[30rem]"
          />
        </motion.div>

        <motion.div
          className="space-y-5   my-auto flex flex-col items-center justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div>
            {/* <h1 className="font-poppins text-TextandIcons font-semibold text-[17px] py-2">
              Beaches
            </h1> */}
            <Image
              src={beach}
              alt="beaches"
              className="h-[15rem] w-[21rem] md:w-[24rem] rounded-2xl bg-contain bg-repeat-round"
            />
          </div>

          <div className="my-3">
            <Image
              src={sportsClub}
              alt="sports-club"
              className="h-[14rem] w-[21rem] md:w-[24rem] bg-contain rounded-2xl bg-repeat-round"
            />
            {/* <h1 className="font-poppins text-TextandIcons font-semibold text-[17px] py-2">
              Sports Clubs
            </h1> */}
          </div>
        </motion.div>

        <motion.div
          // className="h-4/5"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div>
            {/* <h1 className="font-poppins text-TextandIcons text-[17px] py-2">
              <b className="bold">Shopping </b> Malls
            </h1> */}
            <Image
              src={shoopingMall}
              alt="Shopping Malls"
              className=" hidden md:flex  w-[21rem] md:w-[35rem]  h-[20rem] bg-cover rounded-2xl md:h-[30rem]"
            />
          </div>
        </motion.div>
      </div>

      {/* <motion.div
        className="w-full py-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div>
          <Image
            src={Historical}
            alt="Shopping Malls"
            className="bg-contain h-[20rem] object-center rounded-2xl w-full bg-repeat-round"
          />
        </div>
        <h1 className="font-poppins text-TextandIcons text-[17px] py-2">
          <b className="bold">Historical </b> Places
        </h1>
      </motion.div> */}
    </section>
  );
};

export default ExcellenceVision;
