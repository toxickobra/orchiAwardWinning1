import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-10  bg-[#004d43] rounded-tl-3xl rounded-tr-3xl'>
      <div className="text border-t-2 border-b-2 border-zinc-300 flex items-center overflow-hidden whitespace-nowrap mt-24 ">
        <h1 className=" text-[25vw] tracking-tighter leading-none  font-medium uppercase -mb-[1vw] -mt-[4vw]  ">We are ochi </h1>
        <h1 className=" text-[25vw] tracking-tighter leading-none  font-medium uppercase -mb-[1vw] -mt-[4vw]  " >We are ochi </h1>
        <h1 className=" text-[25vw] tracking-tighter leading-none  font-medium uppercase -mb-[1vw] -mt-[4vw]  " >We are ochi </h1>
      </div>
    </div>
  )
}

export default Marquee