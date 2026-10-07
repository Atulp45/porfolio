// Projects data — edit this to add or update projects

export const projects = [
  {
    id: "rag-research-assistant",
    title: "AI Research Assistant (RAG)",
    category: "Agentic LLM",
    categoryColor: "primary",
    description:
      "A hybrid retrieval-augmented generation system for academic research. Combines dense vector search with BM25 sparse retrieval and neural reranking for high-precision document retrieval. Features self-corrective query decomposition via LangGraph agentic loop.",
    technologies: ["Python", "LangChain", "LangGraph", "ChromaDB", "FastAPI", "Llama 3"],
    github: "https://github.com/Atulp45/rag-research-assistant",
    demo: "",
    featured: true,
    metrics: [
      { label: "Retrieval Accuracy", value: "~94%" },
      { label: "Latency", value: "< 500ms" },
    ],
    capabilities: [
      "Hybrid dense + sparse retrieval",
      "Neural reranking pipeline",
      "Self-corrective agentic loop",
      "PDF & web source ingestion",
    ],
  },
  {
    id: "solar-dashboard",
    title: "Solar Monitoring Dashboard",
    category: "Data Engineering",
    categoryColor: "secondary",
    description:
      "Real-time solar energy monitoring platform built on Google Cloud. Ingests IoT sensor data via BigQuery streaming, processes it with Cloud Functions, and visualizes production metrics on an interactive React dashboard.",
    technologies: ["React", "Google Cloud", "BigQuery", "Firebase", "Python", "Recharts"],
    github: "https://github.com/Atulp45/solar-monitoring-dashboard",
    demo: "",
    featured: true,
    metrics: [
      { label: "Data Latency", value: "< 2s" },
      { label: "Uptime", value: "99.9%" },
    ],
    capabilities: [
      "Real-time IoT data ingestion",
      "BigQuery analytics pipeline",
      "Interactive metric visualizations",
      "Automated anomaly alerts",
    ],
  },
  {
    id: "ml-classifier",
    title: "Multi-class Text Classifier",
    category: "ML Engineering",
    categoryColor: "tertiary",
    description:
      "Fine-tuned BERT-based text classification system using QLoRA for parameter-efficient training. Achieves competitive accuracy on custom domain datasets with 4x reduced VRAM compared to full fine-tuning.",
    technologies: ["PyTorch", "Transformers", "QLoRA", "PEFT", "Scikit-learn", "Python"],
    github: "https://github.com/Atulp45/bert-qlora-classifier",
    demo: "",
    featured: true,
    metrics: [
      { label: "Accuracy", value: "92%+" },
      { label: "VRAM Reduction", value: "4x" },
    ],
    capabilities: [
      "QLoRA parameter-efficient fine-tuning",
      "Custom domain adaptation",
      "4-bit model quantization",
      "Inference API with FastAPI",
    ],
  },
  {
    id: "open-source-contrib",
    title: "Open Source Contributions",
    category: "Open Source",
    categoryColor: "secondary",
    description:
      "Contributions to ML tooling and open-source projects. Includes bug fixes, documentation improvements, and feature additions to Python/ML ecosystem libraries.",
    technologies: ["Python", "Git", "GitHub", "Pytest", "CI/CD"],
    github: "https://github.com/Atulp45",
    demo: "",
    featured: false,
    metrics: [],
    capabilities: [
      "Bug fixes and patches",
      "Documentation improvements",
      "Test coverage expansion",
      "Code review participation",
    ],
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
