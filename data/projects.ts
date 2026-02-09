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
  };
}

export const projects: Project[] = [
  {
    id: "shopping-feed-recsys",
    title: "Shopping Feed Recommendation System",
    description:
      "Industrial-grade recommendation pipeline at Fintech with two-tower retrieval and fine-ranking, directly integrated with ranking and auction systems.",
    longDescription:
      "Complete end-to-end recommendation system from candidate generation to fine-rank. Addressed core RecSys challenges including delayed-feedback bias and class-imbalance. Feature Store integration demonstrates MLOps maturity with real business value loop.",
    technologies: ["Python", "TensorFlow", "Spark", "Feature Store", "Two-Tower", "Fine-Rank"],
    githubUrl: "https://github.com/yanfeid/shopping-feed-recsys",
    featured: true,
    details: {
      problem: "Building a scalable recommendation system that handles millions of products while maintaining real-time performance and addressing inherent biases in user feedback data.",
      solution: "Implemented a two-tower architecture for efficient candidate retrieval, followed by a fine-ranking model for precise ordering. Integrated with Feature Store for real-time feature serving.",
      impact: "Significant improvement in shopping feed engagement metrics with direct integration into ranking and auction systems.",
      keyFeatures: [
        "Two-tower model for candidate generation with sub-100ms latency",
        "Fine-ranking model with attention mechanisms",
        "Delayed-feedback bias correction using importance weighting",
        "Class-imbalance handling with focal loss and sampling strategies",
        "Feature Store integration for real-time feature serving",
        "A/B testing framework for model iteration",
      ],
    },
  },
  {
    id: "delayed-feedback-cvr",
    title: "Delayed-Feedback CVR Modeling",
    description:
      "Systematic solution for conversion delay bias in ads ranking - a core challenge in advertising recommendation systems.",
    longDescription:
      "Tackled the fundamental problem of label bias caused by conversion delays. Systematically compared multiple solutions including importance weighting and survival analysis. Built reproducible experiment framework with direct guidance for ads ranking systems.",
    technologies: ["Python", "PyTorch", "Survival Analysis", "Importance Weighting", "Ads Ranking"],
    githubUrl: "https://github.com/yanfeid/delayed-feedback-cvr",
    featured: true,
    details: {
      problem: "Conversion events in advertising often occur days or weeks after ad impressions, leading to significant label bias when training CVR models with recent data.",
      solution: "Systematic comparison and implementation of multiple approaches: importance weighting, survival analysis models, and hybrid methods to correct for delayed feedback bias.",
      impact: "Improved CVR prediction accuracy by addressing label bias, with reproducible experiment framework for ongoing model iteration.",
      keyFeatures: [
        "Importance weighting with propensity score estimation",
        "Survival analysis models (Kaplan-Meier, Cox proportional hazards)",
        "Dual-model approach separating delay and conversion prediction",
        "Reproducible experiment framework with configurable baselines",
        "Comprehensive offline and online evaluation metrics",
      ],
    },
  },
  {
    id: "mini-model-rca",
    title: "Mini-Model Root Cause Analysis",
    description:
      "Rapid fraud detection system reducing analysis time from 3 days to 1 hour with 60% reduction in manual analysis effort.",
    longDescription:
      "Solved real-time fraud detection challenges using IV and feature importance for feature selection. Achieved clear business value with significant reduction in manual analysis overhead.",
    technologies: ["Python", "XGBoost", "IV Analysis", "Feature Importance", "Fraud Detection"],
    githubUrl: "https://github.com/yanfeid/mini-model-rca",
    featured: true,
    details: {
      problem: "Traditional fraud root cause analysis required 3+ days of manual investigation by analysts, creating bottlenecks in fraud response.",
      solution: "Built lightweight 'mini-models' that rapidly identify key features driving fraud patterns, combining Information Value (IV) analysis with tree-based feature importance.",
      impact: "Reduced analysis time from 3 days to 1 hour, with 60% reduction in manual analysis effort.",
      keyFeatures: [
        "Information Value (IV) based feature screening",
        "XGBoost feature importance extraction",
        "Automated feature drift detection",
        "Interactive visualization dashboard",
        "Integration with existing fraud detection pipeline",
      ],
    },
  },
  {
    id: "agentic-fraud-analysis",
    title: "Agentic Fraud Analysis System",
    description:
      "Multi-agent orchestration system for automated fraud investigation with MCP tool calls architecture.",
    longDescription:
      "Innovative agent orchestration for fraud analysis with well-designed MCP tool calls architecture. Includes comprehensive CI/CD and engineering practices for production deployment.",
    technologies: ["Python", "LangChain", "MCP", "Multi-Agent", "CI/CD"],
    githubUrl: "https://github.com/yanfeid/agentic-fraud-analysis",
    featured: true,
    details: {
      problem: "Fraud investigation requires analyzing multiple data sources, running various queries, and synthesizing findings - a time-consuming manual process.",
      solution: "Built a multi-agent system where specialized agents handle different aspects of fraud investigation, orchestrated through MCP (Model Context Protocol) tool calls.",
      impact: "Automated significant portions of fraud investigation workflow with consistent, auditable analysis trails.",
      keyFeatures: [
        "Multi-agent orchestration with specialized roles",
        "MCP tool calls for structured agent-tool interaction",
        "Automated evidence gathering from multiple data sources",
        "Natural language report generation",
        "CI/CD pipeline for agent deployment and testing",
        "Audit logging and explainability features",
      ],
    },
  },
  {
    id: "rmr-agent",
    title: "RMR Agent",
    description:
      "Automated system that converts research code into production-ready format, bridging the gap between experimentation and deployment.",
    longDescription:
      "Intelligent agent that transforms messy research notebooks and scripts into clean, production-ready code with proper structure, documentation, and engineering best practices.",
    technologies: ["Python", "AST", "Code Generation", "LLM", "MLOps"],
    githubUrl: "https://github.com/yanfeid/rmr-agent",
    featured: true,
    details: {
      problem: "Research code is often messy, poorly documented, and difficult to deploy. The gap between experimentation and production creates significant delays in ML projects.",
      solution: "An LLM-powered agent that analyzes research code, understands its intent, and refactors it into production-ready format with proper structure, error handling, and documentation.",
      impact: "Significantly reduces the time to productionize research code while ensuring engineering best practices.",
      keyFeatures: [
        "AST-based code analysis and understanding",
        "LLM-powered code refactoring and documentation",
        "Automatic test generation",
        "Code style enforcement and linting",
        "Dependency management and containerization",
        "Integration with MLOps pipelines",
      ],
    },
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
