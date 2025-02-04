import React from "react";
import ReadButton from "../../Atoms/ReadButton/ReadButton";
import { TextStrokeProps } from "@/app/types/types";

const WeBuilt = ({
  WebkitTextStrokeWidth,
  WebkitTextStrokeColor,
  color,
  webkitSpanStroke,
  hTeaxt,
  pText,
  lastHtext,
}: TextStrokeProps) => {
  return (
    <div className="font-supreme flex flex-col">
      <div
        id="WeBuilt"
        className="py-28 lg:py-40 font-supreme flex flex-col gap-12  h-[100%]"
      >
        <div className="text-white">
          <h1
            className="flex-row text-[56px] md:text-[64px] lg:text-[88px] font-bold leading-[100%] text-transparent uppercase w-full"
            style={{
              WebkitTextStrokeWidth,
              WebkitTextStrokeColor,
            }}
          >
            {hTeaxt}
            <p
              className=" inline-flex px-0 md:px-3 text-transparent line-through decoration-[1.6px] uppercase text-center"
              style={{
                color,
                WebkitTextStrokeColor: webkitSpanStroke,
              }}
            >
              {pText}
            </p>
            {lastHtext}
          </h1>
        </div>
        <div className="pt-0 md:pt-12">
          <ReadButton text="READ MORE" />
        </div>
      </div>
    </div>
  );
};

export default WeBuilt;
