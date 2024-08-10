import React from 'react';
function About() {
  return (
    <div className='w-full  bg-[#cdea68] rounded-tl-3xl rounded tr-3xl text-black l'>
        <h1 className='p-20 font-[Neue_Montreal] text-[3vw] leading-[3.5vw] tracking-tight'>
            Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds
            ,sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>
        <div className='w-full border-t-[1px] py-10 px-20  bg-[#cdea68] border-[#a3b957] flex' >
            <div className='w-1/2'>
                <h1 className='text-[3vw] mb-5  leading-10  '>Our Approach:</h1>
                <button className='p-[1vw] bg-black text-white rounded-full flex items-center  ' >
                    <p className='ml-5 mr-7 font-medium text-[1.5vw] md:text-[1vw]'>READ MORE</p>
                    <div className='bg-white w-2 h-2 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[60vh] rounded-2xl bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")]    bg-center bg-no-repeat bg-fixed")] bg-cover '>

            </div>
        </div>
    </div>
  )
}

export default About
