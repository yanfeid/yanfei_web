export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
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
    id: "agentic-fraud-analysis",
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
    title: "Mini Model - Fraud Diagnostics Platform",
    description:
      "An end-to-end pipeline for automated fraud trend analysis, model performance diagnostics, and feature importance evaluation.",
    longDescription:
      "Automates the complete fraud diagnostics workflow: validates transaction datasets, enriches data with 25,000+ features, calculates Information Value (IV) using distributed processing, and generates comprehensive performance reports with actionable insights.",
    technologies: ["Python", "BigQuery", "Dataproc", "Shifu", "IV Analysis", "Spark"],
    githubUrl: "https://github.com/yanfeid/mini-model",
    featured: true,
    details: {
      problem: "Traditional fraud root cause analysis required days of manual investigation, processing large datasets with thousands of features to identify model degradation and fraud trend shifts.",
      solution: "Built an automated pipeline that validates datasets, enriches with 25,000+ features via QPull, calculates IV using distributed Shifu processing, and generates professional HTML reports with visualizations.",
      impact: "Reduced analysis time from 3 days to hours, with 50% cost reduction through dynamic cluster sizing and 82-87% performance improvement via parallel processing.",
      keyFeatures: [
        "Automated quality control: validates datasets (10k+ records, 5-60% bad rate)",
        "Intelligent chunking for large datasets (>26k rows) with parallel processing",
        "Dynamic Dataproc cluster sizing for cost optimization",
        "Information Value (IV) calculation via distributed Shifu",
        "Comprehensive metrics: AUC, ROC, KS, precision/recall for all features",
        "Professional HTML email reports with visualizations and ZIP archives",
        "Mock testing framework for offline development",
      ],
    },
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
