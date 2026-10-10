// Projects data — edit this to add or update projects

export const projects = [
  {
id: "ai-grievance-classification-system",
title: "AI-Based Grievance Classification System",
category: "Machine Learning",
categoryColor: "primary",

description:
"An AI-based grievance classification system designed to classify complaints across different sectors and domains. It analyzes grievance text and categorizes complaints based on their content, helping organizations manage grievances more efficiently.",

technologies: [
"Python",
"Machine Learning",
"Natural Language Processing"
],
    github: "https://github.com/Atulp45/rag-research-assistant",

demo: "",
featured: true,

metrics: [],

capabilities: [
  "Multi-Sector Grievance Classification",
  "Text-Based Complaint Analysis",
  "Automatic Grievance Categorization",
  "Complaint Category Prediction",
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
