import React from "react";
import Image from "next/image";
import { SliderContentProps } from "@/app/types/types";
import { circle } from "framer-motion/client";

const SliderContent = ({
  pageNumber,
  hTitle,
  pDescription,
  Pdate,
  pProf,
  imgSrc,
}: SliderContentProps) => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-16 lg:gap-28 pr-6 cursor-pointer">
        <div
          className={`relative md:w-[440px] justify-center h-[408px] bg-cover bg-center md:flex-[2] font-supreme cursor-pointer`}
          style={{
            clipPath: "polygon(0% 20%, 20% 0%, 100% 0%, 100% 100%, 0% 100%)",
            backgroundImage: `url(${imgSrc})`,
          }}
        >
          <p
            style={{
              WebkitTextStrokeWidth: "2px",
              WebkitTextStrokeColor: "#ffffff",
              color: "transparent",
            }}
            className="text-white absolute bottom-2 md:bottom-1 md:left-0 -rotate-90 text-[90px] xsm:text-[120px] lg:text-[168px]"
          >
            {pageNumber}
          </p>
        </div>
        <div className="flex flex-col  md:flex-[3] gap-4 justify-end">
          <h3 className="text-[24px] md:text-[32px] text-c-yellow font-medium leading-[120%] tracking-[4px] uppercase">
            {hTitle}
          </h3>
          <p className="text-[18px] md:text-[20px] text-white font-light leading-[160%]">
            {pDescription}
          </p>
          <p className="text-[14px] text-white tracking-[1px] font-normal opacity-[0.4]">
            {Pdate}
          </p>
          <span className="flex md:hidden items-center gap-2">
            <Image src="/Svgs/circle.svg" alt="circle" width={4} height={4} />
            <p className="uppercase text-[14px] text-white font-normal tracking-[1px]">
              {pProf}
            </p>
          </span>
        </div>
      </div>
    </>
  );
};

export default SliderContent;
