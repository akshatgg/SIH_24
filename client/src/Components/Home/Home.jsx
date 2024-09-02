import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import "./Home.css";
import { Link } from 'react-scroll';


function Home() {
  return (
    <div className="home-container">
      <div className="arrow-container arrow-upper" name="Home" >
         <Link to="Herbals" spy={true} smooth={true} duration={250}>
        <FaChevronDown size={24} color="#fff" /> 
        </Link>
      </div>
   
    </div>
  );
}

export default Home;
