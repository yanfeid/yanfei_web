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
    id: "fintech",
    company: "Fortune 500 FinTech Company",
    role: "Machine Learning Engineer",
    location: "San Jose, CA",
    period: "Feb. 2025 – Present",
    description:
      "Building ML systems for Shopping feed recommendations and fraud detection at scale.",
    achievements: [
      "Contributed to candidate generation (recall) via a two-tower embedding pipeline and ANN retrieval to ensure high-quality candidate pools for the Shopping feed",
      "Developed and productionized fine-rank models for Shopping feed with advanced feature crosses and Feature Store integration. Built calibrated CTR/CVR predictors addressing delayed-feedback bias and class-imbalance",
      "Architected and deployed an end-to-end Agentic fraud analysis system where a planning agent orchestrates specialized agents via MCP tool calls. Optimized the pipeline with semantic and retrieval layer, and established CI/CD pipelines, reducing manual analysis by ~60%",
      "Developed a mini-model system for rapid root-cause analysis of novel fraud trends. Combined Information Value and LightGBM feature importance ranking to identify top risk drivers, accelerating fraud response from 3 days to 1 hour",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "Two-Tower",
      "Feature Store",
      "MCP",
      "LightGBM",
    ],
  },
  {
    id: "protagolabs",
    company: "ProtagoLabs/Netmind.AI",
    role: "Machine Learning Engineer",
    location: "Vienna, VA",
    period: "May. 2024 – Dec. 2024",
    description:
      "Optimized LLMs for token-based model serving platform, supporting 10,000+ daily active users.",
    achievements: [
      "Optimized LLMs for NetMind.AI's token-based model serving platform, enhancing performance and cost-efficiency across owned and rented infrastructure, supporting a daily active user base of over 10,000",
      "Implemented quantization using TensorRT across multi-GPU and multi-node environments with DeepSpeed, achieving a 6x throughput increase over baseline models with accuracy loss under 0.05",
      "Focused on developing automated fine-tuning capabilities for the platform, leveraging PEFT techniques with LoRA and SGLang to enable end-users to customize models efficiently with a simple, click-to-tune option",
      "Collaborated with the research team to explore post-training scale laws: used CPT for long reasoning outputs, SFT for multi-turn dialogue structuring, and RL with heuristic rewards to balance depth and efficiency",
    ],
    technologies: [
      "Python",
      "TensorRT",
      "DeepSpeed",
      "LoRA",
      "SGLang",
      "PEFT",
    ],
  },
  {
    id: "boston-derm",
    company: "Boston Derm Advocate",
    role: "Machine Learning Engineer Intern",
    location: "Remote",
    period: "Nov. 2023 – May. 2024",
    description:
      "Built personalized skincare recommendation system using supervised learning and ranking models.",
    achievements: [
      "Modeled personalized skincare recommendations as a supervised learning and ranking problem, predicting user-specific product preference scores to optimize downstream recommendation quality",
      "Implemented and evaluated tree-based ensemble models (XGBoost) for preference prediction, performing systematic feature ablation and metric-driven model selection using F1 and AUC",
      "Engineered structured features across user profiles, product attributes, and interaction signals, and leveraged feature importance analysis to refine representation design and reduce model complexity",
      "Improved model generalization by mitigating overfitting via regularization and early stopping, resulting in significant uplift in user engagement",
    ],
    technologies: [
      "Python",
      "XGBoost",
      "Feature Engineering",
      "Scikit-learn",
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
