import Image from "next/image";
import React from "react";
import about1 from "../../../public/about2.png";
import about3 from "../../../public/about1.png";
import about2 from "../../../public/about3.png";
import ButtonPrimary from "../ButtonPrimary";

const HomeAboutSeaction = () => {
  return (
    <section className="h-screen">
      {/* About Count  */}

      <div className=" w-4/5 h-32 mx-auto my-4 flex items-center justify-around">
        <div className="">
          <h2 className="font-poppins text-5xl font-bold text-TextandIcons">
            60+
          </h2>
          <p className="font-poppins font-thin text-[16px] py-2">
            Years of Excellence
          </p>
        </div>

        <div className="">
          <h2 className="font-poppins text-5xl font-bold text-TextandIcons">
            5000+
          </h2>
          <p className="font-poppins font-thin text-[16px] py-2">
            Employees around the Globe
          </p>
        </div>

        <div className="">
          <h2 className="font-poppins text-5xl font-bold text-TextandIcons">
            99.99%
          </h2>
          <p className="font-poppins font-thin text-[16px] py-2">
            Customer Satisfaction
          </p>
        </div>

        <div className="">
          <h2 className="font-poppins text-5xl font-bold text-TextandIcons">
            10000+
          </h2>
          <p className="font-poppins font-thin text-[16px] py-2">
            Years of Excellence
          </p>
        </div>
      </div>

      {/* About Images  */}

      <div className=" w-4/5 h-3/5 mx-auto flex items-center ">
        {/* left  container  */}

        <div className=" flex-1 flex-row flex items-center  ">
          <div className="flex-1  h-[350px] relative left-10 top-12">
            <Image src={about1} alt="gigagrpup" />
          </div>
          <div className="flex-1  ">
            <Image src={about2} alt="gigagrpup" />
            <Image src={about3} alt="gigagrpup" className="mt-2" />
          </div>
        </div>

        {/* right   container  */}
        <div className=" flex-1">
          <div className=" w-3/4 mx-auto">
            <div className="flex items-center gap-2  ">
              <h1 className="text-placeholderText text-sm font-poppins">
                Giga{" "}
              </h1>

              <div className="bg-secondary  w-[110px] h-0.5"></div>
            </div>
            <h1 className="font-poppins text-3xl text-TextandIcons my-3">
              About <b>Giga Group</b>
            </h1>
            <p className="descriptionText">
              Great institutions are built over time, nurturing dreams and
              fostering visions that promote peaceful and inclusive societies
              for sustainable development. Giga Group is one such institution.
              Since its inception in 1956, the company has expanded its
              footprint across the textile industry, bullion trading, real
              estate development, and construction sectors in Dubai, United Arab
              Emirates.
            </p>
            <div className="w-[120px] mt-6">
              <ButtonPrimary title="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSeaction;
