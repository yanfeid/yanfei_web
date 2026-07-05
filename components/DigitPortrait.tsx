"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface DigitPortraitProps {
  imageSrc: string;
  width?: number;
  height?: number;
  cellSize?: number;
}

interface ParticleData {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  color: string;
  digit: string;
  speed: number;
}

function createParticle(x: number, y: number, color: string, width: number, height: number): ParticleData {
  return {
    targetX: x,
    targetY: y,
    x: Math.random() * width,
    y: Math.random() * height,
    color,
    digit: Math.floor(Math.random() * 10).toString(),
    speed: 0.05 + Math.random() * 0.05,
  };
}

function updateParticle(particle: ParticleData, assembled: boolean, width: number, height: number): void {
  if (assembled) {
    particle.x += (particle.targetX - particle.x) * particle.speed;
    particle.y += (particle.targetY - particle.y) * particle.speed;
  } else {
    const targetX = Math.random() * width;
    const targetY = Math.random() * height;
    particle.x += (targetX - particle.x) * 0.02;
    particle.y += (targetY - particle.y) * 0.02;
  }
  if (Math.random() < 0.02) {
    particle.digit = Math.floor(Math.random() * 10).toString();
  }
}

function drawParticle(ctx: CanvasRenderingContext2D, particle: ParticleData, assembled: boolean, cellSize: number): void {
  const alpha = assembled ? 1 : 0.6;
  ctx.fillStyle = particle.color.replace(")", `, ${alpha})`).replace("rgb", "rgba");
  ctx.font = `bold ${cellSize}px JetBrains Mono, monospace`;
  ctx.fillText(particle.digit, particle.x, particle.y);
}

export default function DigitPortrait({
  imageSrc,
  width = 280,
  height = 350,
  cellSize = 3,
}: DigitPortraitProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const animationRef = useRef<number>();
  const particlesRef = useRef<ParticleData[]>([]);
  const cols = Math.floor(width / cellSize);
  const rows = Math.floor(height / cellSize);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;

    img.onload = () => {
      const offCanvas = document.createElement("canvas");
      offCanvas.width = cols;
      offCanvas.height = rows;
      const offCtx = offCanvas.getContext("2d");
      if (!offCtx) return;

      offCtx.drawImage(img, 0, 0, cols, rows);
      const imageData = offCtx.getImageData(0, 0, cols, rows);

      const particles: ParticleData[] = [];
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = (y * cols + x) * 4;
          const r = imageData.data[i];
          const g = imageData.data[i + 1];
          const b = imageData.data[i + 2];
          const a = imageData.data[i + 3];

          const brightness = (r + g + b) / 3;
          if (a > 128 && brightness > 20) {
            const color = `rgb(${r}, ${g}, ${b})`;
            particles.push(createParticle(x * cellSize, y * cellSize, color, width, height));
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

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particlesRef.current.forEach((particle) => {
        updateParticle(particle, assembled, width, height);
        drawParticle(ctx, particle, assembled, cellSize);
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
  }, [isLoaded, isHovered, width, height, cellSize]);

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
        <div className="absolute inset-0 bg-foreground/[0.06] blur-3xl rounded-full" />

        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className="relative z-10 cursor-pointer"
          style={{ imageRendering: "pixelated" }}
        />

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

      </div>
    </motion.div>
  );
}
