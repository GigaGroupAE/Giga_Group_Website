import Image from "next/image";
import React from "react";
import about1 from "../../../public/about2.webp";
import about3 from "../../../public/ocean.webp";
import about2 from "../../../public/about3.webp";
import ButtonPrimary from "../ButtonPrimary";
import beach from "../../../public/beach.webp";

const HomeAboutSeaction = () => {
  return (
    <section className=" max-w-[1440px] px-2 md:px-0   mx-auto">
      {/* About Count  */}
      <div className="bg-[#FEFEFE]  max-w-[1440px] xl:px-20  ">
        <div className="container mx-auto">
          <div className="px-4  md:px-0 py-20    mx-auto     flex md:flex-row flex-col md:items-center justify-center  md:space-x-[150px] space-y-5   ">
            <div className="flex flex-1   gap-16 md:justify-between  items-center  ">
              <div className="">
                <h2 className="headingCount ">60+</h2>
                <p className="countSubHeading">Years of Excellence</p>
              </div>

              <div className="">
                <h2 className="headingCount ">5000+</h2>
                <p className="countSubHeading">Employees around the Globe</p>
              </div>
            </div>

            <div className="flex flex-1  gap-16  md:justify-between items-center   ">
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
        </div>
      </div>

      {/* About Images  */}

      <div className=" bg-white max-w-[1440px] xl:px-20 ">
        <div className=" container px-4 py-28   md:px-0     mx-auto flex md:flex-row flex-col items-center ">
          {/* left  container  */}

          <div className=" flex-1 flex-row flex items-center gap-3  ">
            <div className="flex-1  h-[350px] relative  top-6 md:top-14">
              <Image src={beach} alt="gigagrpup" className=" h-[350px]" />
            </div>
            <div className="flex-1  ">
              <Image src={about2} alt="gigagrpup" />
              <Image src={about3} alt="gigagrpup" className="mt-2 md:w-80 " />
            </div>
          </div>

          {/* right   container  */}
          <div className=" flex-1  ">
            <div className=" md:w-3/4 w-full md:mx-auto  mt-14 md:mt-0">
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
                estate development, and construction sectors in Dubai, United
                Arab Emirates.
              </p>
              <div className=" md:flex mx-auto  mt-6">
                <ButtonPrimary title="Learn More" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSeaction;
