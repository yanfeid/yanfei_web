"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import DigitPortrait from "./DigitPortrait";
import Particles from "./magicui/Particles";
import Meteors from "./magicui/Meteors";
import BlurFade from "./magicui/BlurFade";
import ShineBorder from "./magicui/ShineBorder";

const titles = [
  "Machine Learning Engineer",
  "Recommendation Systems",
  "Agentic AI Builder",
  "LLM Optimizer",
];

const DELAY = 0.15;

export default function HeroV2() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % titles.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Aurora gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-aurora absolute -top-1/4 left-1/4 h-[60vh] w-[60vh] rounded-full bg-blue-600/20 blur-[120px]" />
        <div
          className="animate-aurora absolute top-1/3 right-1/5 h-[50vh] w-[50vh] rounded-full bg-purple-600/15 blur-[120px]"
          style={{ animationDelay: "-7s" }}
        />
        <div
          className="animate-aurora absolute bottom-0 left-1/3 h-[40vh] w-[40vh] rounded-full bg-cyan-500/10 blur-[100px]"
          style={{ animationDelay: "-3s" }}
        />
      </div>

      <Particles quantity={110} color="147, 197, 253" />
      <Meteors number={10} />

      <div className="relative z-10 max-w-6xl w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        {/* Left side - Text content */}
        <div className="flex-1 lg:text-left">
          <BlurFade delay={DELAY}>
            <p className="text-muted mb-4 text-lg font-mono">
              <span className="text-accent">$</span> whoami
            </p>
          </BlurFade>

          <BlurFade delay={DELAY * 2}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent [background-size:200%] animate-shine">
              Yanfei Dai
            </h1>
          </BlurFade>

          <BlurFade delay={DELAY * 3}>
            <div className="h-10 md:h-12 mb-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={titles[index]}
                  initial={{ y: 30, opacity: 0, filter: "blur(6px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -30, opacity: 0, filter: "blur(6px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="inline-block text-xl md:text-2xl text-accent font-mono"
                >
                  {titles[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </BlurFade>

          <BlurFade delay={DELAY * 4}>
            <ShineBorder className="max-w-2xl mb-10">
              <div className="bg-card/80 backdrop-blur-sm rounded-xl overflow-hidden text-left">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-background/80 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-xs text-muted font-mono">
                    about.ts
                  </span>
                </div>
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
                    <span className="text-green-400">
                      &quot;RecSys, Agentic AI, LLM, Ranking, Fraud Detection&quot;
                    </span>
                    <span className="text-muted">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-foreground">passion</span>
                    <span className="text-muted">:</span>{" "}
                    <span className="text-green-400">
                      &quot;Papers, Mountaineering, Photography&quot;
                    </span>
                    <span className="text-muted">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-foreground">dream</span>
                    <span className="text-muted">:</span>{" "}
                    <span className="text-green-400">
                      &quot;Research AI while exploring the world&quot;
                    </span>
                  </p>
                  <p>
                    <span className="text-orange-400">{`}`}</span>
                    <span className="text-muted">;</span>
                  </p>
                </div>
              </div>
            </ShineBorder>
          </BlurFade>

          <BlurFade delay={DELAY * 5}>
            <div className="flex lg:justify-start justify-center">
              <SocialLinks size="lg" />
            </div>
          </BlurFade>
        </div>

        {/* Right side - Digit Portrait */}
        <BlurFade delay={DELAY * 4} className="flex-shrink-0 hidden md:block">
          <DigitPortrait
            imageSrc="/images/profile.jpg"
            width={400}
            height={300}
          />
        </BlurFade>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-24 z-10"
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
