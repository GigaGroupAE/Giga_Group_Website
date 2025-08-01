import React from "react";
import ButtonPrimary from "../ButtonPrimary";
import pin from "../../../public/pin.svg";
import Image from "next/image";

const HomeMap = () => {
  return (
    <section className="flex my-[70] md:my-0 container  mx-auto   ">
      <div className="flex items-center  md:flex-row flex-col  justify-center w-full mx-auto    ">
        {/* Left Container */}
        <div className=" px-4 flex-2 flex md:w-[110%]     mr-10 ">
          <div className=" px-4  mx-auto   ">
            <h1 className="font-poppins text-4xl  w-4/5  font-normal text-TextandIcons">
              Welcome to <b> Ocean</b> Crest Residence
            </h1>
            <p className="font-poppins text-TextandIcons mt-5 ">
              Pearl Bliss Residence by Giga Group offers a harmonious blend of
              luxury, convenience, and vibrant surroundings. Strategically
              located in the heart of Dubai, this residential project ensures
              unparalleled connectivity to healthcare, education, shopping, and
              iconic landmarks, promising a lifestyle of elegance and ease.
            </p>

            <div className="md:flex block my-4">
              <ButtonPrimary title="Learn More" />
            </div>
          </div>
        </div>
        <div className="flex-2 flex bg-contain   bg-bgmap h-[700px] object-contain  w-full">
          <div className=" flex items-end md:items-center md:justify-center md:flex-col flex-row md:gap-72">
            <div className="bg-[rgba(250,248,229)] rounded-full w-28 h-28 flex items-center justify-center">
              <h1 className="text-TextandIcons font-bold text-2xl">2.5</h1>
              <p className="">KM</p>
            </div>
            <div className="bg-[rgba(250,248,229)] md:left-12 left-8  relative md:bottom-10  rounded-full w-28 h-28 flex items-center justify-center">
              <h1 className="text-TextandIcons font-bold text-2xl">0.5</h1>
              <p className="">KM</p>
            </div>
          </div>

          <div className=" relative  md:self-end self-baseline  -bottom-[620px] md:-bottom-0   md:-right-80   -right-14  ">
            <div className="bg-[rgba(250,248,229)] rounded-full w-28 h-28 flex items-center justify-center relative bottom-10">
              <h1 className="text-TextandIcons font-bold text-2xl">10</h1>
              <p className="">KM</p>
            </div>
          </div>

          <div className=" mx-auto md:my-auto md:ml-10 md:mt-64 mt-32   -ml-44  ">
            <Image src={pin} alt="Location " />
            <div className="bg-white rounded-full my-2">
              <p className="text-TextandIcons font-poppins px-4 py-1 font-semibold text-sm">
                25°17'48"N 55°19'02"E
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMap;
