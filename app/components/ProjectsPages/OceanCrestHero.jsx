import React from 'react'
import ButtonPrimary from '../ButtonPrimary';

const OceanCrestHero = () => {
  return (
    <div className="">
      <div className="bg-oceanCrest h-[750]    items-end flex  bg-cover ">
        <div className="  md:flex-row flex-col space-x-5 flex container  mx-auto items-end mb-12 ">
          <div className="bg-[rgb(240,240,241,0.9)] w-[95%] md:w-[500]  backdrop-blur-sm  mx-auto px-7 py-14 rounded-2xl space-y-3 ">
            <div className=" flex ">
              <p className="bg-[rgb(232,227,181)] px-5 rounded-full text-TextandIcons font-poppins text-sm">
                Coming Soon
              </p>
            </div>
            <h1 className="text-TextandIcons font-poppins text-4xl">
              <b>Ocean</b> Crest
            </h1>
            <p className="md:w-96  text-TextandIcons font-poppins text-sm">
              Great institutions are built over time, nurturing dreams and
              fostering visions that promote peaceful and inclusive societies
              for sustainable development. Giga Group is one such institution.{" "}
            </p>
          </div>

          
          <div className="bg-[rgb(173,173,172,0.7)] backdrop-blur-md w-[95%] mx-auto  md:w-[680] py-8 rounded-2xl ">
            <h1 className="text-center text-white font-poppins font-semibold text-2xl mb-2">
              Check Available Units
            </h1>

            <div className="">
              <form
                className="flex flex-col space-y-2 mx-auto items-center 
              "
              >
                <input
                  placeholder="Name"
                  className="bg-white px-3 py-2 rounded-md w-[90%] font-poppins text-TextandIcons text-sm outline-none"
                />
                <input
                  placeholder="Email Address"
                  className="bg-white px-3 py-2 rounded-md w-[90%] font-poppins text-TextandIcons text-sm outline-none"
                />
                <input
                  placeholder="Phone Number "
                  className="bg-white px-3 py-2 rounded-md w-[90%] font-poppins text-TextandIcons text-sm outline-none"
                />

                <div className="w-[90%]">
                  <ButtonPrimary title="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OceanCrestHero