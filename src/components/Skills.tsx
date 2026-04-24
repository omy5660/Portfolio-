"use client";

import React from "react";
import { motion } from "framer-motion";

const SKILLS = [
  { name: "SQL", level: 90 },
  { name: "Python", level: 85 },
  { name: "Power BI", level: 80 },
  { name: "Machine Learning", level: 75 },
  { name: "NLP", level: 70 },
  { name: "Data Visualization", level: 85 },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="skills" className="relative z-20 bg-[#0a0a0a] py-32 px-6 md:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Competencies</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light">
            Tools and technologies I use to extract insights and build predictive models.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
        >
          {SKILLS.map((skill, index) => (
            <motion.div key={index} variants={itemVariants} className="group cursor-pointer">
              <div className="flex justify-between mb-3">
                <span className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </span>
                <span className="text-sm font-mono text-neutral-500 group-hover:text-emerald-400 transition-colors">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full group-hover:shadow-[0_0_15px_rgba(52,211,153,0.5)] transition-shadow duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Skill Badges */}
        <div className="mt-24 flex flex-wrap justify-center gap-4">
          {["NLP", "Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "Matplotlib", "Seaborn", "MySQL", "PostgreSQL", "Git", "Excel"].map((badge, i) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="px-5 py-2 glass rounded-full text-sm text-neutral-300 hover:text-white hover:bg-white/10 transition-all border border-white/5"
            >
              {badge}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
