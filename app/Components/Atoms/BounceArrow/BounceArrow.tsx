import React, { useState } from "react";
import Image from "next/image";
import { scrollEnableProps } from "@/app/types/types";

const BounceArrow = ({ handleScroll }: scrollEnableProps) => {
  return (
    <div onClick={handleScroll}>
      <Image
        src="/Svgs/arrow.svg"
        alt="arrow"
        width={22}
        height={26}
        className="animate-bounce"
      />
    </div>
  );
};

export default BounceArrow;
