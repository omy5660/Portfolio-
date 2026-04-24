"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { RefObject } from "react";

export default function Overlay({ containerRef }: { containerRef: RefObject<HTMLElement> }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Section 1: Hero (0% to 20%)
  const opacity1 = useTransform(smoothProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(smoothProgress, [0, 0.15], [50, -100]);
  const scale1 = useTransform(smoothProgress, [0, 0.15], [1, 0.9]);

  // Section 2: Statement (30% to 50%)
  const opacity2 = useTransform(smoothProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(smoothProgress, [0.2, 0.4], [50, -50]);

  // Section 3: Tagline (60% to 80%)
  const opacity3 = useTransform(smoothProgress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(smoothProgress, [0.5, 0.8], [50, -50]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Hero Section */}
      <motion.div
        style={{ opacity: opacity1, y: y1, scale: scale1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-extrabold tracking-tighter text-white drop-shadow-2xl"
        >
          Om Arun Yadav.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-6 text-xl md:text-3xl font-light text-neutral-300 drop-shadow-lg"
        >
          Analytical <span className="text-gradient font-medium">Data Analyst</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-10 flex gap-4 pointer-events-auto"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 glass text-white rounded-full font-semibold hover:bg-white/10 hover:scale-105 transition-all"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Statement Section */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-y-0 left-10 md:left-24 flex flex-col justify-center"
      >
        <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white max-w-2xl drop-shadow-2xl leading-tight">
          Transforming data into <br />
          <span className="text-gradient">actionable insights.</span>
        </h2>
        <div className="w-24 h-1 mt-8 bg-gradient-to-r from-blue-500 to-emerald-400" />
      </motion.div>

      {/* Tagline Section */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-y-0 right-10 md:right-24 flex flex-col justify-center text-right items-end"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-xl drop-shadow-2xl leading-tight">
          SQL, Python, Power BI, <br />& Machine Learning.
        </h2>
        <div className="w-24 h-1 mt-8 bg-gradient-to-r from-blue-500 to-emerald-400" />
      </motion.div>
    </div>
  );
}
