"use client";
import React from "react";
import { motion } from "framer-motion";
import HeroWrapper from "../components/Hero/HeroWrapper";
import HeroPageTitle from "../components/Hero/HeroPageTitle";
import HeroCard from "../components/Hero/HeroCard";
import managementData from "@/src/Data/managementData";

const page = () => {
  return (
    <section>
      {/* Hero Section */}
      <HeroWrapper backgroundImage="bg-managementHero">
        <div className="w-full flex flex-col-reverse md:flex-row justify-between md:ml-12 md:items-end relative">
          <HeroPageTitle title="Management" />
          <HeroCard
            title="About"
            subtitle="Giga Group"
            description="Great institutions are built over time, nurturing dreams and fostering visions that promote peaceful and inclusive societies for sustainable development. Giga Group is one such institution. Since its inception in 1956, the company has expanded its footprint across the textile industry, bullion trading, real estate development, and construction sectors in Dubai, United Arab Emirates."
            onButtonClick={() => console.log("Navigate to Goldcrest")}
          />
        </div>
      </HeroWrapper>

      <div className="relative w-full bg-white py-16 overflow-hidden">
        {/* Background Blurs */}
        <div className="absolute top-96 left-0 h-96 w-40 bg-gradient-to-r from-secondary via-transparent to-transparent blur-[100px] md:blur-3xl z-0"></div>
        <div className="absolute right-0 bottom-20 h-96 w-40 bg-gradient-to-l from-secondary via-transparent to-transparent blur-[100px] md:blur-3xl z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-10">
          {managementData.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-start gap-8`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/3">
                <img
                  src={person.image}
                  alt={person.name}
                  className="rounded-lg shadow-lg object-cover h-[408px] w-full"
                />
                <h2 className="text-lg font-poppins font-semibold mt-4">
                  {person.name}
                </h2>
                <h3 className="text-lg font-poppins font-normal text-secondary mb-4">
                  {person.title}
                </h3>
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-2/3">
                <p className="text-justify font-poppins text-base whitespace-pre-line leading-relaxed text-TextandIcons">
                  {person.description}
                </p>
              </div>
            </motion.div>
          ))}

          <p className="text-justify font-poppins text-base whitespace-pre-line leading-relaxed text-TextandIcons">
            Multiple commercial and residential projects, including the largest
            building and state-of-the-art shopping mall Giga Mall in World Trade
            Center Islamabad, have been completed. Upon taking over his position
            in the company, the largest retail chain Carrefour was opened within
            4 months, and the complete Giga Mall was made operational within a
            record time of 9 months. Three high-rise towers of Goldcrest
            Highlife were launched in January 2021, and the grey structure was
            completed at the fastest pace in record time. To upgrade the
            lifestyle of the people of Pakistan, another iconic luxury
            residential tower of Goldcrest Views was launched in the last
            quarter of 2021 in DHA Islamabad, which is going the change the real
            estate status quo and create a good competition, compelling other
            developers to build better projects. The construction work on these
            residential towers started in the 1st quarter of 2022 and is
            touching the sky today within no time. The day and night
            construction work on these 40-storey marvel architectures is going
            to be record-breaking in the history of Pakistan.
          </p>
          <p className="text-justify font-poppins text-base whitespace-pre-line leading-relaxed text-TextandIcons">
            With Mr. Najeeb’s efforts, Giga Group gained traction worldwide with
            the expansion of Giga Mall, the largest building in the World Trade
            Center, into Giga Mall and Giga Boutique Mall through a skywalk
            bridge that is a marvel in itself when it comes to real estate
            development. Giga Boutique Mall entails a luxury outlook with a
            state-of-the-art water park on top of the building that is one of
            its kind in Pakistan. State-of-the-art mosque on top of the Giga
            Mall and its Extension is going to be the new wonder in the real
            estate sector. Under his supervision, Giga Group won two
            Presidential awards for an innovative project of Rain Water
            Harvesting, contributing towards sustainable development and
            environmental protection in Pakistan, and the Best High-rise
            Development award. Under the leadership of Najeeb Amin Pardesi, Giga
            Group has delivered 10 million square feet of area in DHA Islamabad,
            while the grey structure of 6 million square feet of area is
            completed with finishing work in progress, and 4 million square feet
            of area is under construction at the fastest speed around the clock.
            Najeeb Amin Giga’s unwavering belief in the strength of a unified
            and skilled workforce has transformed not only organizations but
            also the lives of those who work alongside him. With a keen eye for
            identifying potential, Najeeb empowers employees by providing them
            with the necessary resources and opportunities to shine. Under
            Najeeb Amin Giga’s exceptional leadership, a workforce of 3600
            passionate individuals comes together with a shared vision – to
            provide luxury and an upgraded lifestyle to their fellow citizens in
            various departments. His passionate leadership continues to guide
            Giga Group towards shaping a brighter future for Pakistan.
          </p>
          <p className="text-justify font-poppins text-base whitespace-pre-line leading-relaxed text-TextandIcons">
            Under his supervision, Giga Group won two Presidential awards for an
            innovative project of Rain Water Harvesting, contributing towards
            sustainable development and environmental protection in Pakistan,
            and the Best High-rise Development award. Under the leadership of
            Najeeb Amin Pardesi, Giga Group has delivered 10 million square feet
            of area in DHA Islamabad, while the grey structure of 6 million
            square feet of area is completed with finishing work in progress,
            and 4 million square feet of area is under construction at the
            fastest speed around the clock. Najeeb Amin Giga’s unwavering belief
            in the strength of a unified and skilled workforce has transformed
            not only organizations but also the lives of those who work
            alongside him. With a keen eye for identifying potential, Najeeb
            empowers employees by providing them with the necessary resources
            and opportunities to shine. Under Najeeb Amin Giga’s exceptional
            leadership, a workforce of 3600 passionate individuals comes
            together with a shared vision – to provide luxury and an upgraded
            lifestyle to their fellow citizens in various departments. His
            passionate leadership continues to guide Giga Group towards shaping
            a brighter future for Pakistan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
