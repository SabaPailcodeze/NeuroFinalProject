import React from "react";
import { CircleBtnProps } from "@/app/types/types";

const CircleButton = ({ text, color }: CircleBtnProps) => {
  return (
    <button
      className={`rounded-[50%] text-black text-[12px] min-w-28 min-h-28`}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

export default CircleButton;
