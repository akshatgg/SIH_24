import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import "./Home.css";
import { Link } from 'react-scroll';
import AOS from 'aos';

import { useEffect } from 'react';
import 'aos/dist/aos.css';  // Import the AOS styles

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="home-container">
      <div className="flex flex-col justify-center items-center text-center ">
        <div className="text-[#EEAE03] text-8xl mb-4 text-cursive" data-aos="fade-left">
          Herbal Tree
        </div>
        <div className="text-white text-3xl" data-aos="fade-right">
          Every detail of 100% organic herbs and herbal products for you from
          <br/> 
          the Shivalik mountains of Uttarakhand. The foothills of the Himalayas.
        </div>
      </div>
      <div className="arrow-container arrow-upper" name="Home">
        <Link to="Herbals" spy={true} smooth={true} duration={250}>
          <FaChevronDown size={24} color="#fff" /> 
        </Link>
      </div>
    </div>
  );
}

export default Home;
