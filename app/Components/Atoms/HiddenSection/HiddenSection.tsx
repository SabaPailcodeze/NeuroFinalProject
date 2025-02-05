import React from "react";
import Image from "next/image";
import { ButtonProps } from "@/app/types/types";

const HiddenSection = ({ isOpen }: ButtonProps) => {
  return (
    <div
      className={`w-full h-screen absolute z-10 md:w-[calc(100%-78px)] md:h-[calc(100%-131px)] bg-black transition-all duration-1000 ease-in-out ${
        isOpen ? "md:left-[78px] opacity-1" : "md:left-[-191vh] opacity-0"
      } ${
        isOpen
          ? "xmd:transform xmd:translate-y-0"
          : "xmd:transform xmd:translate-y-[-120%]"
      }`}
    >
      <div className="flex flex-col h-full justify-between w-full lg:px-10 xl:px-20 pt-8 lg:pt-16">
        <div className="flex flex-col md:flex-row xmd:gap-8 items-center md:justify-evenly lg:justify-between">
          <ul className="text-[56px] lg:text-[64px] w-[80%] font-bold cursor-pointer">
            <li className="lg:hover:text-c-yellow w-[50%] lg:hover:line-through decoration-2 duration-300 hover:scale-105">
              <span className="text-transparent xmd:hidden">0000</span>
              HOME
              <span className="text-transparent xmd:hidden">0000</span>
            </li>
            <li className="lg:hover:text-c-yellow w-[50%] lg:hover:line-through hover:decoration-2 duration-300 hover:scale-105">
              <span className="text-transparent xmd:hidden">0000</span>
              WORKS
              <span className="text-transparent xmd:hidden">0000</span>
            </li>
            <li className="lg:hover:text-c-yellow w-[50%] lg:hover:line-through hover:decoration-2 duration-300 hover:scale-105">
              <span className="text-transparent xmd:hidden">0000</span>
              COMPANY
              <span className="text-transparent xmd:hidden">0000</span>
            </li>
            <li className="lg:hover:text-c-yellow w-[50%] lg:hover:line-through hover:decoration-2 duration-300 hover:scale-105">
              <span className="text-transparent xmd:hidden">0000</span>
              THOUGHTS
              <span className="text-transparent xmd:hidden">0000</span>
            </li>
            <li className="lg:hover:text-c-yellow w-[50%] lg:hover:line-through hover:decoration-2  duration-300 hover:scale-105">
              <span className="text-transparent xmd:hidden">0000</span>
              CONTACT
              <span className="text-transparent xmd:hidden">0000</span>
            </li>
          </ul>
          <div className="flex flex-row md:flex-col gap-16 xl:gap-20 w-[80%] justify-start md:w-[20%]">
            <div className="flex flex-col gap-4 xl:gap-8">
              <p className="text-[18px] font-bold tracking-[2px]">soc</p>
              <ul className="text-[14px] font-normal tracking-[1px] flex flex-col gap-4">
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="blank"
                    className="cursor-pointer hover:text-c-yellow"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.x.com/"
                    target="blank"
                    className="cursor-pointer hover:text-c-yellow"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.Linkedin.com/"
                    target="blank"
                    className="cursor-pointer hover:text-c-yellow"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.Facebook.com/"
                    target="blank"
                    className="cursor-pointer hover:text-c-yellow"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col w-[40%] md:w-full gap-4 xl:gap-8">
              <h3 className="text-[18px] font-bold tracking-[2px]">
                NEURO IDEAS HQ
              </h3>
              <p className="text-[14px] font-normal tracking-[1px] leading-[160%] w-full xl:w-[80%]">
                Nirmana Rd. 32 Building 123 Kampoeng Ideas Canggu, Bali
              </p>
            </div>
            <div className="hidden md:flex">
              <div className="absolute bottom-1 right-0 w-[29%]">
                <Image
                  src="/Svgs/WORKS.svg"
                  alt="Works"
                  width={578}
                  height={161}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pb-10 pl-2 hidden md:flex gap-10 text-[#666] text-[12px] font-medium">
          <span>NEURO®, INC</span>
          <span>2022</span>
        </div>
      </div>
    </div>
  );
};

export default HiddenSection;
