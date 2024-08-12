import React from 'react'
import cardLogo from '../assets/cardLogo.png'
function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex gap-5 p-20 justify-center items-center'>
      <div className="cardcontainer w-1/2 h-[50vh]">
        <div className="card w-full h-full rounded-2xl bg-[#004d43]  relative">
            <img className="bg-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="logo" />
            <button className='absolute bottom-10 left-10 rounded-full  border-[1px] px-5 py-1 text-[#cdea68] border-[#cdea68]'>&copy; 2019-2024</button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[50vh] flex gap-5">
        <div className="card w-full h-full rounded-2xl bg-[#192826] relative">
            <img className="bg-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="logo" />
            <button className='absolute bottom-10 left-10 rounded-full  border-[1px] px-5 py-1 text-white border-white uppercase'>Rating 5.0 On Clutch</button>
        </div>
        <div className="card relative w-full h-full rounded-2xl bg-[#192826]">
            <img className="h-1/4 bg-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  " src={cardLogo} alt="logo" />
            <button className='absolute bottom-10 left-10 rounded-full  border-[1px] px-5 py-1 text-white border-white uppercase'>Business Bootcamp Alumni</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
