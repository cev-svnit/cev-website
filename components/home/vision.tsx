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

  return (
    <div className="min-h-screen bg-off-white text-navy py-20 px-4 md:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-6xl mx-auto mb-20">
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-horizon text-center mb-16">
          Our Vision
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {visionStatements.map((vision, index) => (
            <motion.div
              key={vision.title}
              variants={itemVariants}
              className="bg-beige border border-navy p-6 rounded-lg">
              <h3 className="text-2xl text-center font-horizon mb-4">{vision.title}</h3>
              <p className="text-navy text-center font-foundrey">{vision.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-6xl mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-horizon text-center mb-16">
          Testimonials
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative">
              <Card className="bg-beige border-navy h-full">
                <CardContent className="pt-6">
                  <Quote className="text-navy mb-4 h-6 w-6" />
                  <p className="mb-6 text-navy font-foundrey italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold font-vindey">{testimonial.author}</p>
                    <p className="text-sm font-semibold text-navy font-vindey">{testimonial.role}</p>
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
