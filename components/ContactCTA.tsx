"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function ContactCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="dots-bg absolute inset-0 rotate-180" />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <Reveal inView>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted mb-6">
            <span className="text-terminal normal-case tracking-normal">{"//"}</span>{" "}
            coda
          </p>
        </Reveal>
        <Reveal inView delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-8">
            Let&apos;s make something{" "}
            <em className="font-serif italic">worth shipping</em>.
          </h2>
        </Reveal>
        <Reveal inView delay={0.2}>
          <p className="text-muted max-w-xl mx-auto mb-10">
            Open to conversations about recommendation systems, agentic AI, or
            where to catch the best alpenglow.
          </p>
        </Reveal>
        <Reveal inView delay={0.3}>
          <div className="flex items-center justify-center gap-8">
            <a
              href="mailto:yanfeidai0811@gmail.com"
              className="group inline-flex items-center gap-2 text-lg border-b border-muted pb-1 hover:border-accent transition-colors"
            >
              yanfeidai0811@gmail.com
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <Link
              href="/contact"
              className="font-mono text-sm text-muted hover:text-foreground transition-colors"
            >
              More ways →
            </Link>
          </div>
        </Reveal>
        <Reveal inView delay={0.4}>
          <p className="mt-14 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-terminal/80 animate-pulse" />
            open to opportunities
          </p>
        </Reveal>
      </div>
    </section>
  );
}
