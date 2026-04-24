import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-20 bg-[#0a0a0a] py-12 px-6 md:px-24 border-t border-white/5 flex flex-col md:flex-row items-center justify-between">
      <p className="text-neutral-500 text-sm font-light">
        © {new Date().getFullYear()} Om Arun Yadav. All rights reserved.
      </p>
      <div className="flex gap-8 mt-6 md:mt-0">
        <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium">LinkedIn</a>
        <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium">GitHub</a>
        <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium">Twitter</a>
      </div>
    </footer>
  );
}
