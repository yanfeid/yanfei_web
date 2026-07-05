"use client";

import Reveal from "./Reveal";

const groups: { label: string; items: string[] }[] = [
  {
    label: "Recommendation / Retrieval",
    items: [
      "Two-Tower / Dual-Encoder Retrieval",
      "Ranking · CTR / CVR Prediction",
      "Learning-to-Rank",
      "DCN · DLRM · Embeddings",
      "ANN · FAISS · HNSW",
      "A/B Testing · recall@K · NDCG",
    ],
  },
  {
    label: "LLM / Agentic AI",
    items: [
      "Multi-Agent Orchestration",
      "Tool Use · MCP",
      "RAG",
      "Fine-tuning · PEFT / LoRA",
      "SFT · RLHF · Post-training",
      "Prompt Engineering · Evals",
    ],
  },
  {
    label: "ML Systems / Serving",
    items: [
      "LLM Serving · Inference Optimization",
      "Quantization · TensorRT",
      "DeepSpeed · SGLang · vLLM",
      "Distributed / Multi-GPU Training",
      "Latency & Throughput Optimization",
    ],
  },
  {
    label: "Frameworks & Tools",
    items: [
      "Python · SQL",
      "PyTorch · TensorFlow",
      "LightGBM · XGBoost",
      "Spark · Feature Engineering",
      "Git · Docker · CI/CD",
    ],
  },
];

export default function CraftSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal inView>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted mb-3">
            <span className="text-terminal normal-case tracking-normal">{"//"}</span>{" "}
            fig. 03 — toolkit
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-14">
            The <em className="font-serif italic">craft</em>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
          {groups.map((group, gi) => (
            <Reveal inView delay={gi * 0.12} key={group.label}>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted border-b border-border pb-3 mb-5">
                <span className="text-terminal normal-case tracking-normal">
                  ##
                </span>{" "}
                {group.label}
              </p>
              <ul className="space-y-2.5 font-mono">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[13px] text-foreground/80 hover:text-terminal hover:translate-x-1 transition-all duration-300 cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
