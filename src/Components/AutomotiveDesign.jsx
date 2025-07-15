import React from 'react'
import sectionTwoImage from "../assets/SectionTwoImage.png"

const AutomotiveDesign = () => {
    return (
        <section style={{'--sectionTwo-image': `url(${sectionTwoImage})`}} className="bg-[image:var(--sectionTwo-image)] bg-cover bg-center bg-no-repeat h-screen">
            <div className="flex justify-center h-screen ">   
                <div className="flex flex-col gap-4 text-center max-w-7xl p-6 mt-20" >
                    <h1 className="text-4xl lg:text-5xl xl:text-5xl font-bold xl:leading-19 lg:leading-13 text-balance text-gray-800 font-IBM-Plex">
                    Th Pinnacle of Automotive Design</h1>
                    <p className="font-medium text-gray-700 xl:text-[19px]/7 lg:text-[19px]/9 md:text-[19px]/9 sm:text-[19px]/9 text-[16px]/9">
                        Immerse yourself in the elegance and sophisticated of our latest car range, where design meets functionality in a seamless blend. These cars are not just a means of transportation but a statement of style, luxury, and cutting-edge technology.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AutomotiveDesign