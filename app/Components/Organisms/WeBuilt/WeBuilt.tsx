import React from 'react'
import ReadButton from '../../Atoms/ReadButton/ReadButton'

const WeBuilt = () => {
  return (
    <div className='px-[186px] py-[160px]'>
        <div className="bg-black text-white">
            <h1   
                className="text-4xl  font-bold"  
                style={{
                    WebkitTextStrokeWidth: "2px",   
                    WebkitTextStrokeColor: "#666",
                    textTransform: "uppercase",
                    color: "transparent",
                }}>
                WE BUILD IMMERSIVE DESIGN 
                <span 
                    className="px-3 text-transparent textTransform: 'uppercase' line-through " 
                    style={{
                        color: "var(--NeuYellow, #E5E548)",
                        textAlign: "center",
                        WebkitTextStrokeColor: '#E5E548'
                    }}
                >
                    SOLUTIONS 
                </span>
                FOR YOUR INNOVATIVE BRANDS
            </h1>
        </div>
        <ReadButton
            text='READ MORE'
        />
    </div>
  )
}

export default WeBuilt