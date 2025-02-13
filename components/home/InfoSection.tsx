"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  LucideIcon,
  Paintbrush,
  Cpu,
  CircleDollarSign,
  Quote,
} from "lucide-react";
import FloatingCircles from "./FloatingCircles";

const iconMap: Record<string, LucideIcon> = {
  Design: Paintbrush,
  Technology: Cpu,
  Finance: CircleDollarSign,
};

const InfoSection = () => {
  const visionStatements = [
    {
      title: "Design",
      description:
        "Crafting intuitive solutions through human-centered design thinking, where creativity meets functionality to solve real-world challenges.",
    },
    {
      title: "Technology",
      description:
        "Leveraging cutting-edge technologies and innovative engineering to build scalable solutions that drive digital transformation.",
    },
    {
      title: "Finance",
      description:
        "Bridging financial innovation with sustainable practices to create value-driven solutions for tomorrow's economic challenges.",
    },
  ];

  const testimonials = [
    {
      quote:
        "CEV is doing a wonderful job. It is important to keep students aware about the peripheral development and CEV has been taking care of that.",
      author: "Dr. Vipul Kheraj",
      role: "Applied Physics Dept, SVNIT",
    },
    {
      quote:
        "Nothing gets better when it comes to interdisciplinary approach for long-term solutions. CEV's interdisciplinary nature of work is a great platform to contribute. I personally wish CEV all accolades for strong visibility and many more stupendous moments.",
      author: "Dr. Shrinivas S. Arkatkar",
      role: "Civil Eng. Dept, SVNIT",
    },
  ];

  const visionRef = useRef(null);
  const testimonialRef = useRef(null);
  const visionInView = useInView(visionRef, { once: true });
  const testimonialInView = useInView(testimonialRef, { once: true });

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    }),
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const backgroundVariants = {
    initial: {
      background: "linear-gradient(45deg, #e0e7ff, #f3e8ff)",
      opacity: 0.7,
    },
    animate: {
      background: [
        "linear-gradient(45deg, #E0DDCF, #F1F0EA)",
        "linear-gradient(135deg, #F1F0EA, #E0DDCF)",
        "linear-gradient(225deg, #E0DDCF, #F1F0EA)",
      ],
      opacity: [0.7, 0.8, 0.7],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-off-white text-navy py-20 px-4 md:px-8 relative overflow-hidden">
      <FloatingCircles />

      <motion.div ref={visionRef} className="max-w-6xl mx-auto mb-20 relative">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-center mb-16 tracking-tight">
          Our Vision
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {visionStatements.map((vision, index) => {
            const Icon = iconMap[vision.title];

            return (
              <motion.div
                key={vision.title}
                custom={index}
                initial="hidden"
                animate={visionInView ? "visible" : "hidden"}
                variants={cardVariants}
                whileHover="hover"
                className="relative group">
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-navy/5 transition-all duration-300 group-hover:shadow-xl"></div>

                <div className="relative z-10 bg-transparent p-8">
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: visionInView ? 1 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: index * 0.2,
                      }}
                      className="mb-6 w-16 h-16 bg-off-white rounded-full flex items-center justify-center shadow-md">
                      <Icon className="w-8 h-8 text-navy" />
                    </motion.div>

                    <h3 className="text-xl md:text-2xl font-montserrat font-semibold mb-4 text-navy">
                      {vision.title}
                    </h3>

                    <p className="text-navy/80 font-inter text-base leading-relaxed">
                      {vision.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        ref={testimonialRef}
        initial="hidden"
        animate={testimonialInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="max-w-4xl mx-auto relative">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-center mb-16 tracking-tight">
          Testimonials
        </h2>

        <motion.div
          initial="initial"
          animate="animate"
          variants={backgroundVariants}
          className="bg-white/90 backdrop-blur-sm border border-navy/5 rounded-xl p-8 md:p-12 min-h-[400px] md:h-[600px] relative overflow-hidden flex flex-col justify-between shadow-lg">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{
                opacity: 0,
                x: index === 0 ? -50 : 50,
              }}
              animate={{
                opacity: testimonialInView ? 1 : 0,
                x: testimonialInView ? 0 : index === 0 ? -50 : 50,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.5,
                ease: "easeOut",
              }}
              className={`
                w-full relative 
                ${index === 0 ? "mb-12 md:mb-0" : ""}
                ${
                  index === 0
                    ? "md:absolute md:top-12 md:left-12 md:w-[calc(100%-6rem)]"
                    : "md:absolute md:bottom-12 md:right-12 md:w-[calc(100%-6rem)] md:text-right"
                }
              `}>
              <Quote className="text-navy/40 mb-6 h-8 w-8" />
              <p className="mb-6 text-navy/90 font-inter italic text-base md:text-lg leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-navy/10 pt-4">
                <p className="font-montserrat font-semibold text-lg md:text-xl text-navy">
                  {testimonial.author}
                </p>
                <p className="text-base md:text-lg font-medium text-navy/70 font-inter">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InfoSection;
