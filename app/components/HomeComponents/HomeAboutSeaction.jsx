import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import about3 from "../../../public/ocean.webp";
import about2 from "../../../public/about3.webp";
import beach from "../../../public/beach.webp";

const HomeAboutSeaction = () => {
  return (
    <section className="container  px-2 md:px-0 mx-auto overflow-hidden">
      <div className="bg-white ">
        <div className="container px-4 py-20 md:py-28 mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 flex gap-3"
          >
            <div className="flex-1 h-[350px] relative top-6 md:top-14">
              <Image
                src={beach}
                alt="gigagroup"
                className="h-[350px] w-full object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <Image
                src={about2}
                alt="gigagroup"
                className="rounded-xl shadow-md "
              />
              <Image
                src={about3}
                alt="gigagroup"
                className="rounded-xl shadow-md md:w-80"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="md:w-3/4 w-full mx-auto">
              <div className="flex items-center gap-2">
                <h1 className="text-placeholderText text-sm font-poppins">
                  Giga
                </h1>
                <div className="bg-secondary w-[110px] h-0.5"></div>
              </div>

              <h1 className="font-poppins text-3xl text-TextandIcons my-3">
                The Pinnacle Of Modern <b> Living</b>
              </h1>

              <p className="descriptionText">
                Welcome to Goldcrest Views – which is more than just a home.
                Located in the heart of DHA Phase 2, Islamabad, this iconic Giga
                Group development combines contemporary Dubai-inspired design
                with premium lifestyle features. From stylish studios to
                breathtaking penthouses, every unit is meticulously crafted,
                offering uninterrupted cityscapes or serene mountain vistas.
                With round-the-clock security and luxury amenities, you’ll be
                part of a dynamic community built around comfort, connection,
                and elevated living.
              </p>

              {/* <div className="mt-6">
                <ButtonPrimary title="Learn More" />
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSeaction;
