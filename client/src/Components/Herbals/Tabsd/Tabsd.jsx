import React, { useState } from "react";
import { Tabs } from "../../../ui/tabs.jsx";
import Items from "../Items.jsx";
import test1 from "../../../assets/test1.png";
import Ayurveda from "../Ayush/Ayurveda.jsx";
import Naturopathy from "../Ayush/Naturopathy.jsx";
import Unani from "../Ayush/Unani.jsx";
import Siddha from "../Ayush/Siddha.jsx";
import Homoeopathy from "../Ayush/Homoeopathy.jsx";

export function Tabsd() {
  const [activeTab, setActiveTab] = useState("product");

  const tabs = [
    {
      title: "Ayurveda",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-2xl md:text-5xl font-bold text-white bg-gray-700">
          <p>Ayurveda</p>
          <Ayurveda />
        </div>
      ),
      style: activeTab === "product" ? "bg-gray-700 text-black" : "bg-gray-700 text-white",
    },
    {
      title: "Yoga & Naturopathy",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-2xl md:text-5xl font-bold text-white bg-gray-700">
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
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-2xl md:text-5xl font-bold text-white bg-gray-700">
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
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-2xl md:text-5xl font-bold text-white bg-gray-700">
          <p>Siddha</p>
          <Siddha />
        </div>
      ),
      style: "bg-gray-700 text-white",
    },
    {
      title: "Homoeopathy",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-2xl md:text-5xl font-bold text-white bg-gray-700">
          <p>Homoeopathy</p>
          <Homoeopathy />
        </div>
      ),
      style: "bg-gray-700 text-white",
    },
  ];

  return (
    <div className="w-full md:w-[100rem] [perspective:1000px] relative b flex flex-col mx-auto items-start justify-start my-40">
      <Tabs 
        tabs={tabs}
        tabClassName={`px-8 py-4 text-lg md:text-2xl font-semibold ${tabs.find(tab => tab.value === activeTab)?.style || "bg-gray-700 text-white"}`}
        onTabChange={(newValue) => setActiveTab(newValue)}
      />
    </div>
  );
}

export default Tabsd;
