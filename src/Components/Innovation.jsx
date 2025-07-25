import React, { useState } from 'react';
import sectionThreeImage from '../assets/SectionThreeImage.png';
import { motion as m} from "framer-motion";

const Innovation = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    };

    const handleBookTest = () => {
        setInputValue(''); 
    };

    return (
        <section style={{'--sectionThree-image': `url(${sectionThreeImage})`}} className="relative bg-[image:var(--sectionThree-image)] h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden">
            <div className="lg:backdrop-blur-none backdrop-blur-xs w-full h-screen flex lg:flex-row flex-col lg:gap-20 gap-6 justify-center place-items-center z-10">
                
                {/* Left Side: Car Info */}
                <m.div  className="max-w-2xl lg:h-120 gap-10 bg-opacity-90 lg:p-8 p-4 rounded-xl flex flex-col justify-between ">
                    <m.div initial={{opacity: 0, x: -250}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 0.75, ease: "easeIn"}} className="space-y-4 ">
                        <h2 className="text-2xl lg:text-3xl font-bold lg:text-white text-black">A Legacy of Innovation</h2>
                        <p className="text-base lg:text-xl md:text-xl lg:text-gray-300 text-black">
                        With decades of experience in crafting automobiles that blend performance with luxury
                        </p>
                    </m.div>

                    <m.div initial={{opacity: 0, x: -250}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 0.95, ease: "easeIn"}} className="space-y-4 ">
                        <h2 className="text-2xl lg:text-3xl font-bold lg:text-white text-black">Driving the Future</h2>
                        <p className="text-base lg:text-xl md:text-xl lg:text-gray-300 text-black">
                        We believe in a future where every journey is an experience of luxury, efficiency, and sustainability. Our cars are designed with this vision in mind
                        </p>
                    </m.div>
                </m.div>

                {/* Right Side: Booking Info */}
                <div className="max-w-2xl lg:p-8 p-4 rounded-xl flex flex-col lg:gap-18 gap-8 justify-center ">
                    <m.div initial={{opacity: 0, x: 300}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 0.75, ease: "easeIn"}} className="space-y-6">
                        <h2 className="text-2xl lg:text-4xl font-bold text-black ">The Pinnacle of Automotive Design</h2>
                        <p  className="text-base lg:text-xl md:text-xl">
                        Our collection represents the ultimate in automotive craftsmanship, where every detail is carefully considered to provide drivers with an experience that transcends the ordinary.
                        </p>
                    </m.div>

                    <m.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.95, ease: "easeIn"}} className="lg:space-y-10 space-y-6">
                        <div viewport={{once: true}} transition={{duration: 0.95, ease: "easeIn"}} className='flex flex-col gap-3'>
                            <input
                            type="text"
                            value={inputValue}
                            placeholder="Environmental Stewardship"
                            onChange={handleInputValue}
                            className="p-4 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none text-gray-700"
                            />
                            {inputValue.length > 0 && inputValue.length <= 20 && (
                            <p className="text-red-600 text-sm">Character must be more than 20</p>
                            )}</div>

                        <button type="button" onClick={handleBookTest} className="w-full p-4 bg-blue-600 hover:bg-blue-900 cursor-pointer text-white rounded-xl font-semibold transition duration-300">
                        Book a Test
                        </button>
                    </m.div>
                </div>
            </div>
        </section>
    );
};

export default Innovation;
