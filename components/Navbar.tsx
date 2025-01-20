"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      className="bg-off-white shadow-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 md:flex-1">
            <div className="hidden md:block">
              <a href="/">
                <img src="/images/logo.png" alt="CEV Logo" className="h-10" />
              </a>
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 md:hidden">
            <a href="/">
              <img src="/images/logo.png" alt="CEV Logo" className="h-10" />
            </a>
          </div>

          <div className="hidden md:flex items-center justify-end flex-1 space-x-8">
            <a
              href="/resources"
              className="font-vindey text-cnavy text-xl hover:text-blue transition-colors">
              RESOURCES
            </a>
            <a
              href="/alumni"
              className="font-vindey text-cnavy text-xl hover:text-blue transition-colors">
              ALUMNI
            </a>
            <a
              href="/events"
              className="font-vindey text-cnavy text-xl hover:text-blue transition-colors">
              EVENTS
            </a>
            <a
              href="/team"
              className="font-vindey text-cnavy text-xl hover:text-blue transition-colors">
              TEAM
            </a>
            <a
              href="/"
              className="font-vindey text-cnavy text-xl hover:text-blue transition-colors">
              HOME
            </a>
          </div>

          <div className="w-8 md:hidden" />

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-navy hover:text-blue p-2"
              aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isMenuOpen ? "auto" : 0 }}
        className="md:hidden overflow-hidden">
        <div className="px-2 text-center pt-2 pb-3 space-y-1 bg-off-white">
          <a
            href="/resources"
            className="block px-3 py-2 font-vindey text-navy text-xl hover:text-blue">
            RESOURCES
          </a>
          <div className="border-b border-navy mx-8" />
          <a
            href="/alumni"
            className="block px-3 py-2 font-vindey text-navy text-xl hover:text-blue">
            ALUMNI
          </a>
          <div className="border-b border-navy mx-8" />
          <a
            href="/events"
            className="block px-3 py-2 font-vindey text-navy text-xl hover:text-blue">
            EVENTS
          </a>
          <div className="border-b border-navy mx-8" />
          <a
            href="/team"
            className="block px-3 py-2 font-vindey text-navy text-xl hover:text-blue">
            TEAM
          </a>
          <div className="border-b border-navy mx-8" />
          <a
            href="/"
            className="block px-3 py-2 font-vindey text-navy text-xl hover:text-blue">
            HOME
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
