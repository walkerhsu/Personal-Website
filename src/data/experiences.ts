import React from "react";

export interface Experience {
  title: string;
  period: string;
  description: string;
  tags: string[];
  role: string;
  client: string;
  duration: string;
  details: {
    title: string;
    content: string;
  }[];
  links: {
    label: string;
    url: string;
    icon: React.ElementType;
  }[];
}

export const experiences: Experience[] = [
  {
    title: "Cloud Computing Research and Development Intern",
    client: "CyberLink Corp.",
    period: "July 2025 - Present",
    description:
      "Hosted a n8n server to automate the health-check on 300+ servers within 20 seconds, achieving 90% speed improvement.",
    tags: ["n8n", "Automation", "Server Health-check"],
    role: "R&D Intern",
    duration: "Ongoing",
    details: [
      {
        title: "Challenge",
        content:
          "Manual server health checks were time-consuming and inefficient, creating a bottleneck in monitoring the company's extensive server infrastructure.",
      },
      {
        title: "Solution",
        content:
          "I implemented an n8n server to automate the process, creating workflows to ping servers, check critical services, and send real-time alerts to the DevOps team. This involved designing a scalable and resilient automation architecture.",
      },
      {
        title: "Impact",
        content:
          "The automated system reduced health-check time from several minutes to under 20 seconds, a 90% improvement. It also enabled proactive issue detection, minimizing downtime and improving overall server reliability.",
      },
      {
        title: "Lessons Learned",
        content:
          "I gained hands-on experience in workflow automation, server management, and the importance of efficient monitoring in a large-scale environment. I also learned to work with n8n and integrate it with other internal tools.",
      },
    ],
    links: [],
  },
  {
    title: "Data Engineer Intern",
    client: "KKCompany Technologies",
    period: "July 2024 - June 2025",
    description:
      "Built a natural language query system using RAG and LLMs, achieving a 5% improvement in accuracy against other open source projects. On the other hand, I built an automated data orchestration system using Apache Airflow and dbt from scratch, reducing manual effort by 95%.",
    tags: [
      "RAG",
      "LLM",
      "Apache Airflow",
      "dbt",
      "Data ETL",
      "BigQuery",
      "MLOps",
    ],
    role: "Data Engineer Intern",
    duration: "1 year",
    details: [
      {
        title: "Challenge",
        content:
          "The company needed to improve data accessibility for non-technical team members to perform BI tasks. Also, the company wished to automate repetitive data processing tasks for better efficiency and scalability.",
      },
      {
        title: "Solution",
        content:
          "For the first task, I developed a natural language query system that allows users to query the company's database (BigQuery) with plain English. This involves LLMs and RAG techniques to understand and process user queries effectively. For the second task, I built an end-to-end data pipeline with Apache Airflow and dbt to automate data extraction, transformation, and loading. On top of this, I implemented monitoring and alerting mechanisms to ensure data quality and pipeline reliability.",
      },
      {
        title: "Impact",
        content:
          "The natural language query system improved data query accuracy by 5% over existing open-source alternatives. The automated data orchestration system reduced manual effort by 95%, allowing the data team to focus on more strategic initiatives.",
      },
      {
        title: "Lessons Learned",
        content:
          "I learned to build and deploy end-to-end data products, from creating NLP-powered interfaces to architecting robust and scalable data pipelines. This project solidified my skills in data engineering and MLOps.",
      },
    ],
    links: [],
  },
  {
    title: "Teaching Assistant",
    client: "NTU Machine Learning Courses",
    period: "Jan. 2025 - Present",
    description:
      "Developed a Transformer/LLM assignment using Gemma, an image generation assignment using ControlNet. Hosted an AI grading system for 1500+ students and performed load testing.",
    tags: ["Gemma", "ControlNet", "Grading System", "Load Testing"],
    role: "Teaching Assistant",
    duration: "Ongoing",
    details: [
      {
        title: "Challenge",
        content:
          "Scaling the grading and assignment process for over 1500 students in advanced machine learning courses while ensuring the curriculum remained current with the latest advancements in AI.",
      },
      {
        title: "Solution",
        content:
          "I designed and developed new assignments on cutting-edge topics, including a Transformer/LLM assignment using Google's Gemma and an image generation assignment with ControlNet. I also deployed and managed an automated grading system, performing load testing to ensure it could handle peak submission times.",
      },
      {
        title: "Impact",
        content:
          "The new assignments provided students with practical experience in state-of-the-art AI models. The automated grading system enabled the course to handle a large student body efficiently, reducing grading turnaround time and improving fairness.",
      },
      {
        title: "Lessons Learned",
        content:
          "I gained experience in curriculum design, creating and managing automated assessment systems, and overseeing the technical infrastructure for large-scale educational technologies. I also improved my ability to explain complex topics to a diverse audience.",
      },
    ],
    links: [],
  },
  {
    title: "Instructor",
    client: "NTUEE Programming Course",
    period: "July 2025 - Aug. 2025",
    description:
      "Designed and taught over 320 learners about courses on LLM fundamentals, multimodal AI applications, and AI Agents. Developed a Python AI Agent integrating Google Calendar and Gmail via Gemini and GCP with natural language commands.",
    tags: ["LLM", "Multimodal AI", "AI Agents", "Python", "Gemini", "GCP"],
    role: "Instructor",
    duration: "2 months",
    details: [
      {
        title: "Challenge",
        content:
          "Introduce beginners to complex AI topics and provide them with hands-on programming experience in a short timeframe. The goal was to make AI accessible and exciting for students new to the field.",
      },
      {
        title: "Solution",
        content:
          "I designed a comprehensive curriculum covering LLM fundamentals, multimodal AI applications, and the principles of AI agents. I also led a hands-on project where students developed a personal AI assistant using Gemini and Google Cloud Platform (GCP) to interact with Google Calendar and Gmail.",
      },
      {
        title: "Impact",
        content:
          "Successfully educated over 320 students, many of whom had little or no prior programming experience, in advanced AI concepts. The Python AI agent project provided a practical application of the concepts taught and received positive feedback from learners.",
      },
      {
        title: "Lessons Learned",
        content:
          "This experience honed my teaching and communication skills, particularly in breaking down complex technical topics for a non-expert audience. I also deepened my own understanding of building practical AI applications from scratch and managing a classroom environment.",
      },
    ],
    links: [],
  },
];
