"use client";

import { motion } from "framer-motion";

const skills = [
  // Modeling & ML
  { name: "Recommendation Systems", category: "modeling" },
  { name: "Two-Tower Models", category: "modeling" },
  { name: "DIN/DIEN/DCN", category: "modeling" },
  { name: "CTR/CVR Prediction", category: "modeling" },
  { name: "Ranking Models", category: "modeling" },
  { name: "Fraud Detection", category: "modeling" },
  { name: "Feature Engineering", category: "modeling" },
  { name: "XGBoost/LightGBM", category: "modeling" },

  // LLM & Agentic
  { name: "LLM Fine-tuning", category: "llm" },
  { name: "Agentic AI", category: "llm" },
  { name: "MCP", category: "llm" },
  { name: "LoRA/PEFT", category: "llm" },
  { name: "Quantization", category: "llm" },
  { name: "Post-training Optimization", category: "llm" },

  // Frameworks
  { name: "PyTorch", category: "framework" },
  { name: "TensorFlow", category: "framework" },
  { name: "DeepSpeed", category: "framework" },
  { name: "TensorRT", category: "framework" },

  // Infra & Tools
  { name: "Feature Store", category: "infra" },
  { name: "Spark", category: "infra" },
  { name: "Python", category: "infra" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function SkillsCloud() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Tech Stack
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {skills.map((skill) => (
            <motion.span
              key={skill.name}
              variants={item}
              whileHover={{ scale: 1.1, borderColor: "#3b82f6" }}
              className="px-4 py-2 rounded-full bg-card border border-border text-sm font-mono cursor-default transition-colors hover:text-accent"
            >
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
