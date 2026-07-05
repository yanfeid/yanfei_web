"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  inView?: boolean;
}

export default function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.5,
  yOffset = 8,
  inView = false,
}: BlurFadeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const show = !inView || isInView;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset, filter: "blur(8px)" }}
      animate={
        show
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: yOffset, filter: "blur(8px)" }
      }
      transition={{ delay, duration, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
