import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../lib/utils.js"; // Adjust the path to your utility functions
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true); // Initially visible

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (direction > 0) {
        setVisible(false); // Hide navbar when scrolling down
      } else {
        setVisible(true); // Show navbar when scrolling up
      }
    }
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -150 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, y: -150 }}
          transition={{
            duration: 0.5,       // Increase the duration for smoother transitions
            ease: "easeInOut",   // Use a smooth easing function
          }}
          className={cn(
            "flex fixed top-10 inset-x-0 max-w-[90%] mx-auto border border-transparent dark:border-white/[0.2] rounded-full bg-[#7a9263] shadow-xl shadow-[#749356] z-[5000] px-6 py-4 items-center justify-between space-x-6",
            className
          )}
        >
          <div className="flex text-green-800 text-4xl font-semibold">
            NAVBAR
          </div>

          {/* Leftmost items */}
          <div className="flex space-x-6">
            {navItems.map((navItem, idx) => (
              <ScrollLink
                key={`navItem-${idx}`}
                to={navItem.path}
                smooth={true}
                duration={navItem.duration}
                className="relative dark:text-black font-semibold items-center flex space-x-2 hover:text-[#7F56D9] cursor-pointer"
              >
                <span className="block sm:hidden text-lg">{navItem.icon}</span>
                <span className="hidden sm:block text-lg text-white hover:text-[#3f6a16]">{navItem.name}</span>
              </ScrollLink>
            ))}
          </div>

          {/* Rightmost items */}
          <div className="flex space-x-4">
            <button
              className="border text-base font-medium relative px-6 py-3 rounded-xl bg-[#F9F5FF] text-[#7a9263] hover:bg-gray-300"
            >
              <span>Login</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
            </button>
            <button
              className="border text-base font-medium relative px-6 py-3 rounded-xl bg-white text-[#7a9263] hover:bg-gray-300"
            >
              <span>Signup</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-green-500 to-transparent h-px" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
