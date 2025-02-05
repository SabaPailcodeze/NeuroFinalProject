"use client";
import React, { useState } from "react";
import SideBar from "../../Atoms/SideBar/SideBar";
import HeroMain from "../../Molecules/HeroMain/HeroMain";
import HeroSectionTxt from "../../Atoms/HeroSectionTxt/HeroSectionTxt";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-[880px] md:h-[100vh] w-[100%]">
      <div className="w-full h-[30%] md:h-full flex bg-image1 bg-cover bg-no-repeat bg-center font-supreme relative">
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <HeroMain isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="flex md:hidden absolute top-48 w-full">
        <HeroSectionTxt isOpen={isOpen} />
      </div>
    </div>
  );
};

export default HeroSection;
