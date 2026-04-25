"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiDatabase, FiPieChart, FiCpu, FiCode } from "react-icons/fi";

const SKILL_CATEGORIES = [
  {
    title: "Data Engineering",
    icon: <FiDatabase />,
    skills: [
      { name: "SQL (PostgreSQL, MySQL)", level: 95 },
      { name: "Python (Pandas, NumPy)", level: 90 },
      { name: "Data Warehousing", level: 80 }
    ]
  },
  {
    title: "Analysis & ML",
    icon: <FiCpu />,
    skills: [
      { name: "Machine Learning (Scikit-Learn)", level: 85 },
      { name: "NLP & Predictive Modeling", level: 80 },
      { name: "Statistical Analysis", level: 90 }
    ]
  },
  {
    title: "Visualization",
    icon: <FiPieChart />,
    skills: [
      { name: "Power BI / Tableau", level: 92 },
      { name: "Plotly / Matplotlib", level: 88 },
      { name: "Interactive Dashboards", level: 95 }
    ]
  },
  {
    title: "Development",
    icon: <FiCode />,
    skills: [
      { name: "Streamlit / Flask", level: 85 },
      { name: "Git / GitHub", level: 90 },
      { name: "Excel (VBA/Macros)", level: 95 }
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="skills" className="relative z-20 bg-[#0a0a0a] py-32 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Toolbox.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-xs uppercase tracking-widest text-neutral-500">
                      <span>{skill.name}</span>
                      <span className="text-neutral-400">{skill.level}%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        className="h-full bg-gradient-to-r from-blue-500 to-emerald-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-20 flex flex-wrap justify-center gap-4"
        >
          {["NLP", "Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "Matplotlib", "Seaborn", "MySQL", "PostgreSQL", "Git", "Excel"].map((badge, i) => (
            <span
              key={badge}
              className="px-5 py-2 glass rounded-full text-sm text-neutral-300 hover:text-white hover:bg-white/10 transition-all border border-white/5 cursor-default"
            >
              {badge}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
