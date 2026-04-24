"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 120;

const currentFrame = (index: number) => {
  // Format index to match "frame_000_delay-0.066s.png"
  const paddedIndex = index.toString().padStart(3, "0");
  return `/sequence/frame_${paddedIndex}_delay-0.066s.png`;
};

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    let loadedImages = 0;
    const imgArray: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedImages++;
        if (loadedImages === FRAME_COUNT) {
          setImagesLoaded(true);
        }
      };
      imgArray.push(img);
    }
    setImages(imgArray);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Initial draw
  useEffect(() => {
    if (imagesLoaded && images.length > 0 && canvasRef.current) {
      renderFrame(0);
    }
  }, [imagesLoaded]);

  // Update canvas on scroll
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (imagesLoaded) {
      renderFrame(Math.floor(latest));
    }
  });

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const img = images[index];
    if (!img) return;

    // Use object-fit: cover logic for canvas
    const canvasAspect = canvas.width / canvas.height;
    const imgAspect = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasAspect > imgAspect) {
      drawHeight = canvas.width / imgAspect;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgAspect;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    // Clear canvas before drawing to avoid artifacts with transparency if any
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Redraw current frame
        if (imagesLoaded) {
          renderFrame(Math.floor(frameIndex.get()));
        }
      }
    };

    handleResize(); // initial set
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded]);

  return (
    <section id="about" ref={containerRef} className="relative w-full h-[500vh] bg-[#0a0a0a]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-white/50 font-mono text-sm tracking-widest z-50">
            LOADING ASSETS...
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover opacity-90 mix-blend-lighten"
        />
        <Overlay containerRef={containerRef} />
      </div>
    </section>
  );
}
