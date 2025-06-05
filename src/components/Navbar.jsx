import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    gsap.from(".logo", {
      y: -100,
      opacity: 0,
      duration: 1,
    });
    gsap.from(".hamburger", {
      y: -100,
      opacity: 0,
      duration: 1,
    });
    gsap.from(".desktop-link", {
      y: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
  });

  const navlinks = [
    { label: "Home", to: "#home" },
    { label: "About", to: "#about" },
    { label: "Projects", to: "#projects" },
    { label: "Contact", to: "#contact" },
  ];

  return (
    <header
      className="w-full px-10 py-4 flex justify-between items-center text-white z-50 relative"
      id="home"
    >
      <div className="logo text-white text-2xl font-semibold uppercase">
        Portfolio
      </div>

      {/* Desktop Nav */}
      <nav className="desktopNav md:flex hidden justify-end space-x-8 text-lg">
        {navlinks.map((item, idx) => (
          <a className="desktop-link" href={item.to} key={idx}>
            <div className="group relative cursor-pointer overflow-hidden">
              <span className="inline-block transition duration-500 ease-out group-hover:-translate-y-[100%]">
                {item.label}
              </span>
              <span className="absolute left-0 translate-y-[100%] rotate-12 group-hover:translate-y-0 group-hover:rotate-0 inline-block transition duration-500 ease-out">
                {item.label}
              </span>
            </div>
          </a>
        ))}
      </nav>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger md:hidden block">
        <button onClick={() => setIsOpen(true)}>
          <HiMenu size={28} />
        </button>
      </div>

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1a2c42] text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 shadow-lg`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-600">
          <span className="text-xl font-bold">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <HiX size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-6 text-lg">
          {navlinks.map((item, idx) => (
            <a
              href={item.to}
              key={idx}
              onClick={() => setIsOpen(false)}
              className="hover:text-orange-400 transition duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Backdrop when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
