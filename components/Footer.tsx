"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const linkHoverVariants = {
    hover: { scale: 1.05, x: 10, transition: { duration: 0.2 } },
  };

  return (
    <footer className="w-full bg-[#FAFAFA] border-t border-navy/5">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-16 sm:gap-12 sm:grid-cols-3">
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center mb-4 sm:mb-0">
            <motion.div 
              className="mb-8 transition-transform duration-300 hover:scale-105"
              whileHover={{ 
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px"
              }}>
              <Image
                src="/images/logo.png"
                alt="Company Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </motion.div>
            <motion.div
              className="font-montserrat space-y-3 text-center"
              variants={itemVariants}>
              <motion.p
                className="text-2xl sm:text-3xl text-[#000080] font-semibold tracking-tight"
                whileHover={{ scale: 1.02, y: -2 }}>
                Wonder.
              </motion.p>
              <motion.p
                className="text-2xl sm:text-3xl text-green font-semibold tracking-tight"
                whileHover={{ scale: 1.02, y: -2 }}>
                Think.
              </motion.p>
              <motion.p
                className="text-2xl sm:text-3xl text-[#000080] font-semibold tracking-tight"
                whileHover={{ scale: 1.02, y: -2 }}>
                Create.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <h3 className="font-montserrat text-[#000080] text-xl font-semibold mb-8 tracking-tight">
              Quick Links
            </h3>
            <ul className="space-y-1 sm:space-y-2 font-vindey text-center">
              {["Home", "Team", "Events", "Alumni", "Resources", "Horizon"].map(
                (item, index) => (
                  <motion.li key={item} variants={itemVariants}>
                    <motion.div 
                      whileHover={{ x: 5 }} 
                      className="transition-colors duration-300">
                      <Link
                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                        className="text-navy/70 hover:text-green font-montserrat text-base font-medium inline-flex items-center gap-1 group">
                        {item}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          →
                        </span>
                      </Link>
                    </motion.div>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <h3 className="font-montserrat text-[#000080] text-xl font-semibold mb-8 tracking-tight">
              Connect With Us
            </h3>
            <ul className="space-y-4 text-center">
              {[
                { name: "LinkedIn", href: "https://www.linkedin.com/company/cutting-edge-visionaries", icon: Linkedin },
                { name: "Instagram", href: "https://www.instagram.com/cevsvnit", icon: Instagram },
                { name: "Email", href: "mailto:contact@example.com", icon: Mail },
                { name: "SVNIT", href: "https://svnit.ac.in", icon: ExternalLink },
              ].map((item) => (
                <motion.li key={item.name} variants={itemVariants}>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="transition-colors duration-300">
                    <Link
                      href={item.href}
                      className="text-navy/70 hover:text-green font-montserrat text-base font-medium inline-flex items-center gap-2 group"
                      target={item.name !== "Email" ? "_blank" : undefined}
                      rel={item.name !== "Email" ? "noopener noreferrer" : undefined}>
                      <item.icon className="w-4 h-4" />
                      {item.name}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        →
                      </span>
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="border-t border-navy/5 bg-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}>
        <div className="container mx-auto px-6 py-8">
          <motion.h2
            className="font-montserrat text-center text-lg sm:text-xl tracking-tight"
            whileHover={{ scale: 1.02 }}>
            <motion.span className="text-[#000080] font-semibold">Cutting </motion.span>
            <motion.span className="text-green font-bold">Edge </motion.span>
            <motion.span className="text-[#000080] font-semibold">Visionaries</motion.span>
          </motion.h2>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
