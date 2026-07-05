"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  inView?: boolean;
}

const hidden = { opacity: 0, y: 24, filter: "blur(10px)" };
const visible = { opacity: 1, y: 0, filter: "blur(0px)" };

/** RevealFx-style entrance: soft rise from behind a blur, one element at a time. */
export default function Reveal({
  children,
  className,
  delay = 0,
  inView = false,
}: RevealProps) {
  const transition = {
    delay,
    duration: 0.9,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  };

  if (inView) {
    return (
      <motion.div
        initial={hidden}
        whileInView={visible}
        viewport={{ once: true, amount: 0.15 }}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={hidden}
      animate={visible}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
