import { announcementsData, recentBlogs } from "@/src/Data/AnnouncementData";
import React from "react";
import newsImage from "../../public/blog1.webp";
import searchImage from "../../public/search.webp";
import Image from "next/image";
import ButtonPrimary from "../components/ButtonPrimary";

const index = () => {
  return (
    <div className=" md:w-[90rem]  w-full bg-[#FDFDFD]  mx-auto md:px-32   pb-24 ">
      <div className="flex  md:flex-row flex-col px-3 md:px-0">
        {/* Left Container  */}
        <div className=" md:w-[75rem]  w-full ">
          {announcementsData.map((item) => {
            return (
              <div className=" w-[95%]  py-7 space-y-3">
                <Image
                  src={newsImage}
                  alt="AnnouncementImage"
                  className=" rounded-2xl h-64    object-cover"
                />

                <div className="flex space-x-2 items-center  ">
                  <p className="font-poppins font-semibold text-sm">
                    {item?.date}{" "}
                  </p>
                  <p className="font-poppins  text-sm">. {item?.author}</p>
                </div>

                <h2 className="font-poppins text-lg font-semibold text-TextandIcons">
                  {item?.title}
                </h2>
                <p className="font-poppins text-base text-TextandIcons">
                  {item?.content}
                </p>
              </div>
            );
          })}
        </div>
        {/* Right Container  */}
        <div className=" bg-[#FDFDFD] md:w-[25rem] w-[95%]  space-y-7 py-7 ">
          <div className="  space-y-5 ">
            <h2 className="font-poppins text-lg text-TextandIcons font-semibold">
              Find & Search
            </h2>
            <div className="flex items-center gap-4  ">
              <input
                placeholder="Search"
                className="w-[20rem] px-3 py-2 rounded-lg outline-none   shadow-md text-TextandIcons  font-poppins"
              />

              <Image src={searchImage} alt="Search" className="w-10 h-10 " />
            </div>
          </div>

          <div className=" py-5">
            <div className="space-y-5">
              <h2 className="font-poppins text-lg text-TextandIcons font-semibold">
                About Author
              </h2>

              <div className="flex items-center space-x-3">
                <Image
                  src={newsImage}
                  alt="AnnouncementImage"
                  className=" h-10 w-10 rounded-full    object-cover"
                />
                <h2 className="font-poppins text-sm text-TextandIcons font-semibold">
                  John Mathew
                </h2>
              </div>

              <p className="font-poppin text-TextandIcons text-sm">
                Great institutions are built over time, nurturing dreams and
                fostering visions that promote peaceful and inclusive societies
                for sustainable development.{" "}
              </p>
            </div>
          </div>

          <div className=" py-5">
            <div className="space-y-5">
              <h2 className="font-poppins text-lg text-TextandIcons font-semibold">
                Recent Blogs
              </h2>

              <div className="space-y-5">
                {recentBlogs.map((item) => {
                  return (
                    <div className="flex items-center space-x-4 ">
                      <Image
                        src={newsImage}
                        alt="AnnouncementImage"
                        className=" h-16 w-16 rounded-md    object-cover"
                      />

                      <div className="">
                        <h2 className="font-poppins text-sm text-TextandIcons font-semibold">
                          {item?.title}
                        </h2>
                        <p className="font-poppins text-xs text-TextandIcons">
                          {item?.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className=" py-5 space-y-5">
            <h2 className="font-poppins text-lg text-TextandIcons font-semibold">
              Subscribe for Newsletter
            </h2>
            <p className="font-poppins text-sm text-TextandIcons font-medium">
              Subscribe to newsletter to get an email when we post new content
            </p>

            <div className="flex items-center gap-4  ">
              <input
                placeholder="Search"
                className="w-[15.3rem] px-3 py-2 rounded-lg outline-none   shadow-md text-TextandIcons  font-poppins"
              />

              <ButtonPrimary title="Subscribe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
