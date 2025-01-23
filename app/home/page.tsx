"use client";
import Vision from "@/components/home/vision";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative">
      <motion.div
        className="absolute w-full z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <Navbar />
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 1.2 }}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-off-white/50 p-6 rounded-xl max-w-4xl w-full mx-4">
          <h1 className="text-4xl md:text-5xl font-horizon text-beige leading-tight mb-2">
            Bridging Innovation Across
            <span className="block text-green">
              <p className="text-navy">Finance,</p>
              <p className="text-green">Technology,</p>
              <p className="text-navy">Design</p>
            </span>
          </h1>
          <p className="text-lg md:text-xl font-foundrey text-navy/80 max-w-2xl mx-auto">
            A collaborative space where interdisciplinary minds converge to
            challenge boundaries, spark creativity, and drive transformative
            solutions.
          </p>
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row">
        <motion.section
          className="relative w-full h-[33.333vh] md:h-screen md:w-1/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <video
            className="w-full h-full object-cover aspect-[9/16]"
            autoPlay
            muted
            loop
            playsInline>
            <source src="/videos/design.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}></motion.div>
        </motion.section>

        <motion.section
          className="relative w-full h-[33.333vh] md:h-screen md:w-1/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <video
            className="w-full h-full object-cover aspect-[9/16]"
            autoPlay
            muted
            loop
            playsInline>
            <source src="/videos/tech.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}></motion.div>
        </motion.section>

        <motion.section
          className="relative w-full h-[33.333vh] md:h-screen md:w-1/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}>
          <video
            className="w-full h-full object-cover aspect-[9/16]"
            autoPlay
            muted
            loop
            playsInline>
            <source src="/videos/finance.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}></motion.div>
        </motion.section>
      </div>
      {/* <Vision /> */}
    </main>
  );
}
