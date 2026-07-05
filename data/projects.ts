export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  images?: { src: string; caption: string }[];
  featured?: boolean;
  details?: {
    problem?: string;
    solution?: string;
    impact?: string;
    keyFeatures?: string[];
    architecture?: string;
  };
}

export const projects: Project[] = [
  {
    id: "black-commission",
    title: "Black Commission",
    description:
      "A 1–4 player online co-op retrieval game set in 2098: run a nearly bankrupt surface-recovery agency on an abandoned Earth, taking increasingly bizarre commissions from Martian clients.",
    longDescription:
      "After Mars colonization, the wealthy left Earth behind — but they still want authentic Earth goods. You run a run-down retrieval agency: accept commissions on the office computer, gear up, drive out to exclusion zones, recover sealed specimens while evading the Echo Mold, and come back to settle the books. Money, reputation, debt pressure, and three endings.",
    technologies: ["Unity", "C#", "Netcode", "Gameplay Systems", "Level Design"],
    githubUrl: "https://github.com/DarkGameHub/BlackCommission",
    imageUrl: "/images/projects/blackcommission/office.png",
    images: [
      {
        src: "/images/projects/blackcommission/office.png",
        caption: "The run-down agency office where every run begins",
      },
      {
        src: "/images/projects/blackcommission/mars-pad.png",
        caption: "Loading the van under a Martian-orange sky",
      },
    ],
    featured: true,
    details: {
      keyFeatures: [
        "Online co-op for 1–4 players with room codes and LAN direct connect",
        "Full commission loop: accept → gear up → retrieve → settle → upgrade",
        "The Echo Mold — an infected fungal host that stalks mission sites",
        "Agency economy: money, reputation, XP, debt pressure, office upgrades",
        "2098 Mars/Earth world-building with license progression and three endings",
        "Modular architecture (Mission, Level Topology, Office, Monsters) with edit-mode test suites",
      ],
    },
  },
  {
    id: "summit",
    title: "Summit",
    description:
      "A recording tool and peak-centric community for alpine climbers and high-altitude trekkers — expedition logs auto-generated from GPS tracks, altitude curves, and geo-arranged photos.",
    longDescription:
      "Not a photo-first social feed — a spatio-temporal recorder for mountaineers. Start recording, complete a climb, and Summit assembles the full log: track, altitude profile, photos pinned by location, weather data. Peaks are the social nodes: find the people who climbed the same mountain, or are planning to.",
    technologies: [
      "React Native",
      "Expo",
      "Fastify",
      "PostgreSQL",
      "Redis",
      "pnpm monorepo",
    ],
    githubUrl: "https://github.com/yanfeid/summit",
    imageUrl: "/images/projects/covers/summit.svg",
    featured: true,
    details: {
      problem:
        "Climbing content on mainstream platforms is polished-photo-first and scattered — records of a single expedition end up fragmented, and finding partners for a specific peak relies on luck.",
      solution:
        "A recorder that captures the climb as continuous space-time data (track, altitude, photos, weather) with optional notes, plus a community organized around peaks instead of follower graphs — connect through shared mountains, not algorithms.",
      keyFeatures: [
        "Auto-generated expedition logs: GPS track, altitude curve, geo-arranged photos, weather",
        "Peak pages as social hubs: who's been, who's planning",
        "Two-circle social model: teammates you've climbed with, and peak-mates you haven't yet",
        "Fastify REST API + React Native (Expo) app + shared TypeScript types in a pnpm monorepo",
        "PostgreSQL + Redis, deployed on Railway",
      ],
    },
  },
  {
    id: "agentic-fraud-analysis",
    imageUrl: "/images/projects/covers/agentic-fraud.svg",
    title: "Agentic Fraud Analysis",
    description:
      "An intelligent multi-agent system for automated fraud detection, investigation, and mitigation using the Model Context Protocol (MCP).",
    longDescription:
      "A three-agent architecture that handles fraud incidents end-to-end: Alert Triage Agent consolidates alerts and creates incidents, Diagnose Agent performs root cause analysis, and Mitigation Agent develops and deploys automated solutions.",
    technologies: ["Python", "MCP", "Multi-Agent", "LLM", "FastAPI", "React"],
    githubUrl: "https://github.com/yanfeid/agentic-fraud-analysis",
    featured: true,
    details: {
      problem: "Fraud investigation requires analyzing multiple data sources, correlating patterns across alerts, and synthesizing findings - a time-consuming manual process that delays response time.",
      solution: "Built a three-agent system where specialized agents handle different aspects of fraud investigation: Alert Triage for consolidation, Diagnose for RCA, and Mitigation for automated fixes. Orchestrated through MCP (Model Context Protocol) tool calls with human-in-the-loop approval.",
      impact: "Automated significant portions of fraud investigation workflow with consistent, auditable analysis trails and faster incident response.",
      architecture: "Monitoring Services → Alert Triage Agent → Diagnose Agent → Mitigation Agent → Human Approval UI",
      keyFeatures: [
        "Three-agent architecture: Alert Triage, Diagnose, and Mitigation agents",
        "MCP servers for modular tool capabilities (data analysis, ML models)",
        "AI Proxy for request routing and authentication",
        "Human-in-the-loop UI for reviewing and approving agent plans",
        "Automated alert correlation and incident creation",
        "Root cause analysis with attack pattern identification",
      ],
    },
  },
  {
    id: "core-shopping-recsys",
    imageUrl: "/images/projects/covers/core-recsys.svg",
    title: "Core Shopping Recommendation System",
    description:
      "A modular recommendation system framework for e-commerce featuring DIN, DIEN, DCNv2, BST, XGBoost Ranker, and Two-Tower models.",
    longDescription:
      "Industrial-grade recommendation system framework with both retrieval and ranking models. Includes state-of-the-art deep learning architectures and reusable neural network layers for building production-ready e-commerce recommendations.",
    technologies: ["Python", "PyTorch", "TensorFlow", "XGBoost", "LightGBM", "FAISS"],
    githubUrl: "https://github.com/yanfeid/core_shopping_recsys",
    featured: true,
    details: {
      problem: "Building scalable recommendation systems requires implementing multiple complex models (retrieval + ranking) with proper feature engineering, evaluation metrics, and production considerations.",
      solution: "Created a modular framework with reusable layers (attention, cross-net, embeddings) and implementations of state-of-the-art ranking models (DIN, DIEN, DCNv2, BST) plus retrieval models (Two-Tower, Collaborative Filtering).",
      impact: "Accelerated recommendation system development with battle-tested implementations based on industrial-grade patterns.",
      keyFeatures: [
        "Ranking Models: DIN, DIEN (AUGRU), DCNv2, BST, XGBoost/LightGBM Rankers",
        "Retrieval Models: Two-Tower (Dual Encoder), Matrix Factorization + BPR",
        "Reusable Layers: DIN attention, Multi-head attention, CrossNet, FM, SENet",
        "Custom Activations: Dice, GELU for CTR prediction",
        "Comprehensive Metrics: AUC, NDCG, MRR, gAUC, MAP",
        "Feature Processor for encoding and normalization",
      ],
    },
  },
  {
    id: "ml-pipeline-agent",
    imageUrl: "/images/projects/covers/ml-pipeline.svg",
    title: "ML Pipeline Agent",
    description:
      "An AI-powered tool that automatically converts ML research code into production-ready DAG pipelines.",
    longDescription:
      "Helps data scientists transform exploratory machine learning code into structured, production-grade workflows. Uses a multi-agent architecture to analyze Python/Jupyter notebooks, identify ML components, and generate executable DAG pipelines.",
    technologies: ["Python", "LLM", "DAG", "Jupyter", "GitHub API", "YAML"],
    githubUrl: "https://github.com/yanfeid/ml-pipeline-agent",
    featured: true,
    details: {
      problem: "Research code is often messy, poorly structured, and difficult to deploy. The gap between ML experimentation and production pipelines creates significant delays and technical debt.",
      solution: "Built an AI-powered agent that analyzes ML repositories, identifies code components and their I/O attributes, generates DAG workflows with proper dependencies, and produces production-ready notebooks with configuration files.",
      impact: "Significantly reduces the time to productionize research code while ensuring engineering best practices and reproducibility.",
      keyFeatures: [
        "Automatic file analysis to identify relevant ML code",
        "AI-powered component detection (data loading, preprocessing, training, evaluation)",
        "DAG generation in YAML format with proper dependencies",
        "Human-in-the-loop verification for quality control",
        "Production-ready notebook and config file generation",
        "Optional PR submission for generated pipelines",
      ],
    },
  },
  {
    id: "mini-model",
    imageUrl: "/images/projects/covers/mini-model.svg",
    title: "Mini Model - Fraud Diagnostics Platform",
    description:
      "An end-to-end pipeline for automated fraud trend analysis, model performance diagnostics, and feature importance evaluation.",
    longDescription:
      "Automates the complete fraud diagnostics workflow: validates transaction datasets, enriches data with 25,000+ features, calculates Information Value (IV) using distributed processing, and generates comprehensive performance reports with actionable insights.",
    technologies: ["Python", "BigQuery", "Dataproc", "Spark", "IV Analysis", "LightGBM"],
    githubUrl: "https://github.com/yanfeid/mini-model",
    featured: true,
    details: {
      problem: "Traditional fraud root cause analysis required days of manual investigation, processing large datasets with thousands of features to identify model degradation and fraud trend shifts.",
      solution: "Built an automated pipeline that validates datasets, enriches them with 25,000+ features from a feature platform, calculates IV with distributed Spark processing, and generates professional HTML reports with visualizations.",
      impact: "Reduced analysis time from 3 days to hours, with 50% cost reduction through dynamic cluster sizing and 82-87% performance improvement via parallel processing.",
      keyFeatures: [
        "Automated quality control: validates datasets (10k+ records, 5-60% bad rate)",
        "Intelligent chunking for large datasets (>26k rows) with parallel processing",
        "Dynamic Dataproc cluster sizing for cost optimization",
        "Information Value (IV) calculation via distributed Spark jobs",
        "Comprehensive metrics: AUC, ROC, KS, precision/recall for all features",
        "Professional HTML email reports with visualizations and ZIP archives",
        "Mock testing framework for offline development",
      ],
    },
  },
  {
    id: "rlhf-alignment-template",
    imageUrl: "/images/projects/covers/rlhf.svg",
    title: "RLHF Alignment Template",
    description:
      "A comprehensive template for aligning Large Language Models using Reinforcement Learning from Human Feedback (RLHF).",
    longDescription:
      "Full-stack solution for LLM alignment including RLHF training, reward model development, interactive feedback collection interface, model explainability dashboards, and scalable Kubernetes deployment.",
    technologies: ["Python", "PyTorch", "RLHF", "Docker", "Kubernetes", "SHAP"],
    githubUrl: "https://github.com/yanfeid/rlhf-alignment-template",
    featured: true,
    details: {
      problem: "Aligning LLMs with human preferences requires complex infrastructure: reward modeling, feedback collection, training pipelines, and deployment - often built from scratch for each project.",
      solution: "Created a comprehensive template covering the full RLHF stack: data preprocessing, transfer learning, reinforcement learning implementation, web-based feedback collection, and production deployment with Kubernetes.",
      impact: "Accelerates LLM alignment projects by providing battle-tested infrastructure for the complete RLHF workflow.",
      architecture: "Web UI (Feedback Collection) → Reward Model Training → RLHF Fine-tuning → Evaluation → Kubernetes Deployment",
      keyFeatures: [
        "RLHF training pipeline with reward modeling",
        "Transfer learning support for BERT, GPT, and other pre-trained models",
        "Interactive web interface for human feedback collection",
        "SHAP-based explainability dashboards for model transparency",
        "Docker + Kubernetes deployment with auto-scaling (HPA)",
        "Comprehensive evaluation metrics for alignment quality",
      ],
    },
  },
  {
    id: "inna-tunion-pier",
    imageUrl: "/images/projects/covers/hotel.svg",
    title: "Inna T'Union Pier - Hotel Website",
    description:
      "A fullstack end-to-end hotel website with booking system, content management, and responsive design.",
    longDescription:
      "Complete hotel website built from scratch featuring room booking, availability management, photo galleries, and an intuitive content management system. Designed for a boutique hotel experience with modern aesthetics.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/wildhoneysocialmedia/innatunionpier",
    featured: true,
    details: {
      problem: "Boutique hotels need custom websites that reflect their unique brand while providing essential booking functionality and easy content management for non-technical staff.",
      solution: "Built a fullstack solution with Next.js featuring a public-facing website with room showcases, booking system, and an admin dashboard for managing reservations, room availability, and website content.",
      impact: "Delivered a production-ready hotel website with seamless booking experience and easy content management.",
      keyFeatures: [
        "Responsive design optimized for all devices",
        "Room booking system with availability calendar",
        "Photo gallery with lightbox functionality",
        "Admin dashboard for content management",
        "SEO optimized with Next.js SSG/SSR",
        "Integration-ready for payment processors",
      ],
    },
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
