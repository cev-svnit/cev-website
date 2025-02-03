"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <footer className="w-full bg-beige">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-4 sm:py-8">
        <div className="grid grid-cols-1 gap-4 sm:gap-4 sm:grid-cols-3">
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center mb-4 sm:mb-0">
            <motion.div className="mb-2 sm:mb-4" whileHover={{ scale: 1.05 }}>
              <Image
                src="/images/logo.png"
                alt="Company Logo"
                width={100}
                height={33}
                className="object-contain"
              />
            </motion.div>
            <motion.div
              className="font-vindey space-y-0 sm:space-y-1 text-center"
              variants={itemVariants}>
              <motion.p
                className="text-2xl sm:text-5xl text-navy"
                whileHover={{ scale: 1.05 }}>
                Wonder.
              </motion.p>
              <motion.p
                className="text-2xl sm:text-5xl text-green"
                whileHover={{ scale: 1.05 }}>
                Think.
              </motion.p>
              <motion.p
                className="text-2xl sm:text-5xl text-navy"
                whileHover={{ scale: 1.05 }}>
                Create.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-vindey text-navy text-2xl sm:text-4xl mb-2 sm:mb-4 text-center">
              Links
            </h3>
            <ul className="space-y-1 sm:space-y-2 font-vindey text-center">
              {["Home", "Team", "Events", "Alumni", "Resources", "Horizon"].map(
                (item, index) => (
                  <motion.li key={item} variants={itemVariants}>
                    <motion.div whileHover="hover" variants={linkHoverVariants}>
                      <Link
                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                        className="text-green hover:opacity-80 text-base sm:text-xl inline-block">
                        {item}
                      </Link>
                    </motion.div>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-vindey text-navy text-2xl sm:text-4xl mb-2 sm:mb-4 text-center">
              Contact
            </h3>
            <ul className="space-y-1 sm:space-y-2 font-vindey text-center">
              {[
                { name: "LinkedIn", href: "https://linkedin.com" },
                { name: "Instagram", href: "https://instagram.com" },
                { name: "Email", href: "mailto:contact@example.com" },
                { name: "SVNIT", href: "mailto:contact@example.com" },
              ].map((item) => (
                <motion.li key={item.name} variants={itemVariants}>
                  <motion.div whileHover="hover" variants={linkHoverVariants}>
                    <Link
                      href={item.href}
                      className="text-green hover:opacity-80 text-base sm:text-xl inline-block">
                      {item.name}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center mt-2 sm:mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}>
        <div className="w-[90%] sm:w-[80%] border-t-2 border-green">
          <div className="container mx-auto px-4 py-2 sm:py-4">
            <motion.h2
              className="font-vindey text-navy text-center text-xl sm:text-3xl"
              whileHover={{ scale: 1.05 }}>
              <motion.span>Cutting&nbsp;</motion.span>
              <motion.span className="text-green">Edge&nbsp;</motion.span>
              <motion.span>Visionaries</motion.span>
            </motion.h2>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
