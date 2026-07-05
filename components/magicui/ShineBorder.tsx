"use client";

import type { ReactNode } from "react";

interface ShineBorderProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
}

export default function ShineBorder({
  children,
  className = "",
  colors = ["#3b82f6", "#8b5cf6", "#06b6d4"],
}: ShineBorderProps) {
  return (
    <div className={`relative rounded-xl ${className}`}>
      <div
        className="animate-shine pointer-events-none absolute -inset-px rounded-xl opacity-70"
        style={{
          background: `linear-gradient(110deg, transparent 25%, ${colors.join(
            ", "
          )}, transparent 75%)`,
          backgroundSize: "250% 250%",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />
      {children}
    </div>
  );
}
