import Items from "../Items.jsx";
import test1 from "../../../assets/test1.png"
import AOS from 'aos';
import arnica from "../../../assets/arnica.jpeg";
import calendula from "../../../assets/calendula.jpeg";
import chamomilla from "../../../assets/chamomilla.jpeg";
import vomica from "../../../assets/vomica.jpeg";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';  // Import the AOS styles
const Homoeopathy = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once
    });
  }, []);
    return (

      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 "  data-aos="fade-down">
          <Items
            title="Arnica (Arnica montana)"
            description="Uses: Pain relief, bruises, and muscle soreness."
            image={arnica}
          />
  
          <Items
            title="Calendula (Calendula officinalis)"
            description="Uses: Skin healing, wound care, and anti-inflammatory properties."
            image={calendula}
          />
  
          <Items
            title="Chamomilla (Matricaria chamomilla)"
            description="Uses: Digestive issues, sleep aid, and calming irritability."
            image={chamomilla}
          />
  
          <Items
            title="Nux Vomica (Strychnos nux-vomica)"
            description="Uses: Digestive disorders, headaches, and stress relief."
            image={vomica}
          />
        </div>
      </div>
    );
  };











  export default Homoeopathy;