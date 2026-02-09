"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface DigitPortraitProps {
  imageSrc: string;
  width?: number;
  height?: number;
}

export default function DigitPortrait({
  imageSrc,
  width = 280,
  height = 350,
}: DigitPortraitProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const imageDataRef = useRef<ImageData | null>(null);

  const cellSize = 3; // Smaller = more detail
  const cols = Math.floor(width / cellSize);
  const rows = Math.floor(height / cellSize);

  class Particle {
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    color: string;
    digit: string;
    speed: number;
    originalX: number;
    originalY: number;

    constructor(x: number, y: number, color: string) {
      this.targetX = x;
      this.targetY = y;
      this.originalX = x;
      this.originalY = y;
      // Start from random positions
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.color = color;
      this.digit = Math.floor(Math.random() * 10).toString();
      this.speed = 0.05 + Math.random() * 0.05;
    }

    update(assembled: boolean) {
      if (assembled) {
        // Move towards target
        this.x += (this.targetX - this.x) * this.speed;
        this.y += (this.targetY - this.y) * this.speed;
      } else {
        // Scatter effect
        const targetX = Math.random() * width;
        const targetY = Math.random() * height;
        this.x += (targetX - this.x) * 0.02;
        this.y += (targetY - this.y) * 0.02;
      }

      // Randomly change digit occasionally
      if (Math.random() < 0.02) {
        this.digit = Math.floor(Math.random() * 10).toString();
      }
    }

    draw(ctx: CanvasRenderingContext2D, assembled: boolean) {
      const alpha = assembled ? 1 : 0.6;
      ctx.fillStyle = this.color.replace(")", `, ${alpha})`).replace("rgb", "rgba");
      ctx.font = `bold ${cellSize}px JetBrains Mono, monospace`;
      ctx.fillText(this.digit, this.x, this.y);
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;

    img.onload = () => {
      // Create off-screen canvas to sample image
      const offCanvas = document.createElement("canvas");
      offCanvas.width = cols;
      offCanvas.height = rows;
      const offCtx = offCanvas.getContext("2d");
      if (!offCtx) return;

      offCtx.drawImage(img, 0, 0, cols, rows);
      const imageData = offCtx.getImageData(0, 0, cols, rows);
      imageDataRef.current = imageData;

      // Create particles
      const particles: Particle[] = [];
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = (y * cols + x) * 4;
          const r = imageData.data[i];
          const g = imageData.data[i + 1];
          const b = imageData.data[i + 2];
          const a = imageData.data[i + 3];

          // Skip transparent or very dark pixels
          const brightness = (r + g + b) / 3;
          if (a > 128 && brightness > 20) {
            const color = `rgb(${r}, ${g}, ${b})`;
            particles.push(new Particle(x * cellSize, y * cellSize, color));
          }
        }
      }

      particlesRef.current = particles;
      setIsLoaded(true);
    };

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [imageSrc, cols, rows, cellSize, width, height]);

  useEffect(() => {
    if (!isLoaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let assembled = true;
    let assembleProgress = 0;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        particle.update(assembled);
        particle.draw(ctx, assembled);
      });

      if (isHovered) {
        assembled = false;
      } else {
        assembled = true;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isLoaded, isHovered, width, height]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl rounded-full" />

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className="relative z-10 cursor-pointer"
          style={{ imageRendering: "pixelated" }}
        />

        {/* Loading state */}
        {!isLoaded && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-card/50 rounded-lg"
            style={{ width, height }}
          >
            <div className="text-accent font-mono text-sm animate-pulse">
              Loading...
            </div>
          </div>
        )}

        {/* Hint text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted font-mono whitespace-nowrap"
        >
          hover to scatter
        </motion.p>
      </div>
    </motion.div>
  );
}
