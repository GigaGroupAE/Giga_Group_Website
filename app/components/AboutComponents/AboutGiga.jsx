import React from "react";
import GigaComponent from "../GigaComponent";
import ButtonPrimary from "../ButtonPrimary";
import giga1 from "../../../public/aboutGiga1.webp";
import giga2 from "../../../public/aboutGiga2.webp";
import giga3 from "../../../public/aboutGiga3.webp";
import giga4 from "../../../public/aboutGiga4.webp";
import giga5 from "../../../public/aboutGiga5.webp";
import Image from "next/image";

// md:py-[120px] py-5 md:px-[80px] px-[8] flex md:flex-row flex-col items-center md:space-x-28
const AboutGiga = () => {
  return (
    <div className="bg-white/70  backdrop-blur-[200px] ">
      <div className="bg-secondary h-60 -mt-60 mx-auto md:ml-96 blur-[200px] w-60   rounded-full absolute"></div>
      <div className="flex space-y-12 md:space-y-0 md:flex-row flex-col container xl:px-8  mx-auto items-center justify-between ">
        <div className="space-y-4">
          <GigaComponent />

          <h2 className="font-poppins text-TextandIcons font-normal text-[35px]">
            About <b>Giga Group</b>
          </h2>
          <p className="w-[350px] descriptionText">
            Since 1956, Giga Group has grown into a global institution,
            committed to fostering inclusive growth and sustainable development.
            With strong roots in the textile industry, the company has expanded
            into bullion trading, real estate, and construction. Today, Giga
            Group continues to shape modern skylines across Dubai and the UAE
            with a legacy of innovation and integrity.
          </p>

          <div className="md:flex ">
            <ButtonPrimary title="Learn More" />
          </div>
        </div>

        <div className="flex md:flex-row px-6 flex-col md:items-center md:gap-6 ">
          <div className="flex flex-col items-center space-y-4">
            <div className="md:w-[26rem] w-[23rem] h-[350px] relative rounded-2xl overflow-hidden">
              <Image
                src={giga1}
                alt="Giga Group Image 1"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="md:w-[26rem] w-[23rem] h-[200px] relative rounded-2xl overflow-hidden">
              <Image
                src={giga2}
                alt="Giga Group Image 2"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="flex flex-col my-8 md:my-0 items-center space-y-4">
            <div className="md:w-[22rem] bg-indigo-700 w-full h-[200px] relative rounded-2xl overflow-hidden">
              <Image
                src={giga3}
                alt="Giga Group Image 1"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="md:w-[22rem] w-full h-[139px] relative rounded-2xl overflow-hidden">
              <Image
                src={giga4}
                alt="Giga Group Image 2"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="md:w-[22rem] w-full h-[200px] relative rounded-2xl overflow-hidden">
              <Image
                src={giga5}
                alt="Giga Group Image 2"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGiga;
