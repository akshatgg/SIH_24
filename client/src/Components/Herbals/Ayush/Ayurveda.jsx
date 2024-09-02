import Items from "../Items.jsx";
import test1 from "../../../assets/test1.png"
import AOS from 'aos';
import ashwagandha from "../../../assets/ashwagandha.jpeg"
import neem  from "../../../assets/neem.jpeg"
import turmeric from "../../../assets/turmeric.jpeg"
import tulsi  from "../../../assets/tulsi.jpeg"



import React, { useEffect } from 'react';
import 'aos/dist/aos.css';  // Import the AOS styles
const Ayurveda = () => {
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
            title="Ashwagandha (Withania somnifera)"
            description="Uses: Stress relief, boosting energy levels, improving concentration, and enhancing immunity."
            image={ashwagandha}
          />
  
          <Items
            title="Tulsi (Ocimum sanctum)"
            description="Uses: Respiratory disorders, stress, inflammation, and boosting immunity."
            image={tulsi}
          />
  
          <Items
            title="Neem (Azadirachta indica)"
            description="Uses: Skin disorders, blood purification, and as an antimicrobial agent."
            image={neem}
          />
  
          <Items
            title="Turmeric (Curcuma longa)"
            description="Uses: Anti-inflammatory, antioxidant, digestive health, and skin care."
            image={turmeric}
          />
        </div>
      </div>
    );
  };
  

  export default Ayurveda;