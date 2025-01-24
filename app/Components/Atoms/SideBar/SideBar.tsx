import React from "react";
import Image from "next/image";

const SideBar = () => {
  return (
    <nav className="z-10 bg-[#3d3d3d49] px-6 h-full flex flex-col justify-between py-10 text-white">
      <div className="flex justify-center">
        <Image src="/Images/N.svg" alt="N" width={40} height={40} />
      </div>
      <div className="flex gap-3 justify-center cursor-pointer">
        <div className="h-[32px] w-[1px] bg-white"></div>
        <div className="h-[32px] w-[1px] bg-white"></div>
      </div>
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
