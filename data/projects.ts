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
    featured: true,
  },
  {
    id: "delayed-feedback-cvr",
    title: "Delayed-Feedback CVR Modeling",
    description:
      "Systematic solution for conversion delay bias in ads ranking - a core challenge in advertising recommendation systems.",
    longDescription:
      "Tackled the fundamental problem of label bias caused by conversion delays. Systematically compared multiple solutions including importance weighting and survival analysis. Built reproducible experiment framework with direct guidance for ads ranking systems.",
    technologies: ["Python", "PyTorch", "Survival Analysis", "Importance Weighting", "Ads Ranking"],
    featured: true,
  },
  {
    id: "mini-model-rca",
    title: "Mini-Model Root Cause Analysis",
    description:
      "Rapid fraud detection system reducing analysis time from 3 days to 1 hour with 60% reduction in manual analysis effort.",
    longDescription:
      "Solved real-time fraud detection challenges using IV and feature importance for feature selection. Achieved clear business value with significant reduction in manual analysis overhead.",
    technologies: ["Python", "XGBoost", "IV Analysis", "Feature Importance", "Fraud Detection"],
    featured: true,
  },
  {
    id: "agentic-fraud-analysis",
    title: "Agentic Fraud Analysis System",
    description:
      "Multi-agent orchestration system for automated fraud investigation with MCP tool calls architecture.",
    longDescription:
      "Innovative agent orchestration for fraud analysis with well-designed MCP tool calls architecture. Includes comprehensive CI/CD and engineering practices for production deployment.",
    technologies: ["Python", "LangChain", "MCP", "Multi-Agent", "CI/CD"],
    featured: true,
  },
  {
    id: "rmr-agent",
    title: "RMR Agent",
    description:
      "Automated system that converts research code into production-ready format, bridging the gap between experimentation and deployment.",
    longDescription:
      "Intelligent agent that transforms messy research notebooks and scripts into clean, production-ready code with proper structure, documentation, and engineering best practices.",
    technologies: ["Python", "AST", "Code Generation", "LLM", "MLOps"],
    featured: true,
  },
];
