"use client";
import { NavbarData } from "@/src/Data/NavbarData";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const MobileNav = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [subDropdownVisible, setSubDropdownVisible] = useState(null);
  const [isMobileNav, setisMobileNav] = useState(false);
  return (
    <div className=" bg-[rgb(185,182,182,0.5)]  h-screen w-full  absolute">
      <div className="bg-white w-4/5 h-full px-4 py-4">
        {NavbarData.map((item) => (
          <div key={item.id} className="relative  py-3 items-center gap-2">
            <div className=" flex justify-between">
              <h2
                onClick={() =>
                  item.title === "PROJECTS" &&
                  setDropdownVisible(!dropdownVisible)
                }
                className="text-TextandIcons text-sm font-poppins hover:text-secondary"
              >
                {item.title}
              </h2>
              {item.title === "PROJECTS" && <IoIosArrowDown size={14} />}
            </div>

            {/* Dropdown for PROJECTS */}
            {item.title === "PROJECTS" && dropdownVisible && (
              <div className=" bg-white  ">
                {["Residential Projects", "Commercial Projects"].map(
                  (subItem, index) => (
                    <div key={index}>
                      <div className=" flex justify-between items-center  text-TextandIcons hover:text-#61646A hover:bg-[rgba(250,247,229)]">
                        <button
                          onClick={() =>
                            setSubDropdownVisible(
                              subDropdownVisible === subItem ? null : subItem
                            )
                          }
                          className="font-poppins  py-3 text-sm text-TextandIcons hover:text-#61646A "
                        >
                          {subItem}
                        </button>
                        <MdKeyboardArrowRight size={14} />
                      </div>
                      {/* Nested Sub-dropdown */}
                      {subDropdownVisible === subItem && (
                        <div className="  w-52 bg-white">
                          <a
                            href="#"
                            className="block py-3 text-sm text-TextandIcons  hover:bg-[rgba(250,247,229)] px-4"
                          >
                            Ocean Crest Residence
                          </a>
                          <a
                            href="#"
                            className="block py-3 text-sm text-TextandIcons  hover:bg-[rgba(250,247,229)] px-4"
                          >
                            Goldcrest Views 1
                          </a>
                          <a
                            href="#"
                            className="block py-3 text-sm text-TextandIcons  hover:bg-[rgba(250,247,229)] px-4"
                          >
                            Goldcrest Views 2
                          </a>
                          <a
                            href="#"
                            className="block py-3 text-sm text-TextandIcons  hover:bg-[rgba(250,247,229)] px-4"
                          >
                            Goldcrest Executive
                          </a>
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
