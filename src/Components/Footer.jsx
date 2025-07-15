import React from 'react';
import footerLogo from '../assets/footerLogo.png'

const Footer = () => {

    const follow = [
        {name: 'News'},
        {name: 'Team'},
        {name: 'Blog'},
        {name: 'Jobs'}
    ];

    const support = [
        {name: 'FAQs'},
        {name: 'Docs'},
        {name: 'Help'},
        {name: 'Care'}
    ];

    const contact = [
        {name: 'Call'},
        {name: 'Mail'},
        {name: 'Chat'},
        {name: 'Info'}
    ];

    
    return (
        <section className='flex flex-col lg:p-15 p-8 gap-10'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                <div className='flex flex-col lg:gap-16 '>
                    <img src={footerLogo} className='w-20' alt="" />
                </div>

                <div className='lg:col-span-2 flex lg:space-x-60 lg:justify-start justify-between'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-bold text-base'>Follow</h1>
                        {follow.map((item) => 
                            <a key={item.name} className='font-IBM-Plex font-semibold text-gray-500'>{item.name}</a>
                        )}
                    </div>

                    <div className='flex flex-col gap-3'>
                        <h1 className='font-bold text-base'>Support</h1>
                        {support.map((item) => 
                            <a key={item.name} className='font-IBM-Plex font-semibold text-gray-500'>{item.name}</a>
                        )}
                    </div>

                    <div className='flex flex-col gap-3'>
                        <h1 className='font-bold text-base'>Contact</h1>
                        {contact.map((item) => 
                            <a key={item.name} className='font-IBM-Plex font-semibold text-gray-500'>{item.name}</a>
                        )}
                    </div>
                </div>
            </div>

            <div className='flex flex-col lg:place-items-start place-items-center'>
                <p>&copy; 2025 Futuride, Inc.</p>
                <p>All rights reserved. <span className='font-bold'>Mike.</span></p>
            </div>
        </section>
    )
}

export default Footer