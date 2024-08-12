import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.3" className='w-full py-10  bg-[#004d43] rounded-tl-3xl rounded-tr-3xl'>
      <div className="text border-t-2 border-b-2 border-zinc-300 flex items-center overflow-hidden whitespace-nowrap mt-24 ">
        <motion.h1 
            initial={{x:'0'}}
            animate={{x:"-100%"}}
            transition={{ease:"linear",duration:10, repeat:Infinity}}
            className=" text-[25vw] tracking-tighter leading-none  font-medium uppercase pr-20 -mb-[1vw] -mt-[4vw]  ">We are ochi </motion.h1>
        <motion.h1 
            initial={{x:'0'}}
            animate={{x:"-100%"}}
            transition={{ease:"linear",duration:10, repeat:Infinity}}
            className=" text-[25vw] tracking-tighter leading-none  font-medium uppercase pr-20 -mb-[1vw] -mt-[4vw]  " >We are ochi </motion.h1>
      </div>
    </div>
  )
}

export default Marquee