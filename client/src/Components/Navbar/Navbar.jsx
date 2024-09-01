import React from "react";
import { FloatingNav } from "../../ui/floating-navbar.jsx";
import { IconHome, IconMessage, IconUser, IconShoppingCart, IconFileText } from "@tabler/icons-react";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
      path: "Home", // Match with section IDs
      duration: 100
    },
    {
      name: "Herbals",
      icon: <IconShoppingCart className="h-4 w-4 text-neutral-500 dark:text-white" />,
      path: "Herbals",
      duration: 200
    },
    {
      name: "About",
      icon: <IconFileText className="h-4 w-4 text-neutral-500 dark:text-white" />,
      path: "About",
      duration: 300
    },
    {
      name: "Contact Us",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
      path: "Contact",
      duration: 400
    },
  ];

  return (
    <div className="relative w-full ">
      <FloatingNav navItems={navItems} />
     
    </div>
  );
};

export default Navbar;
