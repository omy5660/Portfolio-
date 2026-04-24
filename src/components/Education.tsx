"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

const EDUCATION_DATA = [
  {
    id: 1,
    degree: "Master of Computer Applications",
    institution: "University Of Mumbai",
    year: "2024 - 2026",
    CGPA: "9.73",
  },
  {
    id: 2,
    degree: "Bachelor of Science in Information Technology",
    institution: "University Of Mumbai",
    year: "2020 - 2023",
    CGPA: "8.47",
  },
  {
    id: 3,
    degree: "Higher Secondary Education",
    institution: "R.V.Nerurkar High School",
    year: "2018 - 2020",
    percentage: "60%",
  },
  {
    id: 4,
    degree: "Secondary School Education",
    institution: "Adarsh English School",
    year: "2015 - 2018",
    percentage: "71%",
  }
];

function AnimatedScore({ value, type }: { value: string, type: "CGPA" | "percentage" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  
  const numericValue = parseFloat(value.replace('%', ''));
  const isFloat = type === "CGPA";

  useEffect(() => {
    if (isInView) {
      animate(motionValue, numericValue, {
        duration: 2,
        ease: "easeOut",
      });
    }
  }, [isInView, numericValue, motionValue]);

  const displayValue = useTransform(motionValue, (latest) => {
    return isFloat ? latest.toFixed(2) : Math.round(latest).toString();
  });

  return (
    <div className="flex items-center gap-4 mt-6 p-4 rounded-xl bg-white/5 border border-white/10 w-fit" ref={ref}>
      <div className="flex flex-col">
        <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold mb-1">
          {type === "CGPA" ? "CGPA" : "Score"}
        </span>
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 flex items-baseline">
          <motion.span>{displayValue}</motion.span>
          {type === "percentage" && <span className="text-xl ml-1 text-emerald-400">%</span>}
        </div>
      </div>
    </div>
  );
}

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="education" className="relative z-20 bg-[#0a0a0a] py-32 px-6 md:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-400" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l border-white/10 ml-4 md:ml-0"
        >
          {EDUCATION_DATA.map((edu) => (
            <motion.div key={edu.id} variants={itemVariants} className="mb-12 relative pl-8 md:pl-12">
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 -left-[9px] top-1.5 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

              <div className="glass p-8 rounded-2xl hover:border-white/20 transition-all duration-300 group">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-400/10 rounded-full mb-4 border border-emerald-400/20">
                  {edu.year}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {edu.degree}
                </h3>
                <h4 className="text-lg text-neutral-400 font-medium">
                  {edu.institution}
                </h4>
                
                {edu.CGPA && <AnimatedScore value={edu.CGPA} type="CGPA" />}
                {edu.percentage && <AnimatedScore value={edu.percentage} type="percentage" />}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
