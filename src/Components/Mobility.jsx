import React from 'react';
import sectionFourImage from '../assets/SectionFourImage.png';
import { motion as m } from "framer-motion";

const Mobility = () => {

    return (
        <section  style={{'--sectionFour-image': `url(${sectionFourImage})`}} className="bg-[image:var(--sectionFour-image)] bg-cover bg-center bg-no-repeat h-screen">
            <div className="flex justify-center">   
                <div className="flex flex-col items-center gap-10 text-center max-w-xl p-4 mt-16">
                    <h1 className="text-3xl/12 lg:text-5xl/14 font-bold text-balance text-gray-800 font-IBM-Plex">
                    Introducing The Future of Mobility with BMW</h1>
                    <button className="lg:w-96 w-full p-4 bg-blue-600 hover:bg-blue-900 cursor-pointer text-white rounded-xl font-semibold transition duration-300">
                        Book a Test
                    </button>
                </div> 
            </div>
        </section>
    )
}

export default Mobility