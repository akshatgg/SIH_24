import React from "react";
import Items from "./Items.jsx";
import logo from "../../assets/logo.png";
import test1 from "../../assets/test1.png"
import Tabsd from "./Tabsd/Tabsd.jsx";
import AOS from 'aos';

import { useEffect } from 'react';
import 'aos/dist/aos.css';  // Import the AOS styles
function Herbals() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="h-[250vh] bg-gradient-to-r from-green-800 via-green-700 to-green-900">
      <div className="mt-10 flex flex-col items-center justify-center " data-aos="fade-up">
        <img 
          src={logo} 
          className="w-auto h-32 object-contain" 
          alt="Logo" 
        />
      <h1 className=" text-2xl font-semibold flex items-start justify-center">Every herbs are verified</h1>
      </div>

      <h1 className="mt-20 text-5xl font-serif  font-bold flex items-start justify-center " data-aos="fade-up">Featured Products</h1>
   


      <Tabsd/>
    </div>
  );
}

export default Herbals;
