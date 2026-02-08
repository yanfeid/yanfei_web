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
    company: "Fintech",
    role: "Machine Learning Engineer",
    location: "San Jose, CA",
    period: "2023 - Present",
    description:
      "Building and deploying ML systems at scale to improve payment fraud detection and user experience.",
    achievements: [
      "Designed and implemented real-time fraud detection models serving millions of transactions daily",
      "Built MLOps pipelines reducing model deployment time by 60%",
      "Developed LLM-based customer service automation saving 40% support costs",
      "Led cross-functional initiatives to improve model explainability and compliance",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "Kubernetes",
      "Spark",
      "TensorFlow",
      "AWS",
    ],
  },
  {
    id: "protagolabs",
    company: "ProtagoLabs / Netmind.AI",
    role: "Machine Learning Engineer",
    location: "Remote",
    period: "2022 - 2023",
    description:
      "Developed distributed AI training infrastructure and LLM applications.",
    achievements: [
      "Architected distributed training system supporting 1000+ GPU clusters",
      "Implemented efficient data parallel training reducing training time by 45%",
      "Built RAG-based chatbot systems with custom knowledge bases",
      "Developed model serving infrastructure handling 10K+ QPS",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "CUDA",
      "Ray",
      "Docker",
      "LangChain",
      "FastAPI",
    ],
  },
  {
    id: "boston-derm",
    company: "Boston Derm Advocate",
    role: "Software Engineer",
    location: "Boston, MA",
    period: "2021 - 2022",
    description:
      "Developed healthcare technology solutions for dermatology practice management.",
    achievements: [
      "Built patient management system serving 50+ dermatology clinics",
      "Implemented ML-based skin condition classification with 92% accuracy",
      "Developed telemedicine platform increasing patient accessibility by 3x",
      "Automated appointment scheduling reducing administrative overhead by 30%",
    ],
    technologies: ["Python", "React", "Node.js", "PostgreSQL", "AWS", "TensorFlow"],
  },
];
