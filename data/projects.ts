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
    id: "llm-rag-system",
    title: "Enterprise RAG System",
    description:
      "Production-ready Retrieval-Augmented Generation system for enterprise document search and Q&A.",
    longDescription:
      "Built a scalable RAG system that processes millions of documents, using hybrid search (dense + sparse retrieval) and custom embedding models for domain-specific knowledge.",
    technologies: ["Python", "LangChain", "Pinecone", "FastAPI", "React", "Docker"],
    githubUrl: "https://github.com/yanfei-dai/enterprise-rag",
    featured: true,
  },
  {
    id: "distributed-training",
    title: "Distributed ML Training Framework",
    description:
      "Custom distributed training framework for large-scale model training across GPU clusters.",
    longDescription:
      "Implemented efficient data parallel and model parallel training strategies with custom gradient synchronization and checkpointing.",
    technologies: ["PyTorch", "CUDA", "Ray", "NCCL", "Kubernetes"],
    githubUrl: "https://github.com/yanfei-dai/distributed-ml",
    featured: true,
  },
  {
    id: "fraud-detection",
    title: "Real-time Fraud Detection",
    description:
      "ML pipeline for real-time transaction fraud detection with sub-100ms latency.",
    technologies: ["Python", "Spark", "Kafka", "TensorFlow", "Redis"],
    featured: true,
  },
  {
    id: "skin-classification",
    title: "Dermatology AI Assistant",
    description:
      "Deep learning model for automated skin condition classification from clinical images.",
    technologies: ["PyTorch", "OpenCV", "FastAPI", "React Native"],
    githubUrl: "https://github.com/yanfei-dai/derm-ai",
  },
  {
    id: "mlops-platform",
    title: "MLOps Pipeline Platform",
    description:
      "End-to-end MLOps platform for model training, versioning, and deployment automation.",
    technologies: ["Python", "Airflow", "MLflow", "Kubernetes", "Terraform"],
    githubUrl: "https://github.com/yanfei-dai/mlops-platform",
  },
  {
    id: "llm-finetuning",
    title: "LLM Fine-tuning Toolkit",
    description:
      "Toolkit for efficient fine-tuning of large language models using LoRA and QLoRA techniques.",
    technologies: ["Python", "PyTorch", "Transformers", "PEFT", "bitsandbytes"],
    githubUrl: "https://github.com/yanfei-dai/llm-finetune",
  },
];
