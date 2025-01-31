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
    <div className="py-40 font-supreme flex flex-col gap-12">
      <div className="text-white"></div>
      <div
        id="WeBuilt"
        className="py-[160px] font-supreme flex flex-col gap-12 h-[100vh]"
      >
        <div className=" text-white">
          <h1
            className="flex-row text-[56px] md:text-[64px] xl:text-[88px] font-bold leading-[100%] text-transparent uppercase"
            style={{
              WebkitTextStrokeWidth,
              WebkitTextStrokeColor,
            }}
          >
            {hTeaxt}
            <p
              className=" inline-flex px-0 md:px-3 text-transparent line-through decoration-1 uppercase text-center"
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
        <div className="pt-12">
          <ReadButton text="READ MORE" />
        </div>
      </div>
    </div>
  );
};

export default WeBuilt;
