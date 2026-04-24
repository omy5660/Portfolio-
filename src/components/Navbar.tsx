"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-24 pointer-events-none"
    >
      <a href="#" className="text-white font-extrabold text-2xl tracking-tighter mix-blend-difference pointer-events-auto cursor-pointer select-none hover:opacity-80 transition-opacity">
        OAY.
      </a>
      <div className="flex gap-8 text-white/70 text-sm font-medium pointer-events-auto mix-blend-difference uppercase tracking-widest">
        <a href="#about" className="hover:text-emerald-400 transition-colors duration-300">About</a>
        <a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Projects</a>
        <a href="#contact" className="hover:text-emerald-400 transition-colors duration-300">Contact</a>
      </div>
    </motion.nav>
  );
}
