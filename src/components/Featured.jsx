import { motion, useAnimation } from 'framer-motion';
import React from 'react';

function Featured() {
    const cards = [useAnimation(), useAnimation()];

    const handleHoverStart = (index) => {
        cards[index].start({ y: "0" });
    };

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
    };

    return (
        <div className='w-full py-10'>
            <div className='w-full px-10 border-b-[1px] border-zinc-700 pb-20'>
                <h1 className='text-7xl font-light tracking-tight'>Featured Projects</h1>
            </div>
            <div className='px-20'>
                <div className="cards w-full flex gap-10 mt-10">
                    <motion.div
                        onHoverStart={() => handleHoverStart(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className="cardcontainer relative w-1/2 h-[75vh]">
                        <h1 className='absolute z-10 flex text-[#cdea68] font-bold left-full tracking-tighter -translate-x-1/2 top-1/2 -translate-y-1/2 text-9xl leading-none overflow-hidden'>
                            {"FYDE".split("").map((item, index) =>
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    className="inline-block -translate-y-full"
                                    key={index} >{item}</motion.span>
                            )}
                        </h1>
                        <div className="card w-full h-full rounded-xl overflow-hidden">
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="img" />
                        </div>
                    </motion.div>
                    <motion.div
                        onHoverStart={() => handleHoverStart(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        className="cardcontainer relative w-1/2 h-[75vh]">
                        <h1 className='absolute flex text-[#cdea68] font-bold right-full tracking-tighter translate-x-1/2 top-1/2 -translate-y-1/2 text-9xl leading-none overflow-hidden'>
                            {"VISE".split("").map((item, index) =>
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[1]}
                                    className="inline-block -translate-y-full"
                                    key={index} >{item}</motion.span>
                            )}
                        </h1>
                        <div className="card w-full h-full rounded-xl overflow-hidden">
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="img" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
