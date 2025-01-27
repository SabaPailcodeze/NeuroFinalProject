import React from "react";
import { CircleBtnProps } from "@/app/types/types";

const CircleButton = ({ text }: CircleBtnProps) => {
  return (
    <button className="rounded-[50%] text-black bg-c-yellow text-[12px] min-w-28 min-h-28">
      {text}
    </button>
  );
};

export default CircleButton;
