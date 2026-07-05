export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "paypal",
    company: "PayPal Inc.",
    role: "Machine Learning Engineer",
    location: "San Jose, CA",
    period: "Feb. 2025 – Present",
    description:
      "Building retrieval and ranking systems for Shopping recommendations and agentic AI for fraud analysis.",
    achievements: [
      "Designed and ran ablation studies across 10+ two-tower (dual-encoder) retrieval variants (DNN, Deep & Cross Network / DCN-v2), isolating how sequence aggregation, Matryoshka embeddings, and BERT-based item features affect recall@K — lifting recall@100 by ~3% over the production baseline",
      "Cut candidate-retrieval latency by ~25% (p99 ~90ms to ~68ms) on a ~10M-item corpus by integrating FAISS approximate nearest-neighbor (ANN) search, holding recall within ~2% of exact (brute-force) search",
      "Built and deployed an agentic AI fraud-analysis workflow in which a planning agent orchestrates specialized sub-agents through MCP (Model Context Protocol) tool calls over a retrieval (RAG) layer to automate first-pass case triage; owned the CI/CD and evaluation harness, trimming repetitive analyst review by ~30%",
      "Trained lightweight LightGBM models to complement rule-based fraud defenses on emerging patterns where production models lagged, and surfaced top risk drivers via feature-importance analysis for the strategy team — improving targeted rule precision by ~5%",
    ],
    technologies: [
      "Two-Tower Retrieval",
      "DCN-v2",
      "FAISS / ANN",
      "Agentic AI",
      "MCP",
      "RAG",
      "LightGBM",
    ],
  },
  {
    id: "protagolabs",
    company: "ProtagoLabs / Netmind.AI",
    role: "Machine Learning Engineer",
    location: "Vienna, VA",
    period: "May. 2024 – Dec. 2024",
    description:
      "Optimized LLM serving and inference for a token-metered model-serving platform supporting 10,000+ daily active users.",
    achievements: [
      "Optimized LLM serving / inference for NetMind.AI's token-metered model-serving platform across owned and rented GPU infrastructure, supporting a 10,000+ daily-active-user base on NetMind Power",
      "Applied quantization (TensorRT) with multi-GPU / multi-node serving via DeepSpeed, improving throughput ~3x over the FP16 baseline with benchmark accuracy loss under 0.05",
      "Added a self-service fine-tuning workflow to the platform using PEFT (LoRA) and SGLang, letting end-users customize models through a one-click, click-to-tune flow",
      "Worked with research on post-training experiments — CPT for long-form reasoning, SFT for multi-turn dialogue, and RL with heuristic rewards — helping surface long-output and reward-hacking failure modes that informed later iterations",
    ],
    technologies: [
      "LLM Serving",
      "Quantization",
      "TensorRT",
      "DeepSpeed",
      "PEFT / LoRA",
      "SGLang",
      "Post-training",
    ],
  },
  {
    id: "boston-derm",
    company: "Boston Derm Advocate",
    role: "Machine Learning Engineer Intern",
    location: "Remote",
    period: "Nov. 2023 – May. 2024",
    description:
      "Built a personalized skincare recommendation system with two-tower retrieval and gradient-boosted ranking.",
    achievements: [
      "Designed and prototyped a personalized skincare recommendation system using a two-tower (dual-encoder) retrieval architecture that learns joint user-product embeddings to rank products by predicted preference",
      "Built the feature-engineering and data-preparation pipeline from user skin-type surveys and product ingredient metadata, adding a content-based fallback to cover cold-start users with sparse history",
      "Trained and tuned gradient-boosted models (XGBoost) for preference prediction, using systematic feature ablation and metric-driven selection (F1, AUC) to finalize the model — improving offline relevance by ~5% over a popularity baseline",
      "Stood up a reproducible offline evaluation workflow (recall@K, precision@K) to compare candidate models consistently, and packaged the model and results for handoff to the founding engineering team",
    ],
    technologies: [
      "Two-Tower Retrieval",
      "XGBoost",
      "Feature Engineering",
      "Offline Evaluation",
    ],
  },
];

export interface Education {
  id: string;
  school: string;
  degree: string;
  location: string;
  period: string;
  logo?: string;
}

export const education: Education[] = [
  {
    id: "cornell",
    school: "Cornell University",
    degree: "Master of Computing and Information Science",
    location: "Ithaca, New York",
    period: "Aug. 2023 – Dec. 2024",
    logo: "/images/cornell-logo.png",
  },
  {
    id: "nanjing",
    school: "Nanjing University",
    degree: "Bachelor of Engineering",
    location: "Nanjing, Jiangsu",
    period: "Sep. 2018 – Jun. 2023",
    logo: "/images/nanjing-logo.png",
  },
];
