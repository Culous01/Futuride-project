import React from 'react';
import NGVCar1 from '../assets/NGVCar-1.png';
import NGVCar2 from '../assets/NGVCar-2.png';
import NGVCar3 from '../assets/NGVCar-3.png';
import NGVCar4 from '../assets/NGVCar-4.png';

import { motion as m } from "framer-motion"

const NextGenVehicle = () => {
    return (
        <div className='max-w-screen bg-white lg:p-8 md:p-8 sm:p-8'>
            <div className='lg:p-20 p-10 bg-blue-900 flex flex-col justify-center place-items-center lg:rounded-xl gap-20'>
                <h1 className='text-white font-IBM-Plex font-bold text-5xl text-center'>Next-Generation Vehicles</h1>
                    
                <m.div initial={{opacity: 0, y: -100}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.60, ease: "easeIn"}} className='max-w-8xl lg:p-9 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-8'>
                    <img src={NGVCar1} className='h-full w-full hover:scale-110 rounded-2xl cursor-grab' alt="NGVCar1"/>
                    <img src={NGVCar2} className='h-full w-full hover:scale-110 rounded-2xl cursor-grab' alt="NGVCar2"/>
                    <img src={NGVCar3} className='h-full w-full hover:scale-110 rounded-2xl cursor-grab' alt="NGVCar3" />
                    <img src={NGVCar4} className='h-full w-full hover:scale-110 rounded-2xl cursor-grab' alt="NGVCar4" />
                </m.div>
            </div>
        </div>
    )
}

export default NextGenVehicle