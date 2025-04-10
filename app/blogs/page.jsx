import {
  investmentPost,
  posts,
  recentBlogs,
} from "@/src/Data/AnnouncementData";
import Image from "next/image";
import React from "react";
import newsImage from "../../public/blog1.webp";
import FrequentlyQA from "../components/HomeComponents/FrequentlyQA";

const page = () => {
  return (
    <div className="">
      <div className="">
        <div className="container flex items-center justify-between flex-col md:flex-row mx-auto  ">
          <div className="">
            <div className=" py-16 justify-between">
              <Image
                src={newsImage}
                alt="background image"
                className="bg-indigo-200  w-[50rem] rounded-2xl h-[25rem]"
              />
            </div>
          </div>
          <div className=" bg-[#FDFDFD] md:w-[25rem] w-[95%]  space-y-7 py-7 ">
            <div className=" py-5">
              <div className="space-y-5">
                <div className="space-y-5">
                  {recentBlogs.map((item, index) => {
                    return (
                      <div className="flex items-center space-x-4 " key={index}>
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
          </div>
        </div>

        {/* blogs Post  */}

        <div className=" py-10 mx-auto container">
          <div className="flex justify-between  items-center ">
            <h2 className="subHeading">Recent Posts</h2>

            <div className=" px-5 py-1 text-center rounded-full bg-greyBG">
              <p className="font-poppins text-center text-xs text-TextandIcons ">
                View all
              </p>
            </div>
          </div>

          <div className=" py-12 flex md:flex-row flex-col">
            {posts.map((item, index) => {
              return (
                <div className=" w-[95%]  py-7 space-y-3 " key={index}>
                  <Image
                    src={newsImage}
                    alt="AnnouncementImage"
                    className=" rounded-2xl h-80 w-96    object-cover"
                  />

                  <div className="flex space-x-2 items-center  ">
                    <p className="font-poppins text-placeholderText font-medium text-sm">
                      {item?.date}{" "}
                    </p>
                  </div>

                  <h2 className="font-poppins text-lg font-semibold text-TextandIcons">
                    {item?.title}
                  </h2>
                  <p className="font-poppins text-xs text-TextandIcons">
                    {item?.content}
                  </p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src={newsImage}
                      alt="AnnouncementImage"
                      className=" h-6 w-6 rounded-full    object-cover"
                    />
                    <h2 className="font-poppins text-xs text-TextandIcons font-semibold">
                      John Mathew
                    </h2>
                  </div>
                </div>
              );
            })}

            <div className="bg-secondary h-52 blur-[200px] w-52 -ml-52 mt-80 rounded-full absolute  "></div>
          </div>
        </div>

        {/* Investment  Post  */}

        <div className=" py-10 mx-auto container">
          <div className="flex justify-between  items-center ">
            <h2 className="subHeading">Investments Posts</h2>

            <div className=" px-5 py-1 text-center rounded-full bg-greyBG">
              <p className="font-poppins text-center text-xs text-TextandIcons ">
                View all
              </p>
            </div>
          </div>

          <div className=" py-12 flex md:flex-row flex-col">
            {investmentPost.map((item, index) => {
              return (
                <div className=" w-[95%]  py-7 space-y-3 " key={index}>
                  <Image
                    src={newsImage}
                    alt="AnnouncementImage"
                    className=" rounded-2xl h-80 w-72    object-cover"
                  />

                  <div className="flex space-x-2 items-center  ">
                    <p className="font-poppins text-placeholderText font-medium text-sm">
                      {item?.date}{" "}
                    </p>
                  </div>

                  <h2 className="font-poppins text-lg font-semibold text-TextandIcons">
                    {item?.title}
                  </h2>
                  <p className="font-poppins text-xs text-TextandIcons">
                    {item?.content}
                  </p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src={newsImage}
                      alt="AnnouncementImage"
                      className=" h-6 w-6 rounded-full    object-cover"
                    />
                    <h2 className="font-poppins text-xs text-TextandIcons font-semibold">
                      John Mathew
                    </h2>
                  </div>
                </div>
              );
            })}
            <div className="bg-white/50  mt-96  -z-40  container  flex justify-end h-72 absolute">
              <div className="bg-secondary h-60   w-60 blur-[200px]   -mr-20 rounded-full absolute  "></div>
            </div>
          </div>
        </div>

        {/* Business Posts Post  */}

        <div className=" py-10 mx-auto container">
          <div className="flex justify-between  items-center ">
            <h2 className="subHeading">Business Posts</h2>

            <div className=" px-5 py-1 text-center rounded-full bg-greyBG">
              <p className="font-poppins text-center text-xs text-TextandIcons ">
                View all
              </p>
            </div>
          </div>

          <div className=" py-12 flex md:flex-row flex-col">
            {investmentPost.map((item, index) => {
              return (
                <div className=" w-[95%]  py-7 space-y-3 " key={index}>
                  <Image
                    src={newsImage}
                    alt="AnnouncementImage"
                    className=" rounded-2xl h-80 w-72    object-cover"
                  />

                  <div className="flex space-x-2 items-center  ">
                    <p className="font-poppins text-placeholderText font-medium text-sm">
                      {item?.date}{" "}
                    </p>
                  </div>

                  <h2 className="font-poppins text-lg font-semibold text-TextandIcons">
                    {item?.title}
                  </h2>
                  <p className="font-poppins text-xs text-TextandIcons">
                    {item?.content}
                  </p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src={newsImage}
                      alt="AnnouncementImage"
                      className=" h-6 w-6 rounded-full    object-cover"
                    />
                    <h2 className="font-poppins text-xs text-TextandIcons font-semibold">
                      John Mathew
                    </h2>
                  </div>
                </div>
              );
            })}
            <div className="bg-white/50  mt-96  -z-40  container  flex justify-center h-72 absolute">
              <div className="bg-secondary h-60   w-60 blur-[200px]   -mr-20 rounded-full absolute  "></div>
            </div>
          </div>
        </div>

        <FrequentlyQA />
      </div>
    </div>
  );
};

export default page;
