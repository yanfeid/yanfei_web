"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { createContext, useContext, useRef, type ReactNode } from "react";

const BASE_SIZE = 44;
const SPRING = { mass: 0.1, stiffness: 150, damping: 12 };

interface DockContextValue {
  mouseX: MotionValue<number>;
  magnification: number;
  distance: number;
}

const DockContext = createContext<DockContextValue | null>(null);

export function Dock({
  children,
  className = "",
  magnification = 68,
  distance = 110,
}: {
  children: ReactNode;
  className?: string;
  magnification?: number;
  distance?: number;
}) {
  const mouseX = useMotionValue(Infinity);

  return (
    <DockContext.Provider value={{ mouseX, magnification, distance }}>
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={`mx-auto flex h-[58px] w-max items-end gap-2 rounded-2xl border border-border bg-card/70 px-3 pb-2 backdrop-blur-lg ${className}`}
      >
        {children}
      </motion.div>
    </DockContext.Provider>
  );
}

export function DockIcon({
  children,
  label,
}: {
  children: ReactNode;
  label?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const context = useContext(DockContext);
  if (!context) throw new Error("DockIcon must be used within a Dock");

  const { mouseX, magnification, distance } = context;

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const size = useSpring(
    useTransform(
      distanceCalc,
      [-distance, 0, distance],
      [BASE_SIZE, magnification, BASE_SIZE]
    ),
    SPRING
  );

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      className="group relative flex aspect-square items-center justify-center rounded-full bg-background/60 hover:bg-accent/20 transition-colors"
    >
      {label && (
        <span className="pointer-events-none absolute -top-9 whitespace-nowrap rounded-md border border-border bg-card px-2 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100">
          {label}
        </span>
      )}
      <div className="flex h-1/2 w-1/2 items-center justify-center [&>svg]:h-full [&>svg]:w-full">
        {children}
      </div>
    </motion.div>
  );
}
