"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      // Using your direct email. Formspree will send you a one-time activation email 
      // after the first submission. 
      const response = await fetch("https://formspree.io/omy14416@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        const data = await response.json();
        console.error("Form error:", data);
      }
    } catch (error) {
      console.error("Form submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <section id="contact" className="relative z-20 bg-[#0a0a0a] py-40 px-6 md:px-24 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight text-white">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Connect.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Info Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.p variants={itemVariants} className="text-xl text-neutral-400 font-light leading-relaxed max-w-md">
              Have a project in mind or just want to chat? I'm always open to new opportunities and interesting collaborations.
            </motion.p>

            <div className="space-y-8">
              {[
                { icon: <FiMail />, label: "Email", value: "omy14416@gmail.com", href: "mailto:omy14416@gmail.com" },
                { icon: <FiPhone />, label: "Phone", value: "+91 9373994518", href: "tel:9373994518" },
                { icon: <FiMapPin />, label: "Location", value: "Remote / Open to Relocation", href: null },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-blue-400 group-hover:bg-blue-400 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-bold mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-xl text-white hover:text-blue-400 transition-colors font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-xl text-white font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="glass p-10 rounded-[2.5rem] border border-white/10 relative z-10">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-8"
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold ml-1">Your Name</label>
                        <input
                          required
                          name="name"
                          placeholder="John Doe"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all placeholder:text-neutral-600"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold ml-1">Email Address</label>
                        <input
                          required
                          type="email"
                          name="email"
                          placeholder="john@example.com"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all placeholder:text-neutral-600"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-neutral-500 font-bold ml-1">Message</label>
                      <textarea
                        required
                        name="message"
                        rows={5}
                        placeholder="Tell me about your project..."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all resize-none placeholder:text-neutral-600"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group relative overflow-hidden rounded-2xl py-5 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-500 disabled:opacity-50"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Send Message <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </span>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-5xl text-emerald-500">
                      <FiCheckCircle />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-bold text-white">Message Sent!</h3>
                      <p className="text-neutral-400">Thanks for reaching out. I'll get back to you shortly.</p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-blue-400 font-bold hover:text-blue-300 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* Decorative Card Shadow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 blur-3xl -z-10 rounded-[3rem]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
