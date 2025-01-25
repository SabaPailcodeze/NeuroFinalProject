"use client";
import React, { useState } from "react";
import Image from "next/image";

const SideBar = ({ isOpen, setIsOpen }: any) => {
  // props type any is bad practice and must be fixed!!!
  const toggleBtn = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      className={`z-20 ${
        isOpen ? "bg-black" : "bg-[#3d3d3d49]"
      } px-6 h-full flex flex-col justify-between py-10 text-white transition-all duration-500`}
    >
      <div className="flex justify-center">
        <Image src="/Images/N.svg" alt="N" width={40} height={40} />
      </div>
      {/* button must be fixed! */}
      <button
        className="flex gap-1 justify-center cursor-pointer"
        onClick={toggleBtn}
      >
        <div
          //   className="h-[32px] w-[1px] bg-white"
          className={`h-[32px] w-[1px] bg-white transition-all duration-500 ${
            isOpen ? "rotate-45" : ""
          }`}
        ></div>
        <div
          //   className="h-[32px] w-[1px] bg-white"
          className={`h-[32px] w-[1px] bg-white transition-all duration-500 ${
            isOpen ? "-rotate-45" : ""
          }`}
        ></div>
      </button>
      <div className="flex flex-col items-center justify-center">
        <span className="text-white text-center text-[20px] font-medium tracking-[0.8px] leading-normal">
          01
        </span>
        <span className="text-[#666] opacity-[0.8]">/</span>
        <span className="text-[#666] text-center font-[12px] leading-normal tracking-[0.48px]">
          08
        </span>
      </div>
    </nav>
  );
};

export default SideBar;
