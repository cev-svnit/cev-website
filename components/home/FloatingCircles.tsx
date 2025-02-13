import React from "react";
import { motion } from "framer-motion";

const floatingCircleVariants = {
  animate: (custom: {
    y: any;
    x: any;
    scale: any;
    rotate: any;
    duration: any;
  }) => ({
    y: custom.y,
    x: custom.x,
    scale: custom.scale,
    rotate: custom.rotate,
    transition: {
      duration: custom.duration,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
    },
  }),
};

const backgroundElements = [
  {
    custom: {
      y: ["0%", "30%", "-20%", "10%", "0%"],
      x: ["0%", "-20%", "30%", "-10%", "0%"],
      scale: [1, 1.2, 1.1, 1.3, 1],
      rotate: [0, 45, -45, 20, 0],
      duration: 12,
    },
    className: "top-20 left-20 w-64 h-64 bg-navy",
  },
  {
    custom: {
      y: ["0%", "-40%", "20%", "-30%", "0%"],
      x: ["0%", "30%", "-20%", "40%", "0%"],
      scale: [1, 1.4, 1.2, 1.1, 1],
      rotate: [0, -90, 45, -60, 0],
      duration: 15,
    },
    className: "bottom-40 right-20 w-96 h-96 bg-green",
  },
  {
    custom: {
      y: ["0%", "20%", "-40%", "30%", "0%"],
      x: ["0%", "-30%", "-20%", "20%", "0%"],
      scale: [1, 1.3, 1.5, 1.2, 1],
      rotate: [0, 60, -90, 45, 0],
      duration: 18,
    },
    className: "top-1/2 left-1/2 w-80 h-80 bg-green",
  },
  {
    custom: {
      y: ["0%", "20%", "80%", "-60%", "0%"],
      x: ["0%", "20%", "30%", "40%", "0%"],
      scale: [1, 1.2, 1.4, 1.1, 1],
      rotate: [0, -45, 90, -30, 0],
      duration: 14,
    },
    className: "top-1/3 right-1/4 w-72 h-72 bg-navy",
  },
];

const FloatingCircles = () => {
  return (
    <>
      {backgroundElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-3xl ${element.className}`}
          variants={floatingCircleVariants}
          animate="animate"
          custom={element.custom}
        />
      ))}
    </>
  );
};

export default FloatingCircles;
