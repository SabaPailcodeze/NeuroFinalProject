import React from "react";
import Image from "next/image";
import { ButtonProps } from "@/app/types/types";

const HiddenSection = ({ isOpen }: ButtonProps) => {
  return (
    <div
      className={`absolute z-10  h-[83.8%] w-[94.1%] bg-black left-0 transition-all ml-[85px] duration-500 ${
        isOpen ? "left-0" : "left-[-191vh]"
      }`}
    >
      <div className="flex flex-col  w-full px-20 pt-16">
        <div className="flex items-center justify-around gap-28">
          <div>
            <ul className="text-[64px] font-bold cursor-pointer">
              <li className="hover:text-c-yellow hover:line-through decoration-2">
                <span className="text-transparent">0000</span>
                HOME
                <span className="text-transparent">0000</span>
              </li>
              <li className="hover:text-c-yellow hover:line-through hover:decoration-2">
                <span className="text-transparent">0000</span>
                WORKS
                <span className="text-transparent">0000</span>
              </li>
              <li className="hover:text-c-yellow hover:line-through hover:decoration-2">
                <span className="text-transparent">0000</span>
                COMPANY
                <span className="text-transparent">0000</span>
              </li>
              <li className="hover:text-c-yellow hover:line-through hover:decoration-2">
                <span className="text-transparent">0000</span>
                THOUGHTS
                <span className="text-transparent">0000</span>
              </li>
              <li className="hover:text-c-yellow hover:line-through hover:decoration-2">
                <span className="text-transparent">0000</span>
                CONTACT
                <span className="text-transparent">0000</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-20 w-[20%]">
            <div className="flex flex-col gap-8">
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
            <div className="flex flex-col gap-8">
              <h3 className="text-[18px] font-bold tracking-[2px]">
                NEURO IDEAS HQ
              </h3>
              <p className="text-[14px] font-normal tracking-[1px] leading-[160%]">
                Nirmana Rd. 32 Building 123 Kampoeng Ideas <br /> Canggu, Bali
              </p>
            </div>
            <div className="absolute bottom-0">
              <Image
                src="/Svgs/WORKS.svg"
                alt="Works"
                width={578}
                height={161}
              />
            </div>
          </div>
        </div>
        <div className="h-full flex gap-10 mt-[70px] text-[#666] text-[12px] font-medium">
          <span>NEURO®, inc</span>
          <span>2022</span>
        </div>
      </div>
    </div>
  );
};

export default HiddenSection;
