import React from "react";
import Image from "next/image";
import { ProjectProps } from "@/app/types/types";

const Project = ({
  numberCount,
  hText,
  pDescription,
  pTitle,
  pProfessio,
  image,
}: ProjectProps) => {
  return (
    <div className="font-supreme flex flex-col gap-8">
      <div
        className={`w-[550px] h-[408px] relative bg-cover grayscale group hover:grayscale-0 font-supreme transition-all duration-700 ease-out cursor-pointer`}
        style={{
          clipPath: "polygon(0% 20%, 20% 0%, 100% 0%, 100% 100%, 0% 100%)",
          backgroundImage: `url(${image})`,
        }}
      >
        <div                 
          className="absolute bottom-0 left-0 w-[10px] h-[100px] opacity-0 transition-all duration-1000 ease-in-out group-hover:w-[100%] group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(to right, #ffff00 0%, #ffff00 80%, rgba(229, 229, 72, 0.3) 80%, rgba(229, 229, 72, 0.2) 100%)",
          }}
          >
          <div className="absolute bg-black rounded-[50%] bottom-5 right-8 py-2.5 px-2 opacity-0 group-hover:opacity-100">
            <Image
              src="/Svgs/whiteArrow.svg"
              alt="arrow"
              height={22}
              width={22}
            />
          </div>
        </div>
        <p
          style={{
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "#ffffff",
            color: "transparent",
          }}
          className="text-white absolute z-20 bottom-1 left-0 -rotate-90 text-[168px]"
        >
          {numberCount}
        </p>
      </div>
      <div className="text-white pl-10 leading-[160%] flex flex-col gap-4 w-[90%]">
        <h3 className=" text-[#E5E548] font-medium tracking-[4px] text-[24px]">
          {hText}
        </h3>
        <p className="text-[18px] font-light">{pDescription}</p>
        <div className="flex flex-col gap-2">
          <p className="opacity-[0.4] text-[14px] font-normal tracking-[1px] uppercase">
            {pTitle}
          </p>
          <span className="flex items-center gap-2">
            <Image src="/Svgs/circle.svg" alt="circle" width={4} height={4} />
            <p className="uppercase text-[14px] font-normal tracking-[1px]">
              {pProfessio}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Project;
