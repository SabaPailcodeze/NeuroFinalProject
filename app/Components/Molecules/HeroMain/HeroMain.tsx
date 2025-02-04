import React, { useEffect } from "react";
import HiddenSection from "../../Atoms/HiddenSection/HiddenSection";
import { ButtonProps } from "@/app/types/types";
import BurgerButton from "../../Atoms/BurgerButton/BurgerButton";
import HeroSectionTxt from "../../Atoms/HeroSectionTxt/HeroSectionTxt";

const HeroMain = ({ isOpen, setIsOpen }: ButtonProps) => {
  const toggleBtn = () => {
    setIsOpen?.(!isOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full h-full text-white">
      <header
        className={`flex items-center justify-between px-6 md:px-20 py-8 md:py-12 duration-1000 transition-all ${
          isOpen ? "bg-black" : ""
        } `}
      >
        <h1 className="text-white text-[24px] font-extrabold">NEURO.</h1>
        <div className="flex gap-8 md:gap-10 text-[14px] font-medium">
          <div className="gap-10 hidden md:flex">
            <p className="tracking-wide">4°12'S 332°48'E</p>
            <p className="opacity-[0.4]">MON 22.07</p>
          </div>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer " />
            <div className="relative w-11 h-6  bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
          </label>
          <div className="flex md:hidden">
            <BurgerButton isOpen={isOpen} toggleBtn={toggleBtn} />
          </div>
        </div>
      </header>
      <HiddenSection isOpen={isOpen} />
      <div className="hidden md:flex h-full">
        <HeroSectionTxt isOpen={isOpen} />
      </div>
    </div>
  );
};

export default HeroMain;
