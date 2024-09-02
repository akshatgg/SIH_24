"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../../ui/3d-card.jsx";

function Items({ title, description, image }) {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#0F4A2D] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6  border"
      >
        <CardItem
          translateZ="50"
          className="text-3xl font-bold text-green-900 dark:text-[#EEAE03]"
        >
          {title}
        </CardItem>
  
        <CardItem translateZ="100" className="w-full mt-6">
          <img
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-100 text-2xl font-semibold max-w-sm dark:text-white mt-6"
        >
          {description}
        </CardItem>

        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-sm font-bold dark:text-green-950 bg-white hover:bg-green-700"
          >
            3D View →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-green-950 text-white text-sm font-bold hover:bg-green-700"
          >
            Details
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default Items;