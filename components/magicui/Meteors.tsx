"use client";

import { useEffect, useState } from "react";

interface MeteorsProps {
  number?: number;
}

type MeteorStyle = {
  top: string;
  left: string;
  animationDelay: string;
  animationDuration: string;
};

export default function Meteors({ number = 12 }: MeteorsProps) {
  const [styles, setStyles] = useState<MeteorStyle[]>([]);

  useEffect(() => {
    setStyles(
      Array.from({ length: number }, () => ({
        top: `${Math.random() * 40}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${Math.random() * 4 + 4}s`,
      }))
    );
  }, [number]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {styles.map((style, i) => (
        <span
          key={i}
          style={style}
          className="animate-meteor absolute h-0.5 w-0.5 rotate-[215deg] rounded-full bg-slate-400 shadow-[0_0_0_1px_#ffffff10] before:absolute before:top-1/2 before:h-px before:w-[60px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-slate-400 before:to-transparent before:content-['']"
        />
      ))}
    </div>
  );
}
