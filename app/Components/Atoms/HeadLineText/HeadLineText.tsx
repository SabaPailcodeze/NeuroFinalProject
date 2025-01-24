import React from 'react'
interface HeadLineTextProps {
  hOneTitle: string;
  pTitle: string;
  strokewidth?:string;
}
const HeadLineText = ({hOneTitle, pTitle, strokewidth}:HeadLineTextProps) => {
  return (
    <div className='font-supreme '>
      <h1 className="text-[56px] md:text-[88px] tracking-wide font-bold uppercase text-transparent"
          style={{
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "#666",  
          }}
        >
          {hOneTitle}
        </h1>
      <p className="relative left-48 text-[64px] font-supreme uppercase text-transparent text-[#E5E548] inline mx-11">
        {pTitle}
        <span className={`absolute top-1/2 -translate-y-1/2 -left-56 w-[${strokewidth}] h-[1px] bg-[#E5E548]`}></span>
      </p>
    </div>
  )
}

export default HeadLineText