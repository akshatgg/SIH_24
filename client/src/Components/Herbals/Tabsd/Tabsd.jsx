import React from "react";
import { Tabs } from "../../../ui/tabs.jsx";
import Items from "../Items.jsx";
import test1 from "../../../assets/test1.png";
import Ayurveda from "../Ayush/Ayurveda.jsx";

export function Tabsd() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-2xl md:text-5xl font-bold text-white bg-gray-700">
          <p>Product Tab</p>
<Ayurveda/>
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-2xl md:text-5xl font-bold text-white bg-gray-700">
          <p>Services Tab</p>
          <Ayurveda/>
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-2xl md:text-5xl font-bold text-white bg-gray-700">
          <p>Playground Tab</p>
          <Ayurveda/>
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-2xl md:text-5xl font-bold text-white bg-gray-700">
          <p>Content Tab</p>
          <Ayurveda/>
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-2xl md:text-5xl font-bold text-white bg-gray-700">
          <p>Random Tab</p>
          <Ayurveda/>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full md:w-[100rem] [perspective:1000px] relative b flex flex-col mx-auto items-start justify-start my-40">
      <Tabs 
        tabs={tabs}
        tabClassName="px-8 py-4 text-lg md:text-2xl font-semibold" 
      />
    </div>
  );
}

export default Tabsd;
