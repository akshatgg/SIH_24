import Items from "../Items.jsx";
import test1 from "../../../assets/test1.png"
import AOS from 'aos';
import asafoetida from "../../../assets/asafoetida.jpeg";
import senna from "../../../assets/senna.jpeg";
import  licorice from "../../../assets/licorice.jpeg";
import sativa from "../../../assets/sativa.jpeg";

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
            title="Asafoetida (Ferula asafoetida)"
            description="Uses: Digestive issues, respiratory disorders, and as an antimicrobial agent."
            image={asafoetida}
          />
  
          <Items
            title="Senna (Cassia angustifolia)"
            description="Uses: Laxative, treating constipation, and digestive cleansing."
            image={senna}
          />
  
          <Items
            title="Black Seed (Nigella sativa)"
            description="Uses: Immune system support, anti-inflammatory, and treating respiratory issues."
            image={licorice}
          />
  
          <Items
            title="Licorice (Glycyrrhiza glabra)"
            description="Uses: Respiratory health, digestive disorders, and skin health."
            image={sativa}
          />
        </div>
      </div>
    );
  };
  

  

  export default Unani;