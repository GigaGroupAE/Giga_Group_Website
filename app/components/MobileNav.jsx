"use client";
import { NavbarData } from "@/src/Data/NavbarData";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

const MobileNav = ({ onClose }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [subDropdownVisible, setSubDropdownVisible] = useState(null);

  const handleNavigation = () => {
    onClose();
    console.log("clicl");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
      <div className="bg-white w-4/5 h-full px-4 py-4 relative shadow-lg">
        <div
          onClick={() => console.log("handler")}
          className="absolute top-4  right-4 text-gray-600 hover:text-black"
        >
          <IoClose size={24} />
        </div>

        {NavbarData.map((item) => (
          <div key={item.id} className="relative py-3">
            <div className="flex justify-between items-center">
              <Link
                href={item?.link}
                onClick={handleNavigation}
                className="text-gray-800 text-sm font-medium hover:text-secondary"
              >
                {item.title}
              </Link>

              {item.title === "PROJECTS" && (
                <button onClick={() => setDropdownVisible(!dropdownVisible)}>
                  <IoIosArrowDown
                    size={14}
                    className={`${
                      dropdownVisible ? "rotate-180" : ""
                    } transition-transform`}
                  />
                </button>
              )}
            </div>

            {item.title === "PROJECTS" && dropdownVisible && (
              <div className="bg-white border rounded-md mt-2 shadow-md">
                {["Residential Projects", "Commercial Projects"].map(
                  (subItem) => (
                    <div key={subItem} className="group">
                      <button
                        onClick={() =>
                          setSubDropdownVisible(
                            subDropdownVisible === subItem ? null : subItem
                          )
                        }
                        className="w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-100 flex justify-between items-center"
                      >
                        {subItem}
                        <MdKeyboardArrowRight size={14} />
                      </button>

                      {subDropdownVisible === subItem && (
                        <div className="pl-6 border-l">
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
                              className="block py-2 px-4 text-gray-600 hover:bg-gray-100"
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
      </div>
    </div>
  );
};

export default MobileNav;
