"use client"
import React, { useState, useEffect } from "react"
import { ContainerScroll } from "./ui/container-scroll-animation"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface MagazineProps {
  magazine: {
    id: number
    title1: string
    title2: string
    description: string
    coverImage: string
    pdfUrl: string
    googleDriveId: string
  }
}

export function MagazineScrollCard({ magazine }: MagazineProps) {
  const [showPreview, setShowPreview] = useState(false)
  const googleDrivePreviewUrl = `https://drive.google.com/file/d/${magazine.googleDriveId}/preview`
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }


  return (
    <div className="flex flex-col overflow-hidden -mt-40">
      <ContainerScroll
        titleComponent={<div>
          <h1 className="text-4xl font-semibold text-black">{magazine.title1}<br />
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">{magazine.title2}</span>
          </h1>
        </div>}
      >
        <div className="relative h-full w-full">
          <Image
            src={magazine.coverImage || "/placeholder.svg"}
            alt={magazine.title2}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
          <button
            onClick={() => setShowPreview(true)}
            className="absolute bottom-4 right-4 bg-slate-800 text-white px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-fuchsia-500  transition-colors"
          >
            Preview
          </button>
        </div>
      </ContainerScroll>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={contentVariants}
        className="-mt-20 mb-8 px-4 md:px-0 flex flex-col items-center"
      >
        <p className="text-lg font-foundry mb-6 text-center max-w-3xl">{magazine.description}</p>
      </motion.div>

      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg w-11/12 h-5/6">
            <button
              className="absolute top-2 right-2 text-black text-2xl bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg"
              onClick={() => setShowPreview(false)}
            >
              &times;
            </button>
            <iframe src={googleDrivePreviewUrl} className="w-full h-full" allow="autoplay"></iframe>
          </div>
        </div>
      )}
    </div>
  )
}


