import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" h-[100vh] w-[100%] flex bg-image1 bg-cover bg-center font-supreme">
      {/* this nav should be separated as component in future */}
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
      <div className=" w-full h-full text-white">
        <header className="flex items-center justify-between px-20 py-12">
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
        <div className="px-20 flex h-[80%] pt-16">
          <div className="w-[70%] flex flex-col">
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
              <button
                className="rounded-[50%] text-black
               bg-c-yellow text-[12px] min-w-28 min-h-28"
              >
                LET’S WORK
              </button>
            </div>
            <div className="h-full w-[70%] flex items-end justify-end cursor-pointer">
              {/* arrow image, future must be animated by bouncing effect*/}

              <Image
                src="./Images/arrow.svg"
                alt="arrow"
                width={22}
                height={26}
              />
            </div>
          </div>
          <div className="w-[30%] flex items-end">
            {/* video */}
            <video src="./video/video.mp4" controls />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
