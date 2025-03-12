import React from "react";
import car from "../../../public/car.webp";
import Image from "next/image";
import beach from "../../../public/beach.webp";
import shoopingMall from "../../../public/ShoppingMall.svg";

const ExcellenceVision = () => {
  return (
    <section className="bg-[rgba(255,254,253)]  my-20 relative z-50 ">
      <div className="md:w-4/6 w-4/6 mx-auto  mb-8 ">
        <h1 className="font-poppins text-TextandIcons text-5xl font-thin   md:text-center">
          Experience the <b>Vision of Excellence</b>
        </h1>
        <p className="descriptionText text-center">
          In just two decades, Dubai has envisioned, built, and delivered
          extraordinary state-of-the-art real estate projects that set
          benchmarks not only in the region but also globally.
        </p>
      </div>

      {/* seaction images  */}

      <div className="  gap-4 flex md:flex-row flex-col container mx-auto  ">
        <div className=" w-11/12 md:w-[37rem] ">
          <h1 className="font-poppins text-TextandIcons text-[17px] py-2">
            <b className="bold">Recreational </b> Areas
          </h1>

          <Image
            src={car}
            alt="Recreational Areas"
            className="   bg-repeat-round h-[40rem] "
          />
        </div>
        <div className="  ">
          <div className="">
            <Image
              src={beach}
              alt="beaches"
              className="h-[20rem] bg-contain md:w-[300px]     bg-repeat-round"
            />

            <h1 className="font-poppins text-TextandIcons font-semibold text-[17px] py-2">
              Beaches
            </h1>
          </div>

          <div className="">
            <Image
              src={beach}
              alt="beaches"
              className="h-[20rem] bg-contain md:w-[300px]    bg-repeat-round"
            />

            <h1 className="font-poppins text-TextandIcons font-semibold text-[17px] py-2">
              Sports Clubs
            </h1>
          </div>
        </div>
        <div className=" h-4/5   ">
          <div className=" ">
            <h1 className="font-poppins text-TextandIcons text-[17px] py-2">
              <b className="bold">Shopping </b> Malls
            </h1>

            <Image
              src={shoopingMall}
              alt="Recreational Areas"
              className=" bg-contain  h-[40rem]  w-[350px]  bg-repeat-round"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceVision;
