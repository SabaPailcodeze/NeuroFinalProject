import React from "react";
import { ButtonProps } from "@/app/types/types";

const BurgerButton = ({ isOpen, toggleBtn }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={toggleBtn}
      className="flex flex-col justify-between w-8 h-5"
    >
      <div
        className={`h-[15%] w-full duration-500 bg-white rounded-[16px] ${
          isOpen && "transform translate-y-2 rotate-45"
        }`}
      ></div>
      <div
        className={`h-[15%] w-full bg-white duration-300 rounded-[16px] ${
          isOpen && "opacity-0"
        }`}
      ></div>
      <div
        className={`duration-500 h-[15%] w-full bg-white rounded-[16px] ${
          isOpen && "transform -translate-y-[9px] -rotate-45"
        } `}
      ></div>
    </button>
  );
};

export default BurgerButton;
