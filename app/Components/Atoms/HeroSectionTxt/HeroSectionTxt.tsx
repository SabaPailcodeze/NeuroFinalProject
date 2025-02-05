import { ButtonProps } from "@/app/types/types";
import React, { useState, useEffect } from "react";
import CircleButton from "../CircleButton/CircleButton";
import BounceArrow from "../BounceArrow/BounceArrow";

const HeroSectionTxt = ({ isOpen }: ButtonProps) => {
  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", !scrollEnabled);
    return () => document.body.classList.remove("no-scroll");
  }, [scrollEnabled]);

  const handleScroll = () => {
    setScrollEnabled(true);
    document.getElementById("WeBuilt")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className={` pl-6 md:pl-0 lg:pl-20 h-full w-full relative pt-0 lg:pt-16 justify-center ${
        isOpen ? " transition-all duration-300" : ""
      } `}
    >
      <div className="w-full h-[80%] flex items-center justify-between lg:items-start flex-col">
        <div className=" lg:w-[750px] w-full lg:h-full md:h-[200px]">
          <div className="xxs:text-[48px] text-[66px] md:text-[76px] lg:text-[85px] font-bold uppercase">
            <span className="md:leading-[96px] flex xxs:justify-start justify-center lg:justify-start w-full text-white">
              creative team
            </span>
            <div className="hidden lg:flex w-[50%] lg:w-full relative">
              <div className="text-c-yellow lg:text-right w-full flex items-center justify-end md:leading-[96px]">
                for future’s
              </div>
              <div className="absolute md:top-11 lg:top-11 bg-c-yellow w-[50%] lg:w-full h-[1.6px]"></div>
            </div>
            <span className="flex lg:hidden xxs:justify-start justify-center decoration-[1.6px] text-c-yellow line-through">
              for future’s
            </span>
            <span className=" lg:pl-28 flex xxs:justify-start justify-center lg:justify-start md:leading-[96px] text-white">
              brands.
            </span>
          </div>
          <div className="flex lg:pl-[120px] xxs:justify-start justify-center lg:justify-start items-center">
            <div className="flex lg:flex-row flex-col items-start md:items-center lg:justify-start gap-5 lg:gap-16">
              <p className="flex items-center text-[18px] w-full lg:w-[45%] font-light text-white">
                We are outstanding individuals who loves to combine art + design
              </p>
              <div className="flex w-full md:w-[30%] items-center justify-between md:justify-center md:block pr-6 md:pr-0">
                <CircleButton text="LET’S WORK " color="#E5E548" />
                <div className=" md:hidden">
                  <BounceArrow handleScroll={handleScroll} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hidden md:flex w-full lg:w-[92%] items-center justify-end md:justify-center cursor-pointer"
          onClick={handleScroll}
        >
          <BounceArrow handleScroll={handleScroll} />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[390px] md:w-[25%] lg:w-[24%] xl:w-[25%] md:pt-0 pt-10 flex justify-center md:absolute right-28 md:right-10 md:bottom-36 lg:right-20 lg:bottom-36">
          <video src="./video/video2.mp4" controls autoPlay muted loop />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionTxt;
