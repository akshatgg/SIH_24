import Items from "../Items.jsx";
import test1 from "../../../assets/test1.png"
import AOS from 'aos';

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';  // Import the AOS styles
const Unani = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once
    });
  }, []);
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10" data-aos="fade-down">
          <Items
            title="Sample Product"
            description="This is a description of the sample product."
            image={test1}
          />
  
          <Items
            title="Sample Product"
            description="This is a description of the sample product."
            image={test1}
          />
  
          <Items
            title="Sample Product"
            description="This is a description of the sample product."
            image={test1}
          />
  
          <Items
            title="Sample Product"
            description="This is a description of the sample product."
            image={test1}
          />
        </div>
      </div>
    );
  };
  

  export default Unani;