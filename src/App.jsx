import React from 'react';
import './index.css';
import HeroSection from './Components/HeroSection';
import {Routes, Route} from "react-router-dom";
import MercedesBenz from './Components/MercedesBenz';
import AutomotiveDesign from './Components/AutomotiveDesign';
import Innovation from './Components/Innovation';
import { useScroll } from './Components/ScrollContext';
import NextGenVehicle from './Components/NextGenVehicle';
import Mobility from './Components/Mobility';
import Footer from './Components/Footer';

function App() {
  const { homeRef, carsRef, aboutRef, dealRef } = useScroll();

  return (
    <>
      <Routes>
        <Route path="/" element={<HeroSection/>} />
      </Routes>
      
      <MercedesBenz />

      <div ref={aboutRef}>
        <AutomotiveDesign />
      </div>

      <div ref={dealRef}>
        <Innovation />
      </div>
      
      <div ref={carsRef}>
        <NextGenVehicle />
      </div>

      <Mobility />

      <Footer />
    </>
  )
}

export default App
