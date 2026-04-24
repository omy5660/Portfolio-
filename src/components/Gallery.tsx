"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const GALLERY_IMAGES = [
  { id: 1, src: "/media__1776882554906.jpg", alt: "Data Analysis Workflow", span: "md:col-span-3 md:row-span-2" },
  { id: 2, src: "/media__1776882555139.jpg", alt: "Data Dashboard on Monitor", span: "md:col-span-2 md:row-span-2" },
  { id: 3, src: "/media__1776882555186.jpg", alt: "Business Analysis on Laptop", span: "md:col-span-1 md:row-span-2" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative z-20 bg-[#0a0a0a] py-32 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Visual Highlights
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer ${img.span} glass`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
