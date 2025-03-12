"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Importing Link component from next/link
import { NavbarData } from "../../src/Data/NavbarData";
import logo from "../../public/giga-group-logo.svg";
import logoMobile from "../../public/LogoMobile.svg";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import ButtonPrimary from "./ButtonPrimary";
import { CiMenuBurger } from "react-icons/ci";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [subDropdownVisible, setSubDropdownVisible] = useState(null);
  const [isMobileNav, setisMobileNav] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleClose = () => {
    setisMobileNav(!isMobileNav);
  };

  return (
    <nav className="py-4 container mx-auto">
      {isMobileNav && (
        <div>
          <MobileNav onClose={handleClose} />
        </div>
      )}
      <div className="flex flex-row items-center justify-between px-4">
        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden flex items-center"
          onClick={() => setisMobileNav(true)}
        >
          <CiMenuBurger />
        </div>
        {/* Logo on the left */}
        <div className="hidden md:flex  items-center">
          <Image src={logo} alt="Logo" width={150} height={50} />
        </div>
        <div className=" md:hidden  items-center">
          <Image src={logoMobile} alt="Logo" width={150} height={50} />
        </div>

        {/* Menu in the center */}
        <div className="hidden md:flex flex-row space-x-6">
          {NavbarData.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-row items-center gap-2"
            >
              <Link
                href={
                  item.title === "HOME" ? "/" : `/${item.title.toLowerCase()}`
                }
                onClick={() => setActiveMenu(item.title)}
                className={`text-sm font-poppins hover:text-secondary ${
                  activeMenu === item.title
                    ? "text-secondary"
                    : "text-TextandIcons"
                }`}
              >
                {item.title}
              </Link>
              {item.title === "PROJECTS" && <IoIosArrowDown size={14} />}

              {/* Dropdown for PROJECTS */}
              {item.title === "PROJECTS" && dropdownVisible && (
                <div className=" absolute  top-8 left-0 w-52  bg-white  rounded shadow-lg">
                  {["Residential Projects", "Commercial Projects"].map(
                    (subItem, index) => (
                      <div key={index} className="relative">
                        <button
                          onClick={() =>
                            setSubDropdownVisible(
                              subDropdownVisible === subItem ? null : subItem
                            )
                          }
                          className="font-poppins px-4 flex justify-between w-full py-3 text-sm text-TextandIcons hover:text-#61646A hover:bg-[rgba(250,247,229)]"
                        >
                          {subItem}
                          <MdKeyboardArrowRight size={14} />
                        </button>
                        {/* Nested Sub-dropdown */}
                        {subDropdownVisible === subItem && (
                          <div className=" ml-2 absolute left-full top-0 w-52 bg-white rounded shadow-lg">
                            <Link
                              href="/ocean-crest"
                              className="block py-3 text-sm text-TextandIcons  hover:bg-[rgba(250,247,229)] px-4"
                            >
                              Ocean Crest Residence
                            </Link>
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

        {/* Right side: Language and User */}
        <div className="flex items-center space-x-6">
          <div className="hidden md:block">
            <AiOutlineGlobal />
          </div>
          <div>
            <h2 className="text-sm font-poppins underline text-TextandIcons">
              Login In
            </h2>
          </div>
          <div className="hidden md:block">
            <ButtonPrimary title="Become a Member" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
