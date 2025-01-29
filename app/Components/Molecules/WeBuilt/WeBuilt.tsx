import React from "react";
import ReadButton from "../../Atoms/ReadButton/ReadButton";

const WeBuilt = () => {
  return (
    <div className="py-[160px] font-supreme flex flex-col gap-12">
      <div className=" text-white">
        <h1
          className="text-[56px] md:text-[88px] tracking-wide font-bold leading-[100%] text-transparent"
          style={{
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "#666",
          }}
        >
          WE BUILD IMMERSIVE DESIGN
          <span
            className="px-3 text-transparent line-through decoration-1 text-center "
            style={{
              color: "var(--NeuYellow, #E5E548)",
              WebkitTextStrokeColor: "#E5E548",
            }}
          >
            SOLUTIONS
          </span>
          FOR YOUR INNOVATIVE BRANDS
        </h1>
      </div>
      <ReadButton text="READ MORE" />
    </div>
  );
};

export default WeBuilt;
