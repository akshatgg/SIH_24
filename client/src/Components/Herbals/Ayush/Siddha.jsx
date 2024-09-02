import Items from "../Items.jsx";
import test1 from "../../../assets/test1.png";
import nilavembu from "../../../assets/nilavembu.jpeg";
import acalyphaIndica from "../../../assets/acalyphaindica.jpeg";
import thuthuvalai from "../../../assets/thuthuvalai.jpeg";
import karisalankanni from "../../../assets/karisalankanni.jpeg";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import the AOS styles

const Siddha = () => {
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
          title="Nilavembu (Andrographis paniculata)"
          description="Uses: Fever, detoxification, and boosting immunity."
          image={nilavembu}
        />
  
        <Items
          title="Acalypha Indica (Indian Nettle)"
          description="Uses: Skin disorders, respiratory health, and as an expectorant."
          image={acalyphaIndica}
        />
  
        <Items
          title="Thuthuvalai (Solanum trilobatum)"
          description="Uses: Respiratory health, treating cough, and asthma relief."
          image={thuthuvalai}
        />
  
        <Items
          title="Karisalankanni (Eclipta prostrata)"
          description="Uses: Liver health, skin care, and hair growth."
          image={karisalankanni}
        />
      </div>
    </div>
  );
};

export default Siddha;
