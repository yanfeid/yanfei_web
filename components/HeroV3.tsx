"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";
import DigitPortrait from "./DigitPortrait";

const STATUS_CMD = "yanfei --status";
const STATUS_LINES: [string, string][] = [
  ["now ", "agentic AI & ranking @ PayPal"],
  ["prev", "LLM serving & post-training @ NetMind.AI"],
  ["else", "papers · mountaineering · astrophotography"],
];

function StatusTerminal() {
  const [typedLen, setTypedLen] = useState(0);
  const [linesShown, setLinesShown] = useState(0);
  const typingDone = typedLen >= STATUS_CMD.length;

  useEffect(() => {
    // wait for the Reveal entrance, then start typing
    const start = setTimeout(() => {
      const typer = setInterval(() => {
        setTypedLen((n) => {
          if (n >= STATUS_CMD.length) {
            clearInterval(typer);
            return n;
          }
          return n + 1;
        });
      }, 55);
    }, 1400);
    return () => clearTimeout(start);
  }, []);

  useEffect(() => {
    if (!typingDone) return;
    const pop = setInterval(() => {
      setLinesShown((n) => {
        if (n >= STATUS_LINES.length) {
          clearInterval(pop);
          return n;
        }
        return n + 1;
      });
    }, 300);
    return () => clearInterval(pop);
  }, [typingDone]);

  const allDone = linesShown >= STATUS_LINES.length;

  return (
    <div className="px-5 py-4 space-y-1.5">
      <p className="text-muted">
        <span className="text-terminal">$</span> {STATUS_CMD.slice(0, typedLen)}
        {!typingDone && <span className="animate-blink text-terminal">▍</span>}
      </p>
      {STATUS_LINES.map(([k, v], i) => (
        <p
          key={k}
          className={`text-foreground/85 transition-opacity duration-200 ${
            i < linesShown ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-muted/60">{"> "}</span>
          <span className="text-accent">{k}</span>
          <span className="text-muted/60">{" : "}</span>
          {v}
        </p>
      ))}
      <p className={allDone ? "opacity-100" : "opacity-0"}>
        <span className="text-terminal">$</span>{" "}
        <span className="animate-blink text-terminal">▍</span>
      </p>
    </div>
  );
}

function LocalClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "America/Los_Angeles",
        })
      );
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  return <span className="tabular-nums">{time ?? "--:--:--"}</span>;
}

export default function HeroV3() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden px-6">
      <div className="dots-bg absolute inset-0" />

      <div className="relative z-10 max-w-5xl mx-auto w-full py-16">
        {/* Overline: place + live time — the mountaineer's field-log feel */}
        <Reveal delay={0.1}>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted mb-10">
            <span className="text-terminal normal-case tracking-normal">
              ~/yanfei&nbsp;$
            </span>
            &ensp;San Jose, CA&ensp;·&ensp;
            <LocalClock />
            &ensp;·&ensp;37.34° N, 121.89° W
          </p>
        </Reveal>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">
          <div className="flex-1">
            <Reveal delay={0.25}>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-8">
                Yanfei Dai
                <span className="animate-blink ml-2 inline-block w-[0.5ch] text-terminal font-mono align-baseline">
                  ▍
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="text-2xl md:text-[2rem] leading-snug text-muted max-w-xl mb-10">
                I build{" "}
                <em className="font-serif italic text-foreground">
                  recommender systems
                </em>{" "}
                and{" "}
                <em className="font-serif italic text-foreground">
                  agentic AI
                </em>
                &nbsp;— and chase mountain light{" "}
                <em className="font-serif italic text-foreground">
                  with a camera
                </em>
                .
              </p>
            </Reveal>

            <Reveal delay={0.55}>
              <div className="flex flex-wrap items-center gap-6">
                <SocialLinks size="sm" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.5} className="flex-shrink-0 hidden md:block">
            <div className="relative">
              <DigitPortrait
                imageSrc="/images/profile.jpg"
                width={400}
                height={300}
                cellSize={2.5}
              />
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted/70 text-right">
                fig. 01 — portrait, rendered in digits · hover to scatter
              </p>
            </div>
          </Reveal>
        </div>

        {/* Current focus — terminal status output */}
        <Reveal delay={0.7}>
          <div className="mt-20 rounded-lg border border-border bg-card/50 backdrop-blur-sm font-mono text-sm overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="ml-2 text-[10px] uppercase tracking-[0.2em] text-muted/70">
                status
              </span>
            </div>
            <StatusTerminal />
          </div>
        </Reveal>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-transparent via-muted to-transparent"
        />
      </motion.div>
    </section>
  );
}
