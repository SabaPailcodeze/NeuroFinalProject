import React from "react";
import CircleButton from "../../Atoms/CircleButton/CircleButton";

const NeuroFooter = () => {
  return (
    <div className="flex md:h-auto h-[1130px] flex-col sm:gap-20 gap-8">
      <div className="flex flex-col lg:flex-row lg:py-20 pb-0 pt-20  items-center gap-8 md:gap-0">
        <div>
          <h1
            className="text-[46px] sm:text-[56px] md:text-[88px] font-supreme tracking-wide font-bold leading-[100%] text-transparent"
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
        <div className="flex w-full lg:w-auto justify-start lg:justify-center">
          <CircleButton text="CONTACT US" color="#FFFFFF" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row  justify-between gap-[28%]">
        <p className="hidden md:block text-[24px] w-[25%] md:w-[2%] lg:w-[7%] font-extrabold leading-[100%]">
          NEURO.
        </p>
        <div className="flex flex-col-reverse md:flex-row justify-between w-[75%] md:w-[98%] lg:w-[93%]">
          <div className="flex flex-col w-48 gap-4 md:gap-8">
            <p className="text-[18px] font-bold tracking-[2px] leading-[120%]">
              NEURO IDEAS HQ
            </p>
            <p className="text-[14px] font-normal tracking-[1px] leading-[160%]">
              Nirmana Rd. 32 Building 123 Kampoeng Ideas Canggu, Bali
            </p>
          </div>
          <div className="flex flex-col w-44 gap-4 md:gap-8 pb-6">
            <p className="md:hidden block text-[24px] font-extrabold leading-[100%] pb-[6px]">
              NEURO.
            </p>
            <p className="text-[18px] font-bold tracking-[2px] leading-[120%]">
              BUSINESS
            </p>
            <p className="text-[14px] font-normal tracking-[1px] leading-[160%]">
              talk@neuroideas.com +62 666 888 32
            </p>
          </div>
          <div className="flex justify-between w-[30%] pb-6 gap-[68px] sm:gap-0">
            <div className="flex flex-col gap-3 text-[14px] font-medium tracking-[0.56px]">
              <span className="cursor-pointer md:hover:text-white md:hover:scale-110 duration-300">
                HOME
              </span>
              <span className="cursor-pointer md:hover:text-white md:hover:scale-110 duration-300">
                WORKS
              </span>
              <span className="cursor-pointer md:hover:text-white md:hover:scale-110 duration-300">
                COMPANY
              </span>
              <span className="cursor-pointer md:hover:text-white md:hover:scale-110 duration-300">
                THOUGHTS
              </span>
              <span className="cursor-pointer md:hover:text-white md:hover:scale-110 duration-300">
                CONTACT
              </span>
            </div>
            <div className="flex flex-col gap-3 text-[14px] tracking-[1px] font-normal">
              <span className="cursor-pointer md:hover:text-white md:hover:scale-110 duration-300">
                Instagram
              </span>
              <span className="cursor-pointer md:hover:text-white md:hover:scale-110 duration-300">
                Twitter
              </span>
              <span className="cursor-pointer md:hover:text-white md:hover:scale-110 duration-300">
                LinkedIn
              </span>
              <span className="cursor-pointer md:hover:text-white md:hover:scale-110 duration-300">
                Facebook
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-9 sm:gap-14 text-[14px] font-normal tracking-[1px] leading-[160%] pb-10">
        <span>NEURO®, inc</span>
        <span className="pr-12">2022</span>
        <span>DESIGN BY NEUWEBZ</span>
      </div>
    </div>
  );
};

export default NeuroFooter;
