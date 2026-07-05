"use client";

import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
  duration?: string;
}

export default function Marquee({
  children,
  reverse = false,
  className = "",
  duration = "40s",
}: MarqueeProps) {
  return (
    <div
      className={`group flex overflow-hidden [--gap:0.75rem] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}
      style={{ "--duration": duration } as React.CSSProperties}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={`flex shrink-0 items-center gap-[--gap] pr-[--gap] group-hover:[animation-play-state:paused] ${
            reverse ? "animate-marquee-reverse" : "animate-marquee"
          }`}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
