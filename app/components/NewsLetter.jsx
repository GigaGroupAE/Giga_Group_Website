import React from "react";
import ButtonPrimary from "./ButtonPrimary";

const NewsLetter = () => {
  return (
    <section className="  bg-gradient-to-tr from-[#F8F7EB] to-white flex flex-row  items-center py-[80px]  ">
      <div className="md:max-w-[1440px] xl:px-20  w-11/12 mx-auto flex  md:flex-row flex-col items-center  ">
        <div className=" w-11/12">
          <h2 className="font-poppins text-TextandIcons font-medium text-[30px]">
            Stay Updated with
          </h2>

          <h2 className="font-poppins text-TextandIcons font-semibold text-[30px]">
            Giga Group
          </h2>

          <p className="font-poppins text-TextandIcons text-xs">
            Subscribe to our newsletter and be the first to know about our
            latest projects, exclusive offers, and industry insights. Your
            gateway to premium real estate opportunities awaits!
          </p>
        </div>
        <div className="md:w-[75%]  w-[95%] md:ml-10  py-16   shadow-md bg-opacity-40 backdrop-blur-md      rounded-2xl flex flex-col justify-center px-6">
          <h2 className="font-poppins text-TextandIcons text-[25px] font-medium">
            <b className="font-semibold">Newsletter</b> Form
          </h2>
          <div className="bg-secondary w-[110px] h-[2px] my-3"></div>

          {/* input forms  */}

          <div className=" gap-2 flex md:flex-row flex-col items-center space-y-4 md:space-y-0  ">
            <input
              type="text"
              placeholder="Name"
              className="    rounded-md py-2 px-4  md:w-[233px] w-full outline-none "
            />
            <input
              type="text"
              placeholder="Email Address"
              className="    rounded-md py-2 px-4  mx-2 md:w-[233px] w-full  outline-none "
            />

            <div className=" w-full md:flex">
              <ButtonPrimary title="Subscribe" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
