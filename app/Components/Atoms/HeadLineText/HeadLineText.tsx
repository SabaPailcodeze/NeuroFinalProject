import React from 'react'
import { HeadLineTextProps } from '@/app/types/types';

const HeadLineText = ({ hOneTitle, pTitle }: HeadLineTextProps) => {
  return (
    <div className='font-supreme '>
      <h1 className="text-[56px] md:text-[64px] tracking-wide font-bold uppercase "
          style={{
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "#666",  
          }}
        >
          {hOneTitle}
        </h1>
      <p className="relative  text-[56px] md:text-[64px] font-supreme uppercase text-[#E5E548] inline lg:px-32 md:px-24 sm:px-16 pl-5">
        {pTitle}
        <span 
          className="absolute z-10 top-1/2 -translate-y-1/2 lg:w-[520px] md:w-[480px] sm:w-[450px] xs:w-[360px] mxs:w-[340px]  left-0 h-[1px] bg-[#E5E548]"
        ></span>
      </p>
    </div>
  )
}

export default HeadLineText;
