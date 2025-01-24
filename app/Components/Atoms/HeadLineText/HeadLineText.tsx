import React from 'react'
interface HeadLineTextProps {
  hOneTitle: string;
  pTitle: string;
  strokeWidth?:string;
}
const HeadLineText = ({hOneTitle, pTitle, strokeWidth}:HeadLineTextProps) => {
  return (
    <div className='font-supreme '>
      <h1 className="text-[56px] md:text-[88px] tracking-wide font-bold uppercase "
          style={{
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "#666",  
          }}
        >
          {hOneTitle}
        </h1>
      <p className="relative left-48 text-[64px] font-supreme uppercase  text-[#E5E548] inline mx-11">
        {pTitle}
        <span className={`absolute z-10 top-1/2 -translate-y-1/2 -left-56 h-[1px] bg-[#E5E548]`}
          style={{ width: strokeWidth }}
        ></span>
      </p>
    </div>
  )
}

export default HeadLineText