import React from 'react';
import Mercedes from '../assets/Mercedes-benz.png'
import Audi from '../assets/Audi.png'
import Porsche from '../assets/Porsche.png'
import Box from '../assets/Box.png'

const MercedesBenz = () => {
    return (
        <div className='max-w-full xl:py-10 lg:py-10 md:py-3 sm:py-8 py-4 flex justify-center bg-blue-900 text-white overflow-hidden'>
            <div className='flex flex-wrap justify-center p-3 xl:gap-10 lg:gap-10 md:gap-9 sm:gap-9 gap-6  items-center '>
                <div className='flex items-center'>
                    <img src={Mercedes} alt="Mercedes-Benz" className='w-auto xl:h-14 lg:h-14 md:h-14 sm:h-10 h-8'/>
                    <p className='xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-xl font-extrabold'>Mercedes-Benz</p>
                </div>

                <div className='flex justify-center'>
                    <img src={Box} alt="Box" className='w-auto xl:h-14 lg:h-14 md:h-14 sm:h-10 h-8' />
                </div>

                <div className='flex items-center'>
                    <img src={Audi} alt="" className='w-auto xl:h-14 lg:h-14 md:h-14 sm:h-10 h-8' />
                    <p className='xl:text-3xl lg:text-3xl md:text-xl sm:text-xs text-xl font-bold font-IBM-Plex'>Audi</p>
                </div>

                <div className=''>
                <p className='xl:text-xl lg:text-xl md:text-xl sm:text-xs text-xl font-bold '>Tesla Inc.</p>
                </div>

                <div className='flex items-center'>
                    <img src={Porsche} alt="" className='w-auto xl:h-14 lg:h-14 md:h-14 sm:h-10 h-8' />
                    <p className='xl:text-2xl lg:text-2xl md:text-xl sm:text-xs text-xl font-bold'>Porsche</p>
                </div>
            </div>
        </div>
    )
}

export default MercedesBenz