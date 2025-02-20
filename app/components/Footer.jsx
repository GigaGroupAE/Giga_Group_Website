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
    <section className="bg-[#425F7D] h-[524px]">
      <div className="px-[130px] py-[50px] flex space-x-[60px]">
        {/* Details  */}
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

          {/* conatact number  */}

          <div className="font-semibold font-poppins text-xs text-white flex flex-col gap-1">
            <h2>Contact</h2>
            <h4 className="font-medium">+971 5654944812</h4>
            <h4 className="font-medium">+971 5654944812</h4>
          </div>

          {/* Emails  */}

          <div className="font-semibold font-poppins text-xs text-white flex flex-col gap-1">
            <h2>Email</h2>
            <h4 className="font-medium">contact@gigagroup.ae</h4>
            <h4 className="font-medium">sales@gigagroup.ae</h4>
            <h4 className="font-medium">info@gigagroup.ae</h4>
          </div>

          {/* Address  */}

          <div className="font-semibold font-poppins text-xs text-white flex flex-col gap-1">
            <h2>Address:</h2>
            <h4 className="font-medium">Dubai - United Arab Emirates</h4>
          </div>
        </div>
        {/* Quick Links */}
        <div className="spaec-y-[50px]  space-y-[50px]">
          <div className="space-y-[15px]">
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
          {/* Resources Links  */}

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
        {/* About Us */}
        <div className="spaec-y-[50px]   space-y-[50px]">
          <div className="space-y-[15px]">
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

          <div className="space-y-[15px] w-[130px]   relative top-8">
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
        {/* Projects */}
        <div className="spaec-y-[50px]  space-y-[50px]">
          <div className="space-y-[15px]">
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
          {/* Certifications & Partnerships */}
          <div className="space-y-[15px] relative top-8">
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
        {/* Services */}
        <div className="spaec-y-[50px]  space-y-[50px] w-[190px] ">
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
