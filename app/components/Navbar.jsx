"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "../../public/giga-group-logo.svg";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecandary from "./ButtonSecandary";

const menuItems = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about-us" },
  { name: "COMPANIES", path: "/companies" },
  { name: "MANAGEMENT", path: "/management" },
  { name: "PROJECTS", path: "/projects" },
  { name: "GALLERY", path: "/gallery" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path) => {
    if (!path) return;
    window.location.href = path;
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/40 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center space-x-2">
          <Image src={Logo} alt="GIGA Group Logo" width={150} height={100} />
        </a>

        <div className="hidden lg:flex items-center space-x-6">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`text-sm font-medium px-2 py-1 transition-colors ${
                  isActive
                    ? "text-yellow-600"
                    : "text-gray-800 hover:text-yellow-600"
                }`}
              >
                {item.name}
              </button>
            );
          })}

          <ButtonPrimary
            title="CONTACT US"
            onClick={() => handleNavigation("/contact")}
          />
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full text-gray-700"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-full h-screen bg-white/90 backdrop-blur-md shadow-lg z-50 flex flex-col justify-center items-center"
          >
            <motion.div className="bg-white py-6 rounded-xl shadow-lg w-80 flex flex-col space-y-0">
              {menuItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.path)}
                    className={`w-full text-left py-3 px-6 border-b text-lg font-medium transition-colors ${
                      isActive
                        ? "bg-yellow-50 text-yellow-700 border-gray-200"
                        : "text-gray-800 hover:text-yellow-600 border-transparent"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}

              <div className="gap-y-4 px-6  flex flex-col">
                <ButtonPrimary
                  title="Contact Us"
                  onClick={() => handleNavigation("/contact")}
                />

                <ButtonSecandary
                  title="Close Menu"
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
