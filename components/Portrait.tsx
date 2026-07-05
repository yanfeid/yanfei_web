"use client";

import { useEffect, useRef, useState } from "react";

interface PortraitProps {
  imageSrc: string;
  width?: number;
  height?: number;
}

interface DigitCell {
  x: number;
  y: number;
  color: string;
  digit: string;
}

/**
 * Editorial portrait: the photograph reads clearly by default;
 * hovering dissolves it into a field of digits (the ML wink).
 */
export default function Portrait({
  imageSrc,
  width = 380,
  height = 285,
}: PortraitProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cellsRef = useRef<DigitCell[]>([]);
  const rafRef = useRef<number>();
  const [hovered, setHovered] = useState(false);

  const cellSize = 6;
  const cols = Math.floor(width / cellSize);
  const rows = Math.floor(height / cellSize);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;
    img.onload = () => {
      const off = document.createElement("canvas");
      off.width = cols;
      off.height = rows;
      const offCtx = off.getContext("2d");
      if (!offCtx) return;
      offCtx.drawImage(img, 0, 0, cols, rows);
      const data = offCtx.getImageData(0, 0, cols, rows).data;

      const cells: DigitCell[] = [];
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = (y * cols + x) * 4;
          const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
          if (data[i + 3] > 128 && brightness > 24) {
            cells.push({
              x: x * cellSize,
              y: y * cellSize + cellSize,
              color: `rgba(${data[i]}, ${data[i + 1]}, ${data[i + 2]}, 0.95)`,
              digit: Math.floor(Math.random() * 10).toString(),
            });
          }
        }
      }
      cellsRef.current = cells;
    };
  }, [imageSrc, cols, rows]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.font = `bold ${cellSize}px JetBrains Mono, monospace`;
      for (const cell of cellsRef.current) {
        if (Math.random() < 0.03) {
          cell.digit = Math.floor(Math.random() * 10).toString();
        }
        ctx.fillStyle = cell.color;
        ctx.fillText(cell.digit, cell.x, cell.y);
      }
      rafRef.current = requestAnimationFrame(draw);
    };

    if (hovered) {
      draw();
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [hovered, width, height]);

  return (
    <div
      className="group relative overflow-hidden rounded-lg border border-border"
      style={{ width, height }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageSrc}
        alt="Portrait of Yanfei Dai"
        className={`h-full w-full object-cover transition-all duration-700 ${
          hovered ? "opacity-0 scale-[1.02]" : "opacity-100"
        }`}
      />
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className={`absolute inset-0 bg-background transition-opacity duration-700 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
