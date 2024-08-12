import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
import imageOchi from '../assets/imageOchi.png';
function LandingPage() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className=' w-full h-screen bg-zinc-900 border-t-2 border-zinc-900'>
      <div className='textStructure mt-52 px-20'>
        {["WE CREATE","EYE-OPENING","PRESENTATION"].map((item,index)=>{
            return (
               <div  key={index}  className='masker'>
                    <div  key={index}  className='w-fit flex items-baseline '>
                        {index === 1 && 
                        <motion.div 
                            initial={{width:0}}
                            animate={{width:"9vw"}}
                            transition={{ease: [0.22, 1, 0.36, 1], duration:1}}
                            style={{backgroundImage: `url(${imageOchi})`, backgroundSize:'cover', backgroundPosition:'center'}}
                            className='w-[9vw] h-[5.6vw] rounded-md relative'>
                        </motion.div>}
                        <div key={index} className="mr-[1vw] flex items-center uppercase tracking-tighter text-[8vw] h-full leading-[7vw]">
                            <h1>{item}</h1>
                        </div>
                    </div>
               </div> 
            );
          
        })}       
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-36 flex justify-between items-center py-5 px-20">
        {["For public and private companies", "From the first pitch to IPO"].map((item,index)=>{
        return <p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>
        })}
        <div className='start flex gap-5 items-center'>
            <div className='px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase '>
                <p>Start the project</p>
            </div>
            <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full'>
                <span className='rotate-[45deg]'>
                    <FaArrowUpLong />
                </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
