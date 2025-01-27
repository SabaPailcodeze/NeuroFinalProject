import React from "react";
interface HeadLineTextProps {
  hOneTitle: string;
  pTitle: string;
  strokeWidth?: string;
}
const HeadLineText = ({
  hOneTitle,
  pTitle,
  strokeWidth,
}: HeadLineTextProps) => {
  return (
    <div className="font-supreme ">
      <h1
        className="text-[56px] md:text-[64px] tracking-wide font-bold uppercase "
        style={{
          WebkitTextStrokeWidth: "2px",
          WebkitTextStrokeColor: "#666",
        }}
      >
        {hOneTitle}
      </h1>
      <p className="text-[64px] font-supreme font-bold uppercase text-[#E5E548] decoration-2 line-through">
        <span className="text-transparent">0000ii</span>
        {pTitle}
        <span className="text-transparent">i</span>
      </p>
    </div>
  );
};

export default HeadLineText;
