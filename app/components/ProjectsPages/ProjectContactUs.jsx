"use client";

import React from "react";
import ButtonPrimary from "../ButtonPrimary";

const ProjectContactUs = ({ contactUsdec, contactUsTitle }) => {
  return (
    <section className="bg-gradient-to-b from-white via-[#fdfcea] to-[#fdfcea] py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {contactUsTitle}
          </h2>
          <p className="mt-6 text-gray-600 text-base leading-relaxed">
            {contactUsdec}
          </p>
        </div>

        <div className=" p-6 sm:p-8 w-full">
          <h3 className="text-xl text-center md:text-2xl font-bold text-gray-900 mb-2">
            Contact <span className="font-semibold">Us</span>
          </h3>
          <p className="text-gray-600 text-center text-sm mb-6">
            Let us know how we may help you!
          </p>

          <form className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 border-0 border-b-2 border-yellow-100 focus:border-yellow-400 focus:outline-none placeholder-gray-400 py-3"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 border-0 border-b-2 border-yellow-100 focus:border-yellow-400 focus:outline-none placeholder-gray-400 py-3"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border-0 border-b-2 border-yellow-100 focus:border-yellow-400 focus:outline-none placeholder-gray-400 py-2"
              />
            </div>
            <div>
              <textarea
                rows="4"
                placeholder="Type your message"
                className="w-full px-4 border-0 border-b-2 border-yellow-100 focus:border-yellow-400 focus:outline-none placeholder-gray-400 py-3"
              ></textarea>
            </div>
            <div>
              <ButtonPrimary title="Submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProjectContactUs;
