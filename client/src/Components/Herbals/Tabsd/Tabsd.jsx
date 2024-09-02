import React, { useState } from "react";
import { Tabs } from "../../../ui/tabs.jsx";
import Items from "../Items.jsx";
import test1 from "../../../assets/test1.png";
import Ayurveda from "../Ayush/Ayurveda.jsx";
import Naturopathy from "../Ayush/Naturopathy.jsx";
import Unani from "../Ayush/Unani.jsx";
import Siddha from "../Ayush/Siddha.jsx";
import Homoeopathy from "../Ayush/Homoeopathy.jsx";
import AOS from 'aos';

import { useEffect } from 'react';
import 'aos/dist/aos.css';  // Import the AOS styles


export function Tabsd() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once
    });
  }, []);
  const [activeTab, setActiveTab] = useState("product");

  const tabs = [
    {
      title: "Ayurveda",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-2xl md:text-5xl font-bold text-[#EEAE03] bg-[#032917]">
          <p>Ayurveda</p>
          <Ayurveda />
        </div>
      ),
      style: activeTab === "product" ? " text-black" : "bg-gray-700 text-white",
    },
    {
      title: "Yoga & Naturopathy",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-2xl md:text-5xl font-bold text-[#EEAE03] bg-[#032917]">
          <p>Yoga & Naturopathy</p>
          <Naturopathy />
        </div>
      ),
      style: "bg-gray-700 text-white",
    },
    {
      title: "Unani",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-2xl md:text-5xl font-bold text-[#EEAE03] bg-[#032917]">
          <p>Unani</p>
          <Unani />
        </div>
      ),
      style: "bg-gray-700 text-white",
    },
    {
      title: "Siddha",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-2xl md:text-5xl font-bold text-[#EEAE03] bg-[#032917]">
          <p>Siddha</p>
          <Siddha />
        </div>
      ),
      style: "bg-gray-700 text-white",
    },
    {
      title: "Sowa Rigpa & Homoeopathy",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-2xl md:text-5xl font-bold text-[#EEAE03] bg-[#032917]">
          <p>Sowa Rigpa & Homoeopathy</p>
          <Homoeopathy />
        </div>
      ),
      style: "bg-gray-700 text-white",
    },
  ];

  return (
    <div className="w-full md:w-[100rem] [perspective:1000px] relative b flex flex-col mx-auto items-center justify-center my-40 bg-[#0F4A2D] mb-7 rounded-full p-4 " data-aos="fade-down">
      <Tabs 
        tabs={tabs}
        tabClassName={`px-8 py-4 ml-5 text-lg md:text-2xl flex item-center justify-center font-semibold ${tabs.find(tab => tab.value === activeTab)?.style || "bg-gray-700 text-white"}`}
        onTabChange={(newValue) => setActiveTab(newValue)}
      />
    </div>
  );
}

export default Tabsd;