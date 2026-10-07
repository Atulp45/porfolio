// Skills data organized by category

export const skillCategories = [
  {
    id: "programming",
    title: "Programming",
    subtitle: "Core Languages",
    icon: "terminal",
    iconBg: "bg-secondary-fixed",
    iconColor: "text-secondary",
    skills: [
      { name: "Python", level: "Primary" },
      { name: "C / C++", level: "Systems" },
      { name: "JavaScript", level: "Frontend" },
      { name: "SQL", level: "Databases" },
    ],
  },
  {
    id: "aiml",
    title: "AI / ML",
    subtitle: "Core Frameworks",
    icon: "psychology",
    iconBg: "bg-primary-fixed",
    iconColor: "text-primary",
    skills: [
      { name: "PyTorch", level: "Primary" },
      { name: "HuggingFace", level: "PEFT/LoRA" },
      { name: "Scikit-learn", level: "Classical ML" },
      { name: "NumPy / Pandas", level: "Data" },
    ],
  },
  {
    id: "ai-engineering",
    title: "AI Engineering",
    subtitle: "LLM & RAG Stack",
    icon: "hub",
    iconBg: "bg-tertiary-fixed",
    iconColor: "text-tertiary",
    skills: [
      { name: "LangChain", level: "RAG" },
      { name: "LangGraph", level: "Agents" },
      { name: "Vector Search", level: "ChromaDB" },
      { name: "QLoRA", level: "Fine-tuning" },
    ],
  },
  {
    id: "cloud-data",
    title: "Cloud / Data",
    subtitle: "Infrastructure",
    icon: "cloud",
    iconBg: "bg-surface-variant",
    iconColor: "text-primary",
    skills: [
      { name: "Google Cloud", level: "GCP" },
      { name: "BigQuery", level: "Analytics" },
      { name: "Firebase", level: "Realtime DB" },
      { name: "FastAPI", level: "Backend" },
    ],
  },
  {
    id: "development",
    title: "Development",
    subtitle: "Software Tooling",
    icon: "code",
    iconBg: "bg-secondary-fixed",
    iconColor: "text-secondary",
    skills: [
      { name: "React", level: "Frontend" },
      { name: "Git / GitHub", level: "Version Ctrl" },
      { name: "REST APIs", level: "Integration" },
      { name: "Linux / Bash", level: "Systems" },
    ],
  },
]
