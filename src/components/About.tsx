"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative z-20 bg-[#0a0a0a] py-32 px-6 md:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-block w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 mb-4" />
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
            Beyond the Data.
          </h2>
          <p className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed">
            I am a passionate <span className="text-white font-medium">Data Analyst</span> driven by the intersection of business strategy and statistical modeling.
          </p>
          <p className="text-lg text-neutral-500 font-light leading-relaxed">
            With a strong foundation in <span className="text-white font-medium">SQL, Python, and Machine Learning</span>, I focus on turning complex, unstructured datasets into clear, actionable narratives. Whether it's predicting trends, detecting anomalies, or building interactive dashboards, I thrive on solving hard problems with data-driven precision.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-8"
          >
            <a href="#contact" className="text-white font-medium uppercase tracking-widest text-sm border-b border-white/30 pb-1 hover:border-white transition-colors">
              Get in touch
            </a>
          </motion.div>
        </motion.div>

        {/* Image Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden glass border border-white/10"
        >
          <Image
            src="/profile_placeholder_1776877743130.png"
            alt="Om Arun Yadav"
            fill
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
