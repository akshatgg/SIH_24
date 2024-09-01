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
      <h1 className="mt-20 text-4xl flex items-start justify-center">Featured Products</h1>

      {/* <div className="flex justify-center mt-10 gap-x-20"> */}
        {/* <Items 
          title="Sample Product"
          description="This is a description of the sample product."
          image={test1}  // Replace with the actual image URL
        />   
            <Items 
          title="Sample Product"
          description="This is a description of the sample product."
          image={test1}  // Replace with the actual image URL
        /> 
            <Items 
          title="Sample Product"
          description="This is a description of the sample product."
          image={test1}  // Replace with the actual image URL
        />  */}
      {/* </div> */}


      <Tabsd/>
    </div>
  );
}

export default Herbals;
