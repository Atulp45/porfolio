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
  id: "attendance-management",
  title: "Attendance Management System",
  category: "Web Application",
  categoryColor: "secondary",
  description:
    "An Attendance Management System designed to simplify student attendance tracking and record management. The application helps manage attendance records digitally, making it easier to monitor student attendance and maintain organized records.",
  technologies: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/Atulp45/bert-qlora-classifier",
  demo: "",
  featured: true,
  metrics: [
    { label: "Attendance Tracking", value: "Digital" },
    { label: "Record Management", value: "Automated" },
  ],
  capabilities: [
    "Digital student attendance tracking",
    "Attendance record management",
    "Student attendance monitoring",
    "Organized attendance records",
  ],
},


{
  id: "amazon-clone",
  title: "Amazon Website Clone",
  category: "Frontend Development",
  categoryColor: "secondary",
  description:
    "A frontend clone of the Amazon website built using HTML and CSS. The project recreates the e-commerce website layout with a navigation bar, product categories, product cards, and a responsive design to practice web development skills.",
  technologies: ["HTML5", "CSS3"],
  github: "https://github.com/Atulp45",
  demo: "",
  featured: true,
  metrics: [
    { label: "Technologies", value: "HTML & CSS" },
    { label: "Project Type", value: "Frontend" },
  ],
  capabilities: [
    "Amazon-inspired homepage design",
    "Navigation bar and search section UI",
    "Product categories and product cards",
    "CSS-based styling and layout",
  ],
 },
  
]

export const featuredProjects = projects.filter((p) => p.featured)
