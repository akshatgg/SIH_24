import React from "react";
import Items from "./Items.jsx";
import logo from "../../assets/logo.png";
import test1 from "../../assets/test1.png"
import Tabsd from "./Tabsd/Tabsd.jsx";
function Herbals() {
  return (
    <div className="h-[250vh]">
      <div className="mt-10 flex items-start justify-center">
        <img 
          src={logo} 
          className="w-auto h-32 object-contain" 
          alt="Logo" 
        />
      </div>
      <h1 className="mt-20 text-5xl font-serif  font-bold flex items-start justify-center">Featured Products</h1>
   


      <Tabsd/>
    </div>
  );
}

export default Herbals;
