import React from "react";

const CircleButton = ({text}: any) => {
  // props type any is bad practice and must be fixed!!!
  return (
    <button
      className="rounded-[50%] text-black
                   bg-c-yellow text-[12px] min-w-28 min-h-28"
    >
      {text}
    </button>
  );
};

export default CircleButton;
