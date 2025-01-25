"use client";
import React, { useState } from "react";
import SideBar from "../../Atoms/SideBar/SideBar";
import HeroMain from "../../Molecules/HeroMain/HeroMain";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-[100vh] w-[100%] flex bg-image1 bg-cover bg-no-repeat bg-center font-supreme">
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <HeroMain isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default HeroSection;
