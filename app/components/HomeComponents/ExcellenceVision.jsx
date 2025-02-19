import React from "react";
import car from "../../../public/car.png";
import Image from "next/image";
import beach from "../../../public/beach.png";
import shoopingMall from "../../../public/ShoppingMall.png";

const ExcellenceVision = () => {
  return (
    <section className="bg-[rgba(255,254,253)]  my-20 ">
      <div className="w-4/6 mx-auto ">
        <h1 className="font-poppins text-TextandIcons text-5xl font-thin sm:text-center  text-center">
          Experience the <b>Vision of Excellence</b>
        </h1>
        <p className="descriptionText">
          In just two decades, Dubai has envisioned, built, and delivered
          extraordinary state-of-the-art real estate projects that set
          benchmarks not only in the region but also globally.
        </p>
      </div>

      {/* seaction images  */}

      <div className=" gap-6 flex flex-row container mx-auto  ">
        <div className="w-[35%] ">
          <h1 className="font-poppins text-TextandIcons text-[17px] py-2">
            <b className="bold">Recreational </b> Areas
          </h1>

          <Image
            src={car}
            alt="Recreational Areas"
            className=" h-[500px] bg-contain   bg-repeat-round"
          />
        </div>
        <div className=" w-[30%] ">
          <div className="">
            <Image
              src={beach}
              alt="beaches"
              className="h-[250px] bg-contain w-[300px]   bg-repeat-round"
            />

            <h1 className="font-poppins text-TextandIcons font-semibold text-[17px] py-2">
              Beaches
            </h1>
          </div>

          <div className="">
            <Image
              src={beach}
              alt="beaches"
              className=" h-[250px] bg-contain w-[300px]   bg-repeat-round"
            />

            <h1 className="font-poppins text-TextandIcons font-semibold text-[17px] py-2">
              Sports Clubs
            </h1>
          </div>
        </div>
        <div className="w-[30%] ">
          <div className=" ">
            <h1 className="font-poppins text-TextandIcons text-[17px] py-2">
              <b className="bold">Shopping </b> Malls
            </h1>

            <Image
              src={shoopingMall}
              alt="Recreational Areas"
              className=" h-[500px] bg-contain   bg-repeat-round"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceVision;
