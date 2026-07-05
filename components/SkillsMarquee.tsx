"use client";

import { motion } from "framer-motion";
import Marquee from "./magicui/Marquee";

const rows = [
  [
    "Recommendation Systems",
    "Two-Tower Models",
    "DIN/DIEN/DCN",
    "CTR/CVR Prediction",
    "Ranking Models",
    "Fraud Detection",
    "Feature Engineering",
    "XGBoost/LightGBM",
  ],
  [
    "LLM Fine-tuning",
    "Agentic AI",
    "MCP",
    "LoRA/PEFT",
    "Quantization",
    "Post-training Optimization",
    "PyTorch",
    "TensorFlow",
    "DeepSpeed",
    "TensorRT",
    "Feature Store",
    "Spark",
    "Python",
  ],
];

function Pill({ name }: { name: string }) {
  return (
    <span className="whitespace-nowrap px-4 py-2 rounded-full bg-card border border-border text-sm font-mono transition-colors hover:text-accent hover:border-accent cursor-default">
      {name}
    </span>
  );
}

export default function SkillsMarquee() {
  return (
    <section className="py-20 px-0 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Tech Stack
        </motion.h2>

        <div className="flex flex-col gap-4">
          <Marquee duration="45s">
            {rows[0].map((name) => (
              <Pill key={name} name={name} />
            ))}
          </Marquee>
          <Marquee reverse duration="55s">
            {rows[1].map((name) => (
              <Pill key={name} name={name} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
