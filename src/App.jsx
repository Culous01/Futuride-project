import React from 'react';
import './index.css';
import HeroSection from './Components/HeroSection';
import {Routes, Route} from "react-router-dom";
import MercedesBenz from './Components/MercedesBenz';
import AutomotiveDesign from './Components/AutomotiveDesign';
import Innovation from './Components/Innovation';
import NextGenVehicle from './Components/NextGenVehicle';
import Mobility from './Components/Mobility';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeroSection/>} />
      </Routes>
      <MercedesBenz />
      <AutomotiveDesign />
      <Innovation />
      <NextGenVehicle />
      <Mobility />
      <Footer />
    </>
  )
}

export default App
