import React, { useState, useRef } from 'react';
import WhiteLogo from "../assets/whiteLogo.png";
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useScroll } from './ScrollContext'; 

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { carsRef, aboutRef, dealRef, scrollTo } = useScroll();

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Cars', onClick: () => scrollTo(carsRef) },
        { name: 'About', onClick: () => scrollTo(aboutRef) },
        { name: 'Deal', onClick: () => scrollTo(dealRef) },
    ];

    return (
        <div>
            <header className="fixed backdrop-blur-2xl inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between py-6 px-6 lg:px-28">
                <div className="flex lg:flex-1">
                    <a href="/" className="flex items-center -m-1.5 p-1.5">
                    <img
                        alt="WhitLogo"
                        src={WhiteLogo}
                        className="h-10 w-auto"
                    />
                        <span className="text-3xl font-bold text-white">Futuride</span>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white cursor-pointer"
                    >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>

                <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) =>
            item.onClick ? (
                <button
                key={item.name}
                onClick={item.onClick}
                className="text-sm/6 cursor-pointer hover:border-b-2 hover:animate-pulse font-semibold text-white/60 hover:text-white"
                >
                {item.name}
                </button>
            ) : (
                <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold hover:border-b-2 text-white/60 hover:text-white"
                >
                {item.name}
                </a>
            )
            )}

                </div>
                </nav>

                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-blue-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="flex items-center -m-1.5 p-1.5">
                                <img
                                    alt="HomeLogo"
                                    src={WhiteLogo}
                                    className="h-10 w-auto"
                                />
                                    <span className="text-3xl font-bold text-white">Futuride</span>
                                </a>

                                <button
                                    type="button"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-m-2.5 rounded-md p-2.5 text-white">

                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="size-6" />
                                </button>
                            </div>

                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {navigation.map((item) =>
                                            item.onClick ? (
                                                <button key={item.name} onClick={() => {
                                                    item.onClick(); // scroll to section
                                                    setMobileMenuOpen(false); // close mobile menu
                                                    }}
                                                    className="w-full text-left block rounded-lg px-3 py-2 text-base font-semibold text-white hover:text-black hover:bg-gray-50">
                                                    {item.name}
                                                </button>
                                                ) : (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    onClick={() => setMobileMenuOpen(false)} // still close menu
                                                    className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:text-black hover:bg-gray-50"
                                                >
                                                    {item.name}
                                                </a>
                                        )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                </Dialog>
            </header>
        </div>
    )
}

export default NavBar