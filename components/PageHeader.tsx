"use client";

import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface PageHeaderProps {
  overline: string;
  title: ReactNode;
  lede?: string;
}

export default function PageHeader({ overline, title, lede }: PageHeaderProps) {
  return (
    <header className="mb-16">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted mb-4">
          <span className="text-terminal normal-case tracking-normal">{"//"}</span>{" "}
          {overline}
        </p>
      </Reveal>
      <Reveal delay={0.12}>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.08] mb-6">
          {title}
        </h1>
      </Reveal>
      {lede && (
        <Reveal delay={0.24}>
          <p className="text-lg text-muted max-w-2xl leading-relaxed">{lede}</p>
        </Reveal>
      )}
    </header>
  );
}
