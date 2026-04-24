"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative z-20 bg-[#0a0a0a] py-40 px-6 md:px-24 overflow-hidden">
      <div className="absolute inset-0 bg-blue-500/5 blur-[150px] rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 relative">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">great.</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 mb-8 font-light leading-relaxed">
            I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-neutral-500 font-medium uppercase tracking-wider">Email</p>
              <a href="mailto:omy14416@gmail.com" className="text-white hover:text-blue-400 transition-colors text-lg">omy14416@gmail.com</a>
            </div>
            <div>
              <p className="text-sm text-neutral-500 font-medium uppercase tracking-wider">Phone</p>
              <a href="tel:9373994518" className="text-white hover:text-blue-400 transition-colors text-lg">+91 9373994518</a>
            </div>
            <div>
              <p className="text-sm text-neutral-500 font-medium uppercase tracking-wider">Location</p>
              <p className="text-white text-lg">Remote / Open to Relocation</p>
            </div>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 glass p-8 rounded-3xl"
        >
          <form className="flex flex-col gap-6">
            <div className="group relative">
              <input
                type="text"
                id="name"
                required
                className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-blue-400 peer transition-colors"
              />
              <label htmlFor="name" className="absolute left-0 top-3 text-neutral-500 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-400 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-white">
                Your Name
              </label>
            </div>
            <div className="group relative">
              <input
                type="email"
                id="email"
                required
                className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-emerald-400 peer transition-colors"
              />
              <label htmlFor="email" className="absolute left-0 top-3 text-neutral-500 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-emerald-400 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-white">
                Email Address
              </label>
            </div>
            <div className="group relative mt-2">
              <textarea
                id="message"
                required
                rows={4}
                className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-blue-400 peer transition-colors resize-none"
              />
              <label htmlFor="message" className="absolute left-0 top-3 text-neutral-500 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-400 peer-valid:-top-4 peer-valid:text-xs peer-valid:text-white">
                Message
              </label>
            </div>
            <button
              type="button"
              className="mt-4 w-full py-4 bg-white text-black font-bold text-lg rounded-xl hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
