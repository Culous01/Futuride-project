import React, { useState } from 'react';
import sectionThreeImage from '../assets/SectionThreeImage.png'

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
            <div className="max-w-7xl lg:backdrop-blur-none backdrop-blur-3xl w-full py-30 xl:py-0 grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-7 z-10">
                
                {/* Left Side: Car Info */}
                <div className="bg-opacity-90 p-4 lg:p-8 md:p-8 sm:p-7 rounded-xl text-white flex flex-col justify-between gap-10">
                    <div className="space-y-4 lg:w-full max-w-xl">
                        <h2 className="text-2xl lg:text-3xl font-bold">A Legacy of Innovation</h2>
                        <p className="text-base lg:text-xl md:text-xl lg:text-gray-300 text-gray-50">
                        With decades of experience in crafting automobiles that blend performance with luxury
                        </p>
                    </div>

                    <div className="space-y-4 lg:w-full max-w-xl">
                        <h2 className="text-2xl lg:text-3xl font-bold">Driving the Future</h2>
                        <p className="text-base lg:text-xl md:text-xl lg:text-gray-300 text-gray-50">
                        We believe in a future where every journey is an experience of luxury, efficiency, and sustainability. Our cars are designed with this vision in mind
                        </p>
                    </div>
                </div>

                {/* Right Side: Booking Info */}
                <div className="xl:p-8 lg-8 md:p-8 sm:p-7 p-4 xl:px-0  rounded-xl flex flex-col justify-center lg:gap-15 gap-10">
                    <div className="space-y-6 w-full md:w-xl">
                        <h2 className="text-2xl lg:text-4xl font-bold text-black ">The Pinnacle of Automotive Design</h2>
                        <p className="text-base lg:text-xl md:text-xl">
                        Our collection represents the ultimate in automotive craftsmanship, where every detail is carefully considered to provide drivers with an experience that transcends the ordinary.
                        </p>
                    </div>

                    <div className="space-y-4 lg:space-y-12 max-w-xl">
                        <div className='flex flex-col gap-3'>
                            <input
                            type="text"
                            value={inputValue}
                            placeholder="Environmental Stewardship"
                            onChange={handleInputValue}
                            className="w-full p-4 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none text-gray-700"
                            />
                            {inputValue.length > 0 && inputValue.length <= 20 && (
                            <p className="text-red-600 text-sm">Character must be more than 20</p>
                            )}</div>

                        <button type="button" onClick={handleBookTest} className="w-full p-4 bg-blue-600 hover:bg-blue-900 cursor-pointer text-white rounded-xl font-semibold transition duration-300">
                        Book a Test
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Innovation;
