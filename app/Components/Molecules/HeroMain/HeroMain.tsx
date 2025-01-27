import React from "react";
import Image from "next/image";
import HiddenSection from "../../Atoms/HiddenSection/HiddenSection";
import CircleButton from "../../Atoms/CircleButton/CircleButton";
import { ButtonProps } from "@/app/types/types";

const HeroMain = ({ isOpen }: ButtonProps) => {
  return (
    <div className=" w-full h-full text-white">
      <header
        className={`flex items-center justify-between px-20 py-12 duration-700 transition-all ${
          isOpen ? "bg-black" : ""
        } `}
      >
        <h1 className="text-white text-[24px] font-extrabold">NEURO.</h1>
        <div className="flex gap-10 text-[14px] font-medium">
          <p className="tracking-wide">4°12'S 332°48'E</p>
          <p className="opacity-[0.4]">MON 22.07</p>
          {/* this toggle must be separated as component also must be fixed */}
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6  bg-gray-200 peer-focus:outline-none   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
          </label>
        </div>
      </header>
      <HiddenSection isOpen={isOpen} />
      <div
        className={`px-20 flex h-[80%] relative pt-16 ${
          isOpen ? " transition-all duration-300" : ""
        } `}
      >
        <div className="w-[70%] flex flex-col ">
          <div className="text-[4.625rem] font-bold uppercase">
            <span>creative team</span>
            <br />
            <span className="line-through decoration-1 text-c-yellow">
              <span className="text-transparent">000</span>
              for future’s
            </span>
            <br />
            <span className="pl-[135px]">brands.</span>
          </div>
          <div className="flex gap-16 pl-[135px] items-center">
            <p className="flex items-start h-full pt-7 text-[18px] font-light">
              We are outstanding individuals <br /> who loves to combine art +
              design
            </p>
            <CircleButton text={"LET’S WORK "} />
          </div>
          <div className="h-full w-[70%] flex items-end justify-end cursor-pointer">
            <Image
              src="/Svgs/arrow.svg"
              alt="arrow"
              width={22}
              height={26}
              className="animate-bounce"
            />
          </div>
        </div>
        <div className="w-[30%] flex items-end">
          <video src="./video/video2.mp4" controls />
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
