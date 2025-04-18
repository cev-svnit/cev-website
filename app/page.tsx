"use client";
import Footer from "@/components/Footer";
import InfoSection from "@/components/home/InfoSection";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative pt-16">
      <motion.div
        className="w-full z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <Navbar />
      </motion.div>

      <div className="relative h-screen">
        <motion.div
          className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center px-4 sm:px-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}>
          <motion.div
            className="text-center bg-off-white/80 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-xl w-full max-w-4xl mx-auto shadow-lg"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.12)",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                type: "spring",
                bounce: 0.4,
              },
            }}>
            <motion.h1
              className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-montserrat text-black leading-tight mb-4 font-semibold tracking-tight"
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 1.5,
                  duration: 0.5,
                },
              }}>
              Bridging Innovation Across
              <span className="block mt-2">
                <span className="inline-flex items-center gap-1 sm:gap-2 flex-wrap justify-center">
                  <motion.span
                    className="text-[#000080] font-medium"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        delay: 1.7,
                        duration: 0.5,
                      },
                    }}>
                    Finance
                  </motion.span>
                  <span className="text-black">,</span>
                  <motion.span
                    className="text-green font-bold"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        delay: 1.9,
                        duration: 0.5,
                      },
                    }}>
                    Technology
                  </motion.span>
                  <span className="text-black">,</span>
                  <motion.span
                    className="text-[#000080] font-medium"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        delay: 2.1,
                        duration: 0.5,
                      },
                    }}>
                    Design
                  </motion.span>
                </span>
              </span>
            </motion.h1>
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl font-montserrat text-navy/90 max-w-2xl mx-auto leading-relaxed tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 2.3,
                  duration: 0.5,
                },
              }}>
              A collaborative space where interdisciplinary minds converge to
              challenge boundaries, spark creativity, and drive transformative
              solutions.
            </motion.p>
          </motion.div>
        </motion.div>

        <div className="flex flex-col">
          <div className="hidden md:flex md:flex-row">
            <motion.section
              className="relative w-full h-screen md:w-1/3"
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
            </motion.section>

            <motion.section
              className="relative w-full h-screen md:w-1/3"
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
            </motion.section>

            <motion.section
              className="relative w-full h-screen md:w-1/3"
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
            </motion.section>
          </div>

          <motion.section
            className="md:hidden absolute w-full h-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline>
              <source src="/videos/finance.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.section>
        </div>
      </div>
      <InfoSection />
      <Footer />
    </main>
  );
}
