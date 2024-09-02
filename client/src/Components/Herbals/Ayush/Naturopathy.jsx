import Items from "../Items.jsx";
import test1 from "../../../assets/test1.png"
import AOS from 'aos';
import aloevera from "../../../assets/aloevera.jpeg";
import lemonbalm from "../../../assets/lemonbalm.jpeg";
import ginger from "../../../assets/ginger.jpeg";
import peppermint from "../../../assets/peppermint.jpeg";

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';  // Import the AOS styles
const Naturopathy = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once
    });
  }, []);
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 " data-aos="fade-down">
          <Items
            title="Aloe Vera (Aloe barbadensis)"
            description="Uses: Skin health, digestion, wound healing, and detoxification."
            image={aloevera}
          />
  
          <Items
            title="Lemon Balm (Melissa officinalis)"
            description="Uses: Stress relief, digestive health, and improving sleep."
            image={lemonbalm}
          />
  
          <Items
            title="Peppermint (Mentha piperita)"
            description="Uses: Digestive aid, headache relief, and respiratory health."
            image={ginger}
          />
  
          <Items
            title="Ginger (Zingiber officinale)"
            description="Uses: Nausea relief, anti-inflammatory, and digestive health."
            image={peppermint}
          />
        </div>
      </div>
    );
  };
  

  export default Naturopathy;