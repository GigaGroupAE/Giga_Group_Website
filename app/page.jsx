"use client";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import heroImage from "../public/HeroImage.png";
import ButtonPrimary from "./components/ButtonPrimary";

export default function Home() {
  return (
    <main className="">
      <Navbar />

      {/* Hero Images  */}
      <section className="bg-heroImage  h-[91vh] object-contain bg-cover md:items-center md:justify-center flex ">
        {/* center container  */}

        <div className=" w-[90%] md:w-3/4 h-2/3  mt-6 md:mt-0 mx-auto flex flex-col  items-center ">
          <h1 className="font-poppins text-TextandIcons text-5xl font-thin sm:text-center  text-center">
            <b className="font-bold font-poppins">Start </b>your search today
          </h1>
          <p className="font-poppins text-sm text-TextandIcons w-[95%] md:w-[55%] text-center my-7">
            In just two decades, Dubai has envisioned, built, and delivered
            extraordinary state-of-the-art real estate projects that set
            benchmarks not only in the region but also globally.
          </p>

          {/* form submit  */}
          <div className="backdrop-blur-sm w-full h-[100%]   md:h-2/3 shadow-lg bg-opacity-5  rounded-3xl  bg-white/40  ">
            <form action="">
              <div className=" flex md:flex-row flex-col   md:items-center  w-[90%]  mx-auto mt-10 gap-4 ">
                <select className="md:w-[225px] w-[100%] p-3 rounded-lg  text-TextandIcons  bg-white  border border-white/40 outline-none ">
                  <option className="font-poppins text-TextandIcons text-sm font-normal">
                    Select Project
                  </option>
                </select>

                <input
                  type="text"
                  placeholder="Name"
                  className="md:w-[225px] w-[100%] rounded-md bg-gray-100 px-4 py-2 font-poppins text-placeholderText "
                />
                <input
                  type="text"
                  placeholder="Email Address"
                  className="md:w-[225px] w-[100%] rounded-md bg-gray-100 px-4 py-2 font-poppins text-placeholderText "
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="md:w-[225px] w-[100%] rounded-md bg-gray-100 px-4 py-2 font-poppins text-placeholderText "
                />
              </div>

              <div className=" w-[90%]    mx-auto md:mt-10 mt-5">
                <textarea
                  name=""
                  placeholder="Type your message "
                  id=""
                  className="w-full  bg-gray-100 px-4 h-24 rounded-md shadow-md py-3 "
                ></textarea>
              </div>

              <div className="w-[90%]  mx-auto ">
                <div className="w-[150px] mt-5 mb-6">
                  <ButtonPrimary title="Submit your query" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
