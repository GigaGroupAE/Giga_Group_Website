import React from 'react';
import logoWhite from '../../public/logo-white.svg';
import Image from 'next/image';
import {
  AboutUs,
  certificationsPartnerships,
  Legal,
  Projects,
  QuickLinks,
  Resources,
  Services,
} from '@/src/Data/QuickLinks';
import CopyRights from './CopyRights';
import Link from 'next/link';

const Footer = () => {
  return (
    <section className="bg-[#1f4772] pt-[50]   ">
      {/* <div className="md:px-[130px] px-4 py-[50px] flex md:flex-row flex-col md:space-x-[60px]"> */}
      <div className="flex  px-6 md:flex-row  md:px-0 flex-col md:justify-around  container mx-auto  py-12 ">
        <div className=" w-[340px] space-y-[25px] flex flex-col">
          <Image src={logoWhite} alt="Giga Group" className="" w={40} height={40} />

          <p className=" font-poppins text-xs text-white font-medium">
            Giga Group is a trusted name in real estate development, delivering world-class
            residential and commercial projects with a commitment to quality, innovation, and
            customer satisfaction. Building dreams, shaping communities.
          </p>
        </div>
        <div className="   md:space-y-[50px] space-y-6 mt-4 md:mt-0">
          <div className="space-y-[15px] ">
            <h2 className="font-poppins text-white text-[16px] font-semibold">Quick Links</h2>
            {QuickLinks.map(item => {
              return (
                <div key={item?.id} className="  gap-2 flex flex-col cursor-pointer">
                  <Link
                    href={item.path}
                    className="font-poppins w-80 text-sm text-white font-medium"
                  >
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="   md:space-y-[50px] space-y-6">
          <div className="space-y-[15px] mt-8 md:mt-0">
            <h2 className="font-poppins text-white text-[16px] font-semibold">Contact Details</h2>
            {AboutUs.map(item => {
              return (
                <div key={item?.id} className="flex items-center gap-4 cursor-pointer  md:px-4 ">
                  <div className=" text-white">{item.icon}</div>
                  <h2 className="font-poppins w-80 text-sm text-white font-medium">
                    {item?.title}
                  </h2>{' '}
                  {/* Title styling */}
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
