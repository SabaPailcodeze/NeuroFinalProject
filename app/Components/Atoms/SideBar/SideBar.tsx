"use client";
import React from "react";
import Image from "next/image";
import { ButtonProps } from "@/app/types/types";
import BurgerButton from "../BurgerButton/BurgerButton";

const SideBar = ({ isOpen, setIsOpen }: ButtonProps) => {
  const toggleBtn = () => {
    setIsOpen?.(!isOpen);
  };
  return (
    <nav
      className={`z-50 hidden md:flex ${
        isOpen ? "bg-black" : "bg-[#3d3d3d49]"
      } px-6 w-[80px] h-full flex flex-col justify-between py-11 text-white transition-all duration-700`}
    >
      <div className="flex justify-center w-10 h-10">
        <Image src="/Svgs/N.svg" alt="N" width={40} height={40} />
      </div>
      <BurgerButton isOpen={isOpen} toggleBtn={toggleBtn} />
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
