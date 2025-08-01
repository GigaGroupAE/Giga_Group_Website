"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NavbarData } from "@/src/Data/NavbarData";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const MobileNav = ({ onClose }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [subDropdownVisible, setSubDropdownVisible] = useState(null);

  const handleNavigation = () => {
    onClose();
  };

  return (
    <div className=" inset-0   relative z-50 bg-black bg-opacity-60 flex">
      <div className="bg-white w-4/5 max-w-sm h-full px-6 py-6 shadow-2xl relative overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="absolute top-4 right-4 text-gray-600 hover:text-black transition"
        >
          <IoClose size={26} />
        </button>

        <nav className="mt-8 space-y-6">
          {NavbarData.map((item) => (
            <div key={item.id} className="space-y-1">
              <div className="flex justify-between items-center">
                <Link
                  href={item.link}
                  onClick={handleNavigation}
                  className="text-base font-semibold text-gray-900 hover:text-yellow-600 transition"
                >
                  {item.title}
                </Link>

                {item.title === "PROJECTS" && (
                  <button
                    onClick={() => setDropdownVisible(!dropdownVisible)}
                    aria-label="Toggle Projects"
                    className="text-gray-700"
                  >
                    <IoIosArrowDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        dropdownVisible ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {item.title === "PROJECTS" && dropdownVisible && (
                <div className="ml-3 mt-2 space-y-3 border-l border-gray-200 pl-3">
                  {["Residential Projects", "Commercial Projects"].map(
                    (subItem) => (
                      <div key={subItem}>
                        <button
                          onClick={() =>
                            setSubDropdownVisible(
                              subDropdownVisible === subItem ? null : subItem
                            )
                          }
                          className="flex justify-between w-full text-sm text-gray-700 hover:text-black transition items-center"
                        >
                          {subItem}
                          <MdKeyboardArrowRight size={16} />
                        </button>

                        {subDropdownVisible === subItem && (
                          <div className="mt-2 space-y-1 ml-3 border-l border-gray-100 pl-3">
                            {[
                              "Ocean Crest Residence",
                              "Goldcrest Views 1",
                              "Goldcrest Views 2",
                              "Goldcrest Executive",
                            ].map((project) => (
                              <Link
                                key={project}
                                href="#"
                                onClick={handleNavigation}
                                className="block text-sm text-gray-600 hover:text-black transition"
                              >
                                {project}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
