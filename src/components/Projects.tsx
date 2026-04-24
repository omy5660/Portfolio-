"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiX, FiCheckCircle, FiCpu, FiLayout, FiDatabase, FiGithub, FiExternalLink } from "react-icons/fi";

const PROJECTS = [
  {
    id: 3,
    title: "Fashion Recommendation System",
    description: "Generative AI–powered fashion recommendation system designed to solve real-world challenges in online fashion retail, especially size inconsistency across brands.",
    cover: "/fashion_output_4.png",
    tags: ["GenAI", "Python", "SQL", "Streamlit"],
    color: "from-orange-500/20 to-red-500/20",
    github: "https://github.com/omy5660/Ai-fashion-outfit-generator-project",
    caseStudy: {
      images: [
        "/fashion_output_1.png",
        "/fashion_output_2.png",
        "/fashion_output_3.png",
        "/fashion_output_4.png"
      ],
      overview: "This project presents a Generative AI–powered fashion recommendation system designed to solve real-world challenges in online fashion retail, especially size inconsistency across brands.",
      features: [
        "Guided multi-step user onboarding",
        "Cross-brand size & fit intelligence",
        "AI-generated outfit descriptions",
        "AI-generated outfit images",
        "Interactive visual analytics dashboard",
        "Occasion & weather-aware recommendations",
        "Privacy-first, session-based personalization"
      ],
      workflow: [
        "User logs in or selects demo mode",
        "Step-by-step onboarding collects Personal details, Body measurements, Style preferences, Preferred brands, Occasion & weather context",
        "System computes cross-brand size mapping",
        "Generative AI produces Outfit description (text) and Outfit visualization (image)",
        "Results are displayed in a multi-tab Streamlit dashboard"
      ],
      architecture: [
        { file: "app.py", desc: "Main Streamlit application" },
        { file: "utils/size_mapper.py", desc: "Cross-brand size logic" },
        { file: "utils/prompt_engine.py", desc: "LLM prompt construction" },
        { file: "utils/image_gen.py", desc: "AI image generation" },
        { file: "data/brand_sizes.csv", desc: "Brand-specific size charts" }
      ],
      technologies: [
        { component: "Frontend", tech: "Streamlit" },
        { component: "Language", tech: "Python" },
        { component: "LLM (Text)", tech: "GPT-4o-mini" },
        { component: "LLM (Image)", tech: "GPT Image Model" },
        { component: "Visualization", tech: "Plotly" }
      ],
      modules: [
        { name: "User Onboarding", desc: "Multi-step guided form for personal details and style preferences." },
        { name: "Cross-Brand Size Intelligence", desc: "Brand-specific size charts with automatic size mapping." },
        { name: "GenAI Outfit Engine", desc: "Prompt-driven outfit generation with occasion & weather-aware styling." },
        { name: "Interactive Dashboard", desc: "Visual size comparison, history, and profile viewer." }
      ]
    }
  },
  {
    id: 2,
    title: "Event Management System",
    description: "Designed a normalized relational database and optimized complex SQL queries for analytics and reports.",
    cover: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
    tags: ["MySQL", "PHP", "Database Design", "Analytics"],
    color: "from-emerald-500/20 to-teal-500/20",
    caseStudy: null
  },
  {
    id: 1,
    title: "Financial Dashboard & Analysis",
    description: "Built an interactive financial dashboard using Power BI and SQL to track KPIs and provide actionable insights for a retail business.",
    cover: "/media__1776882555139.jpg",
    tags: ["Power BI", "SQL", "Excel", "DAX"],
    color: "from-blue-500/20 to-indigo-500/20",
    caseStudy: null
  },
];

function ProjectModal({ project, onClose }: { project: any, onClose: () => void }) {
  if (!project || !project.caseStudy) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-[#0a0a0a]/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl glass border border-white/10 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 px-8 py-6 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md flex justify-between items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{project.title}</h3>
            <div className="flex gap-4">
              <div className="flex gap-2">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest font-semibold text-blue-400">
                    {tag}
                  </span>
                ))}
              </div>
              {project.github && (
                <div className="flex gap-3 ml-4 border-l border-white/10 pl-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1 text-xs">
                    <FiGithub /> Code
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1 text-xs">
                    <FiExternalLink /> Live Project
                  </a>
                </div>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {/* Images Grid */}
          {project.caseStudy.images && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {project.caseStudy.images.map((img: string, i: number) => (
                <div key={i} className="aspect-video rounded-2xl overflow-hidden border border-white/10 relative group">
                  <img
                    src={img}
                    alt={`Screenshot ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback for missing images
                      e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bbda38a5f85d?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <FiLayout className="text-blue-400" />
                  </span>
                  Overview
                </h4>
                <p className="text-neutral-400 leading-relaxed text-lg font-light">
                  {project.caseStudy.overview}
                </p>
              </section>

              <section>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <FiCheckCircle className="text-emerald-400" />
                  </span>
                  Key Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.caseStudy.features.map((feature: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors">
                      <FiCheckCircle className="text-emerald-400 mt-1 flex-shrink-0" />
                      <span className="text-neutral-300 text-sm font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                    <FiArrowUpRight className="text-orange-400" />
                  </span>
                  System Workflow
                </h4>
                <div className="space-y-6 relative before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
                  {project.caseStudy.workflow.map((step: string, i: number) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#0a0a0a] border border-white/20 flex items-center justify-center text-xs font-bold text-white z-10">
                        {i + 1}
                      </div>
                      <p className="text-neutral-400 text-sm font-light leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                    <FiCpu className="text-purple-400" />
                  </span>
                  Functional Modules & Dashboard
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.caseStudy.modules.map((mod: any, i: number) => (
                    <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-white/20 transition-all">
                      <h5 className="text-white font-bold mb-2 group-hover:text-blue-400 transition-colors">{mod.name}</h5>
                      <p className="text-neutral-400 text-xs font-light leading-relaxed">{mod.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-8">
              <div className="p-8 rounded-3xl bg-blue-500/5 border border-blue-500/10">
                <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <FiDatabase className="text-blue-400" />
                  Architecture
                </h4>
                <div className="space-y-4">
                  {project.caseStudy.architecture.map((item: any, i: number) => (
                    <div key={i} className="flex flex-col">
                      <code className="text-blue-400 text-[10px] font-mono mb-1">{item.file}</code>
                      <span className="text-neutral-500 text-[10px]">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/10">
                <h4 className="text-lg font-bold text-white mb-6">Setup Guide</h4>
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-neutral-400 text-[10px] mb-2 uppercase tracking-widest font-semibold">Install</span>
                    <code className="text-emerald-400 text-[10px] font-mono bg-white/5 p-2 rounded">pip install -r requirements.txt</code>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-neutral-400 text-[10px] mb-2 uppercase tracking-widest font-semibold">Run</span>
                    <code className="text-emerald-400 text-[10px] font-mono bg-white/5 p-2 rounded">streamlit run app.py</code>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h4 className="text-lg font-bold text-white mb-6">Technologies</h4>
                <div className="space-y-4">
                  {project.caseStudy.technologies.map((tech: any, i: number) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-neutral-400 text-[10px] uppercase tracking-wider">{tech.component}</span>
                      <span className="text-white text-[10px] font-semibold px-2 py-1 bg-white/5 rounded-md border border-white/10">
                        {tech.tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="relative z-20 bg-[#0a0a0a] py-32 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
              Selected Works
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-400" />
          </div>
          <p className="text-neutral-400 max-w-md font-light text-lg">
            A showcase of my recent analytical projects, focusing on machine learning, database optimization, and actionable insights.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              onClick={() => project.caseStudy && setSelectedProject(project)}
              className={`group relative h-[450px] rounded-3xl overflow-hidden glass transition-all duration-500 flex flex-col justify-end p-8 ${project.caseStudy ? 'cursor-pointer hover:border-white/30' : ''}`}
            >
              {/* Background Cover Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 mix-blend-overlay`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              </div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold text-white bg-white/10 rounded-full border border-white/10 backdrop-blur-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.caseStudy && (
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0 border border-white/20">
                      <FiArrowUpRight className="text-white text-xl" />
                    </div>
                  )}
                </div>

                <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-neutral-300 font-light text-sm line-clamp-2 mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                    {project.description}
                  </p>

                  {project.caseStudy && (
                    <div className="flex items-center gap-2 text-blue-400 font-medium text-sm">
                      <span className="relative overflow-hidden group/link">
                        View Project Guide
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-400 transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
                      </span>
                      <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

