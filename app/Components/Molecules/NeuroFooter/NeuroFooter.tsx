import React from "react";
import CircleButton from "../../Atoms/CircleButton/CircleButton";
import HeadLineText from "../../Atoms/HeadLineText/HeadLineText";

const NeuroFooter = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex py-20 items-center">
        <div>
          <h1
            className="text-[56px] md:text-[88px] font-supreme tracking-wide font-bold leading-[100%] text-transparent"
            style={{
              WebkitTextStrokeWidth: "2px",
              WebkitTextStrokeColor: "#000",
            }}
          >
            WE ALWAYS SEEK FOR NEW ADVENTURES. LET’S DO
            <span
              className="px-3 text-transparent line-through decoration-2 text-center "
              style={{
                color: "var(--NeuYellow, #000000)",
                WebkitTextStrokeColor: "#000000",
              }}
            >
              BUSINESS
            </span>
          </h1>
        </div>
        <div className="">
          <CircleButton text="CONTACT US" color="#FFFFFF" />
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-[24px] font-extrabold leading-[100%]">NEURO.</p>
        <div className="flex justify-between gap-32">
          <div className="flex flex-col w-48 gap-8">
            <p className="text-[18px] font-bold tracking-[2px] leading-[120%]">
              NEURO IDEAS HQ
            </p>
            <p className="text-[14px] font-normal tracking-[1px] leading-[160%]">
              Nirmana Rd. 32 Building 123 Kampoeng Ideas Canggu, Bali
            </p>
          </div>
          <div className="flex flex-col w-44 gap-8">
            <p className="text-[18px] font-bold tracking-[2px] leading-[120%]">
              BUSINESS
            </p>
            <p className="text-[14px] font-normal tracking-[1px] leading-[160%]">
              talk@neuroideas.com +62 666 888 32
            </p>
          </div>
          <div className="flex flex-col gap-3 text-[14px] font-medium tracking-[0.56px]">
            <span className="cursor-pointer hover:text-white">HOME</span>
            <span className="cursor-pointer hover:text-white">WORKS</span>
            <span className="cursor-pointer hover:text-white">COMPANY</span>
            <span className="cursor-pointer hover:text-white">THOUGHTS</span>
            <span className="cursor-pointer hover:text-white">CONTACT</span>
          </div>
          <div className="flex flex-col gap-3 text-[14px] tracking-[1px] font-normal">
            <span className="cursor-pointer hover:text-white">Instagram</span>
            <span className="cursor-pointer hover:text-white">Twitter</span>
            <span className="cursor-pointer hover:text-white">LinkedIn</span>
            <span className="cursor-pointer hover:text-white">Facebook</span>
          </div>
        </div>
      </div>
      <div className="flex gap-14 text-[14px] font-normal tracking-[1px] leading-[160%] pb-10">
        <span>NEURO®, inc</span>
        <span className="pr-12">2022</span>
        <span>DESIGN BY NEUWEBZ</span>
      </div>
    </div>
  );
};

export default NeuroFooter;
