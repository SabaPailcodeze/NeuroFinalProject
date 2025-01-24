import React from "react";

const ReadButton = ({ text }: { text: string }) => {
  return (
    <div>
      <button className="px-5 py-4 text-white  font-bold font-supreme text-[12px] uppercase rounded-[80px]  border border-white hover:bg-white hover:text-black transition-colors duration-500 ease-in-out">
        {text}
      </button>
    </div>
  );
};

export default ReadButton;
