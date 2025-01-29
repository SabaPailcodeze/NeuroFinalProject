import React from "react";
import { ReadButtonProps } from "@/app/types/types";

const ReadButton = ({ text, onClick }: ReadButtonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="px-5 py-4 text-white  font-bold font-supreme text-[12px] uppercase rounded-[80px]  border border-white hover:bg-white hover:text-black transition-colors duration-500 ease-in-out"
      >
        {text}
      </button>
    </div>
  );
};

export default ReadButton;
