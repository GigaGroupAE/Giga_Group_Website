import React from "react";
import ButtonPrimary from "../ButtonPrimary";
import pin from "../../../public/pin.svg";
import Image from "next/image";

const HomeMap = () => {
  return (
    <section className="h-[700px]  flex  ">
      <div className="flex items-center   justify-center w-full mx-auto  ">
        {/* Left Container */}
        <div className="  flex-2 flex w-[110%]   justify-end mr-10 ">
          <div className=" w-4/6  ">
            <h1 className="font-poppins text-[40px] w-2/4  font-normal text-TextandIcons">
              Welcome to <b> Ocean</b> Crest Residence
            </h1>
            <p className="font-poppins text-TextandIcons w-[90%] ">
              Pearl Bliss Residence by Giga Group offers a harmonious blend of
              luxury, convenience, and vibrant surroundings. Strategically
              located in the heart of Dubai, this residential project ensures
              unparalleled connectivity to healthcare, education, shopping, and
              iconic landmarks, promising a lifestyle of elegance and ease.
            </p>

            <div className="flex my-4">
              <ButtonPrimary title="Learn More" />
            </div>
          </div>
        </div>
        {/* Right Container  */}
        <div className="   flex-2 flex bg-contain   bg-bgmap h-[700px] object-contain  w-full">
          {/* container left  */}
          <div className=" flex items-center justify-center flex-col gap-72">
            <div className="bg-[rgba(250,248,229)] rounded-full w-28 h-28 flex items-center justify-center">
              <h1 className="text-TextandIcons font-bold text-2xl">2.5</h1>
              <p className="">KM</p>
            </div>
            <div className="bg-[rgba(250,248,229)] left-12  relative bottom-10  rounded-full w-28 h-28 flex items-center justify-center">
              <h1 className="text-TextandIcons font-bold text-2xl">0.5</h1>
              <p className="">KM</p>
            </div>
          </div>

          {/* container bottom  */}

          <div className=" relative  self-end  -right-96   ">
            <div className="bg-[rgba(250,248,229)] rounded-full w-28 h-28 flex items-center justify-center relative bottom-10">
              <h1 className="text-TextandIcons font-bold text-2xl">10</h1>
              <p className="">KM</p>
            </div>
          </div>

          {/* pin  */}

          <div className=" mx-auto my-auto ml-10 mt-64  ">
            <Image src={pin} alt="Location " />
            <div className="bg-white rounded-full my-2">
              <p className="text-TextandIcons font-poppins px-4 py-1 font-semibold text-sm">25°17'48"N 55°19'02"E</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMap;
