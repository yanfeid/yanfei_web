"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import DigitPortrait from "./DigitPortrait";

const titles = [
  "Machine Learning Engineer",
  "Recommendation Systems",
  "Agentic AI Builder",
  "LLM Optimizer",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted mb-4 text-lg"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text"
          >
            Yanfei Dai
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="h-10 md:h-12 mb-8"
          >
            <span className="text-xl md:text-2xl text-accent font-mono">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          {/* Code-style intro card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-card border border-border rounded-xl overflow-hidden shadow-xl text-left max-w-2xl mb-10"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-background border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-xs text-muted font-mono">about.ts</span>
            </div>

            {/* Code content */}
            <div className="p-5 font-mono text-sm leading-relaxed">
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">me</span>{" "}
                <span className="text-muted">=</span>{" "}
                <span className="text-orange-400">{`{`}</span>
              </p>
              <p className="pl-4">
                <span className="text-foreground">focus</span>
                <span className="text-muted">:</span>{" "}
                <span className="text-green-400">&quot;RecSys, Agentic AI, LLM, Ranking, Fraud Detection&quot;</span>
                <span className="text-muted">,</span>
              </p>
              <p className="pl-4">
                <span className="text-foreground">passion</span>
                <span className="text-muted">:</span>{" "}
                <span className="text-green-400">&quot;Papers, Mountaineering, Photography&quot;</span>
                <span className="text-muted">,</span>
              </p>
              <p className="pl-4">
                <span className="text-foreground">dream</span>
                <span className="text-muted">:</span>{" "}
                <span className="text-green-400">&quot;Research AI while exploring the world&quot;</span>
              </p>
              <p>
                <span className="text-orange-400">{`}`}</span>
                <span className="text-muted">;</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex lg:justify-start justify-center"
          >
            <SocialLinks size="lg" />
          </motion.div>
        </motion.div>

        {/* Right side - Digit Portrait */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-shrink-0 hidden md:block"
        >
          <DigitPortrait
            imageSrc="/images/profile.jpg"
            width={400}
            height={300}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-muted rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-muted rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
