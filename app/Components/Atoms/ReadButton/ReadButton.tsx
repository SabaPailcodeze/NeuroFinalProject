import React from 'react'

const ReadButton = ({ text }: { text: string })  => {
  return (
    <div>
        <button className='mt-[48px] px-5 py-4 text-white font-[supreme] text-[12px] uppercase rounded-[80px] border border-white'>{text}</button>        
    </div>

  )
}

export default ReadButton