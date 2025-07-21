import { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const carsRef = useRef(null);
    const aboutRef = useRef(null);
    const dealRef = useRef(null);
    const homeRef = useRef(null);

    const scrollTo = (ref) => {
        ref?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <ScrollContext.Provider value={{ carsRef, aboutRef, dealRef, homeRef, scrollTo }}>
        {children}
        </ScrollContext.Provider>
    );
};

export const useScroll = () => useContext(ScrollContext);
