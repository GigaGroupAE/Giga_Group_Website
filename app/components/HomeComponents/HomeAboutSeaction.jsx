import Image from "next/image";
import React from "react";
import about1 from "../../../public/about2.png";
import about3 from "../../../public/about1.png";
import about2 from "../../../public/about3.png";
import ButtonPrimary from "../ButtonPrimary";

const HomeAboutSeaction = () => {
  return (
    <section className="">
      {/* About Count  */}

      <div className=" md:px-[150] px-4    h-[249] mx-auto     flex md:flex-row flex-col md:items-center justify-center  md:space-x-[150px] ">
        <div className="flex flex-1   gap-16 md:justify-between bg-indigo-400nn items-center  px-4">
          <div className="">
            <h2 className="headingCount ">60+</h2>
            <p className="countSubHeading">Years of Excellence</p>
          </div>

          <div className="">
            <h2 className="headingCount ">5000+</h2>
            <p className="countSubHeading">Employees around the Globe</p>
          </div>
        </div>

        <div className="flex flex-1  gap-16  md:justify-between items-center   px-4">
          <div className="">
            <h2 className="headingCount ">99.99%</h2>
            <p className="countSubHeading">Customer Satisfaction</p>
          </div>

          <div className="">
            <h2 className="headingCount ">10000+</h2>
            <p className="countSubHeading">Years of Excellence</p>
          </div>
        </div>
      </div>

      {/* About Images  */}

      <div className=" w-4/5 h-[600]  mx-auto flex md:flex-row flex-col items-center ">
        {/* left  container  */}

        <div className=" flex-1 flex-row flex items-center  ">
          <div className="flex-1  h-[350px] relative md:left-10 right-4 md:right-0 md:top-12">
            <Image src={about1} alt="gigagrpup" className=" h-[350px]" />
          </div>
          <div className="flex-1  ">
            <Image src={about2} alt="gigagrpup" />
            <Image src={about3} alt="gigagrpup" className="mt-2" />
          </div>
        </div>

        {/* right   container  */}
        <div className=" flex-1  ">
          <div className=" md:w-3/4 w-[95%] md:mx-auto  mt-14 md:mt-0">
            <div className="flex items-center gap-2  ">
              <h1 className="text-placeholderText text-sm font-poppins">
                Giga
              </h1>

              <div className="bg-secondary  w-[110px] h-0.5"></div>
            </div>
            <h1 className="font-poppins text-3xl text-TextandIcons my-3 ">
              About <b>Giga Group</b>
            </h1>
            <p className="descriptionText  relative ">
              Great institutions are built over time, nurturing dreams and
              fostering visions that promote peaceful and inclusive societies
              for sustainable development. Giga Group is one such institution.
              Since its inception in 1956, the company has expanded its
              footprint across the textile industry, bullion trading, real
              estate development, and construction sectors in Dubai, United Arab
              Emirates.
            </p>
            <div className="flex mt-6">
              <ButtonPrimary title="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSeaction;
