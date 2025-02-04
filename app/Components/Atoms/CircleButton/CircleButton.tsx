import React from "react";
import { CircleBtnProps } from "@/app/types/types";

const CircleButton = ({ text, color }: CircleBtnProps) => {
  return (
    <button
      className={`rounded-[50%] text-black text-[12px] w-[108px] h-[108px]`}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

export default CircleButton;
