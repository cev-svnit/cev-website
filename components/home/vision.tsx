"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Vision = () => {
  const visionStatements = [
    {
      title: "Lorem",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ad nobis assumenda voluptate dolor? Repellat?",
    },
    {
      title: "Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, enim perferendis? Itaque, officiis corporis. Eius!",
    },
    {
      title: "Dolor",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis mollitia necessitatibus, nisi iusto nesciunt odio?",
    },
  ];

  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia dicta nemo impedit ratione veniam iste iure doloribus provident alias architecto!",
      author: "Dr. Lorem",
      role: "CSE",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, eius! Corporis mollitia voluptatibus ducimus officiis, ipsum officia saepe consequuntur itaque.",
      author: "Prof. Ipsum",
      role: "HOD",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima ipsam excepturi eaque tenetur quis soluta molestiae distinctio? Quod, ut iure.",
      author: "Dr. Dolor",
      role: "Dean",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

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

  return (
    <div className="min-h-screen bg-off-white text-navy py-20 px-4 md:px-8 relative overflow-hidden">
      {backgroundElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-3xl ${element.className}`}
          variants={floatingCircleVariants}
          animate="animate"
          custom={element.custom}
        />
      ))}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-6xl mx-auto mb-20 relative">
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-9xl text-navy font-vindey font-bold text-center mb-16">
          Our Vision
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {visionStatements.map((vision, index) => (
            <motion.div
              key={vision.title}
              variants={itemVariants}
              className="bg-beige border border-navy p-6 rounded-lg backdrop-blur-sm bg-opacity-90"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}>
              <h3 className="text-2xl text-center font-vindey font-bold mb-4">
                {vision.title}
              </h3>
              <p className="text-navy text-center font-foundrey">
                {vision.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-6xl mx-auto relative">
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-9xl text-navy font-vindey font-bold text-center mb-16">
          Testimonials
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="relative">
              <Card className="bg-beige border-navy h-full backdrop-blur-sm bg-opacity-90">
                <CardContent className="pt-6">
                  <Quote className="text-navy mb-4 h-6 w-6" />
                  <p className="mb-6 text-navy font-foundrey italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold font-vindey">
                      {testimonial.author}
                    </p>
                    <p className="text-sm font-semibold text-navy font-vindey">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Vision;
