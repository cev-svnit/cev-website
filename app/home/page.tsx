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
            className="absolute inset-0 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}>
            <motion.div
              className="h-full cursor-default flex flex-col justify-center items-center"
              whileHover={{ scale: 1.05 }}>
              <motion.h1
                className="text-3xl md:text-5xl font-horizon text-beige w-full text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}>
                Cutting
              </motion.h1>
            </motion.div>
            <motion.div
              className="absolute bottom-0 right-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}>
              <h2 className="text-xl md:text-2xl font-horizon text-beige">
                Design
              </h2>
            </motion.div>
          </motion.div>
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
            className="absolute inset-0 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}>
            <motion.div
              className="h-full cursor-default flex flex-col justify-center items-center"
              whileHover={{ scale: 1.05 }}>
              <motion.h1
                className="text-3xl md:text-5xl font-horizon text-beige w-full text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}>
                Edge
              </motion.h1>
            </motion.div>
            <motion.div
              className="absolute bottom-0 right-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}>
              <h2 className="text-xl md:text-2xl font-horizon text-beige">
                Technology
              </h2>
            </motion.div>
          </motion.div>
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
            className="absolute inset-0 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}>
            <motion.div
              className="h-full cursor-default flex flex-col justify-center items-center"
              whileHover={{ scale: 1.05 }}>
              <motion.h1
                className="text-3xl md:text-5xl font-horizon text-beige w-full text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}>
                Visionaries
              </motion.h1>
            </motion.div>
            <motion.div
              className="absolute bottom-0 right-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}>
              <h2 className="text-xl md:text-2xl font-horizon text-beige">
                Finance
              </h2>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
      <Vision />
    </main>
  );
}
