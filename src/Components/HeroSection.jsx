import React from 'react';
import NavBar from './NavBar';
import HeroImg from '../assets/HeroSectionImage.png'

const HeroSection = () => {

    return (
        <div className=''>
            <NavBar />
            <div style={{ '--heroImage-url': `url(${HeroImg})` }} className="relative bg-[image:var(--heroImage-url)] isolate px-6 lg:px-8 h-screen bg-cover bg-center bg-no-repeat flex justify-center ">
                <div className="max-w-5xl xl:mt-30 lg:mt-32 md:mt-36 sm:mt-36 mt-28">   
                    <div className="text-center">
                        <h1 className="flex flex-col text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-7xl font-semibold xl:leading-19 lg:leading-13 tracking-tight text-balance text-white font-IBM-Plex">
                        Unveiling the Future: BMW's <span>Vision</span>
                        </h1>
                        <p className="mt-6 xl:px-14 lg:px-16 font-medium xl:text-white/70 lg:text-white/70 md:text-white/70 sm:text-white/70 text-white xl:text-[19px]/7 lg:text-[19px]/7 md:text-[19px]/7 sm:text-[19px]/7 text-[15px]/7">
                            Discover the epitome of luxury and innovation with our latest BMW models, designed to redefine the standards of automotive excellence and push the boundaries of engineering and design
                        </p>
                        <div className="mt-7 flex justify-center ">
                        <a
                            href="#"
                            className="rounded-xl bg-blue-900 xl:px-12 xl:py-4 lg:py-4 lg:px-10 md:py-4 md:px-10 sm:py-3 sm:px-10 py-4 px-16 xl:text-xl lg:text-xl md:text-xl sm:text-xl text-base font-bold text-white shadow-xl hover:bg-blue-500  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition duration-300">
                            Explore Now
                        </a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default HeroSection