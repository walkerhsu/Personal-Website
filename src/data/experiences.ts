import React from "react";
import CyberLink from "/experiences/CyberLink.png";
import JudgeBoi from "/experiences/JudgeBoi.png";

export interface Experience {
  title: string;
  period: string;
  description: string;
  thumbnail?: string;
  tags: string[];
  role: string;
  client: string;
  duration: string;
  details: { title: string; content: string }[];
  links: { label: string; url: string; icon: React.ElementType }[];
}

export const experiences: Experience[] = [
  {
    title: "Organizer and Instructor",
    client: "NTUEE Programming Course, NTU",
    period: "Aug. 2025 - July 2026",
    description:
      "Designed and delivered lectures on LLM fundamentals and agent orchestration for 500+ students. Built an AI agent for prompt-injection defense and an agentic system integrating Google Calendar and Gmail with Gemini.",
    tags: ["LLM", "AI Agents", "Gemini", "Python", "Prompt Injection"],
    role: "Organizer and Instructor",
    duration: "1 year",
    details: [
      { title: "Teaching", content: "Designed and delivered lectures on LLM fundamentals and agent orchestration concepts for more than 500 students." },
      { title: "AI Systems", content: "Built an AI agent that searched for optimal defenses against prompt injection attacks, enhancing safety by 30%. Developed an agentic system integrating Google Calendar and Gmail using Gemini, reducing manual effort by 80%." },
    ],
    links: [],
  },
  {
    title: "Cloud Computing Research and Development Intern",
    client: "CyberLink Corp.",
    period: "July 2025 - Jan. 2026",
    description:
      "Built a health-check agentic workflow using n8n for 300+ cloud servers, reducing diagnosis latency by 90%. Developed production-level model orchestration across 20+ multimodal generation pipelines and shipped features from prototype through commercial release.",
    thumbnail: CyberLink,
    tags: ["n8n", "Automation", "Cloud", "Multimodal AI", "DevOps"],
    role: "Cloud Computing R&D Intern",
    duration: "7 months",
    details: [
      { title: "Automation", content: "Built a health-check agentic workflow using n8n for more than 300 cloud servers, reducing diagnosis latency by 90%." },
      { title: "Product Engineering", content: "Developed a production-level system supporting model orchestration across 20+ multimodal generation pipelines and shipped production-ready features from early prototyping through commercial release." },
    ],
    links: [],
  },
  {
    title: "Teaching Assistant",
    client: "Machine Learning Course, NTU",
    period: "Jan. 2025 - Jan. 2026",
    description:
      "Designed AI programming assignments on LLMs and VLMs, mentored students through office hours, and developed and maintained an AI grading platform serving 1,100+ students.",
    thumbnail: JudgeBoi,
    tags: ["LLM", "VLM", "AI Grading", "Backend", "GPU Infrastructure"],
    role: "Teaching Assistant",
    duration: "1 year",
    details: [
      { title: "Course Support", content: "Designed AI programming assignments on LLMs and VLMs and mentored students through office hours." },
      { title: "Platform Engineering", content: "Developed and maintained an AI grading platform serving more than 1,100 students, focusing on backend infrastructure, model evaluation, and GPU resource allocation." },
    ],
    links: [],
  },
  {
    title: "Data Engineer Intern",
    client: "KKCompany Technologies",
    period: "July 2024 - June 2025",
    description:
      "Optimized an information retrieval system using RAG and LLMs, improving accuracy by 5% against state-of-the-art methods. Built a distributed Airflow and dbt data pipeline, enhancing system scalability by 95%.",
    tags: ["RAG", "LLM", "Apache Airflow", "dbt", "Data Engineering", "MLOps"],
    role: "Data Engineer Intern",
    duration: "1 year",
    details: [
      { title: "Retrieval System", content: "Optimized an information retrieval system using RAG and LLMs, improving accuracy by 5% on an internal benchmark against state-of-the-art methods." },
      { title: "Data Platform", content: "Built a scalable data pipeline using distributed services including Apache Airflow and dbt, enhancing system scalability by 95%." },
    ],
    links: [],
  },
];
