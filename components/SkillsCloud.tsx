"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Python", category: "language" },
  { name: "PyTorch", category: "ml" },
  { name: "TensorFlow", category: "ml" },
  { name: "LLMs", category: "ml" },
  { name: "RAG", category: "ml" },
  { name: "Transformers", category: "ml" },
  { name: "LangChain", category: "ml" },
  { name: "CUDA", category: "infra" },
  { name: "Kubernetes", category: "infra" },
  { name: "Docker", category: "infra" },
  { name: "AWS", category: "infra" },
  { name: "GCP", category: "infra" },
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "language" },
  { name: "Node.js", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Redis", category: "backend" },
  { name: "FastAPI", category: "backend" },
  { name: "MLOps", category: "ml" },
  { name: "Distributed Systems", category: "infra" },
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
