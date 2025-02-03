"use client"
import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { MagazineScrollCard } from "./MagazineScrollCard"

const magazines = [
    {
        id: 1,
        title1: "Unleash the beauty of",
        title2: "Horizon Magazine",
        description:
            "Laborum ad aliquip qui deserunt sint consectetur ex anim culpa laboris. Voluptate fugiat ex consectetur non reprehenderit pariatur duis consectetur. Tempor nisi Lorem eu dolore irure sint adipisicing eu. Lorem nisi ad nisi reprehenderit laboris duis elit do enim. Veniam officia excepteur voluptate labore culpa ex magna nLabore aliqua commodo ex nostrud ea occaecat. Ea aliquip esse cillum excepteur ut. Voluptate ex non adipisicing minim proident officia pariatur sunt labore anim commodo id non. Est eiusmod sit Lorem qui ad esse elit excepteur dolore.isi.",
        coverImage: "/images/horizon1.png",
        pdfUrl: "https://drive.google.com/file/d/1DkOX2zNmrr1V5T5FHyq9OKV6AB9LR28R/view?usp=drive_link",
        googleDriveId: "1DkOX2zNmrr1V5T5FHyq9OKV6AB9LR28R",
    },
    {
        id: 2,
        title1: "Unleash the beauty of",
        title2: "Horizon Magazine",
        description:
            "Laborum ad aliquip qui deserunt sint consectetur ex anim culpa laboris. Voluptate fugiat ex consectetur non reprehenderit pariatur duis consectetur. Tempor nisi Lorem eu dolore irure sint adipisicing eu. Lorem nisi ad nisi reprehenderit laboris duis elit do enim. Veniam officia excepteur voluptate labore culpa ex magna nLabore aliqua commodo ex nostrud ea occaecat. Ea aliquip esse cillum excepteur ut. Voluptate ex non adipisicing minim proident officia pariatur sunt labore anim commodo id non. Est eiusmod sit Lorem qui ad esse elit excepteur dolore.isi.",
        coverImage: "/images/horizon2.png",
        pdfUrl: "https://drive.google.com/file/d/1CsNWKXMzueItXV9xB1m2NOcOwel0qV5n/view?usp=drive_link",
        googleDriveId: "1CsNWKXMzueItXV9xB1m2NOcOwel0qV5n",
    },
    {
        id: 3,
        title1: "Unleash the beauty of",
        title2: "Horizon Magazine",
        description:
            "Laborum ad aliquip qui deserunt sint consectetur ex anim culpa laboris. Voluptate fugiat ex consectetur non reprehenderit pariatur duis consectetur. Tempor nisi Lorem eu dolore irure sint adipisicing eu. Lorem nisi ad nisi reprehenderit laboris duis elit do enim. Veniam officia excepteur voluptate labore culpa ex magna nLabore aliqua commodo ex nostrud ea occaecat. Ea aliquip esse cillum excepteur ut. Voluptate ex non adipisicing minim proident officia pariatur sunt labore anim commodo id non. Est eiusmod sit Lorem qui ad esse elit excepteur dolore.isi.",
        coverImage: "/images/horizon3.png",
        pdfUrl: "#",
        googleDriveId: "#",
    },
]

export default function Horizon() {
    const [showHorizon, setShowHorizon] = useState(false)
    const { scrollYProgress } = useScroll()
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
    const [firstAnimation, setFirstAnimation] = useState(true)
    const [comingSoonFirstAnimation, setComingSoonFirstAnimation] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setShowHorizon(true), 100)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div>
            <main className="min-h-screen p-8 bg-[#F1F0EA]">
                <motion.div
                    style={{ opacity }}
                    className="text-6xl text-bold text-center mt-2 font-foundry mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    HORIZON COLLECTION
                </motion.div>

                <div>
                    <motion.div
                        className="text-4xl font-bold text-center mb-2 mt-8"
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <motion.span
                            className="inline-block font-horizon"
                            animate={{
                                scale: firstAnimation ? [9, 1.1, 1] : [1, 1.1, 1],
                                rotate: [0, 1.5, -1.5, 0],
                            }}
                            transition={{
                                duration: firstAnimation ? 3 : 5,
                                repeat: firstAnimation ? 0 : Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                            }}
                            onAnimationComplete={() => setFirstAnimation(false)}
                        >
                            Horizon 5.0
                        </motion.span>
                        <motion.p
                            className="text-2xl mt-4 font-foundry"
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                scale: comingSoonFirstAnimation ? [1.2, 1.2, 1.2] : [1.2, 1.2, 1.2],
                                rotate: [0, 1, -1, 0],
                            }}
                            transition={{
                                duration: comingSoonFirstAnimation ? 1.5 : 1.5,
                                repeat: comingSoonFirstAnimation ? 0 : 0,
                                repeatType: "reverse",
                                delay: 0.5,
                            }}
                            onAnimationComplete={() => setComingSoonFirstAnimation(false)}
                        >
                            Coming Soon!!
                        </motion.p>
                    </motion.div>
                </div>
                <motion.div
                    style={{ opacity }}
                    className="text-2xl text-center mt-2 font-foundry mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    Explore our previous editions while waiting for Horizon 5.0
                </motion.div>

                {magazines.map((magazine) => (
                    <MagazineScrollCard key={magazine.id} magazine={magazine} />
                ))}
            </main>
        </div>
    )
}

