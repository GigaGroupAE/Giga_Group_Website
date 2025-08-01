import React from "react";
import logoWhite from "../../public/logo-white.svg";
import Image from "next/image";
import {
  AboutUs,
  certificationsPartnerships,
  Legal,
  Projects,
  QuickLinks,
  Resources,
  Services,
} from "@/src/Data/QuickLinks";
import CopyRights from "./CopyRights";

const Footer = () => {
  return (
    <section className="bg-[#1f4772] pt-[50]   ">
      {/* <div className="md:px-[130px] px-4 py-[50px] flex md:flex-row flex-col md:space-x-[60px]"> */}
      <div className="flex max-w-[1440px] xl:px-20  md:flex-row px-4 md:px-0 flex-col md:space-x-[60px]  container mx-auto  py-12 ">
        <div className=" w-[340px] space-y-[25px] flex flex-col">
          <Image
            src={logoWhite}
            alt="Giga Group"
            className=""
            w={40}
            height={40}
          />

          <p className=" font-poppins text-xs text-white font-medium">
            Giga Group is a trusted name in real estate development, delivering
            world-class residential and commercial projects with a commitment to
            quality, innovation, and customer satisfaction. Building dreams,
            shaping communities.
          </p>

          <div className="font-semibold font-poppins text-xs text-white flex flex-col gap-1">
            <h2>Contact</h2>
            <h4 className="font-medium">+971 5654944812</h4>
            <h4 className="font-medium">+971 5654944812</h4>
          </div>

          <div className="font-semibold font-poppins text-xs text-white flex flex-col gap-1">
            <h2>Email</h2>
            <h4 className="font-medium">contact@gigagroup.ae</h4>
            <h4 className="font-medium">sales@gigagroup.ae</h4>
            <h4 className="font-medium">info@gigagroup.ae</h4>
          </div>

          <div className="font-semibold font-poppins text-xs text-white flex flex-col gap-1">
            <h2>Address:</h2>
            <h4 className="font-medium">Dubai - United Arab Emirates</h4>
          </div>
        </div>
        <div className="   md:space-y-[50px] space-y-6 mt-4 md:mt-0">
          <div className="space-y-[15px] ">
            <h2 className="font-poppins text-white text-[16px] font-semibold">
              Quick Links
            </h2>
            {QuickLinks.map((item) => {
              return (
                <div
                  key={item?.id}
                  className="  gap-4 flex flex-col cursor-pointer"
                >
                  <h2 className="font-poppins text-xs text-white font-medium">
                    {item?.title}
                  </h2>
                </div>
              );
            })}
          </div>

          <div className="space-y-[15px] w-[120px]">
            <h2 className="font-poppins text-white text-[16px] font-semibold">
              Resources
            </h2>
            {Resources.map((item) => {
              return (
                <div
                  key={item?.id}
                  className="  gap-4 flex flex-col cursor-pointer"
                >
                  <h2 className="font-poppins text-xs text-white font-medium">
                    {item?.title}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
        <div className="   md:space-y-[50px] space-y-6">
          <div className="space-y-[15px] mt-8 md:mt-0">
            <h2 className="font-poppins text-white text-[16px] font-semibold">
              About Us
            </h2>
            {AboutUs.map((item) => {
              return (
                <div
                  key={item?.id}
                  className="  gap-4 flex flex-col  cursor-pointer"
                >
                  <h2 className="font-poppins text-xs text-white font-medium">
                    {item?.title}
                  </h2>
                </div>
              );
            })}
          </div>

          <div className="space-y-[15px] w-[130px]   relative md:top-8">
            <h2 className="font-poppins text-white text-[16px] font-semibold">
              Legal
            </h2>
            {Legal.map((item) => {
              return (
                <div
                  key={item?.id}
                  className="  gap-4 flex flex-col  cursor-pointer"
                >
                  <h2 className="font-poppins text-xs text-white font-medium">
                    {item?.title}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
        <div className="space-y-8  md:space-y-[50px]">
          <div className="space-y-[15px] mt-4 md:mt-0">
            <h2 className="font-poppins text-white text-[16px] font-semibold">
              Projects
            </h2>
            {Projects.map((item) => {
              return (
                <div
                  key={item?.id}
                  className="  gap-4 flex flex-col cursor-pointer"
                >
                  <h2 className="font-poppins text-xs text-white font-medium">
                    {item?.title}
                  </h2>
                </div>
              );
            })}
          </div>
          <div className="space-y-[15px] relative md:top-8">
            <h2 className="font-poppins text-white text-[16px] font-semibold">
              Certifications & Partnerships
            </h2>
            {certificationsPartnerships.map((item) => {
              return (
                <div
                  key={item?.id}
                  className="  gap-4 flex flex-col cursor-pointer"
                >
                  <h2 className="font-poppins text-xs text-white font-medium">
                    {item?.title}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
        <div className="spaec-y-[50px]  space-y-[50px] w-[190px]  mt-8 md:mt-0">
          <div className="space-y-[15px]">
            <h2 className="font-poppins text-white text-[16px] font-semibold">
              Services
            </h2>
            {Services.map((item) => {
              return (
                <div
                  key={item?.id}
                  className="  gap-4 flex flex-col cursor-pointer"
                >
                  <h2 className="font-poppins text-xs text-white font-medium">
                    {item?.title}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <CopyRights />
    </section>
  );
};

export default Footer;
