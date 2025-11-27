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
      "Hosted a n8n server to automate the health-check on 300+ servers within 20 seconds, achieving 90% speed improvement. Additionally, I implemented a daily summary workflow that collects previous day's reports to verify execution status.",
    thumbnail: CyberLink,
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
          "I implemented an n8n server to automate the process, creating workflows to check the health of servers, the correctness of critical services, and send alerts to the DevOps team via email and SMS. Each service will be monitored at different schedules based on its importance. Furthermore, I developed a comprehensive daily summary workflow that aggregates reports from the previous day to verify that all health checks were executed as scheduled. The results will be compiled into a detailed summary and automatically sent via email, ensuring the team has a clear overview of the system's daily status and any potential issues.",
      },
      {
        title: "Impact",
        content:
          "The automated system reduced health-check time from several minutes to under 20 seconds, a 90% improvement in speed. It also enabled proactive issue detection, minimizing downtime and improving overall server reliability.",
      },
      {
        title: "Lessons Learned",
        content:
          "I gained hands-on experience in workflow automation, server management, and the importance of efficient monitoring in a production environment. I also learned to work with n8n and integrate it with other internal tools.",
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
          "The company needed to improve data accessibility for non-technical team members to perform BI tasks. Also, the company wished to automate repetitive data processing tasks to reduce manual effort and improve efficiency.",
      },
      {
        title: "Solution",
        content:
          "For the first task, I built a natural language query system that allows users to query the company's database (BigQuery) with plain English. This involves LLMs and RAG techniques to understand and process user queries effectively. For the second task, I built an end-to-end data pipeline with Apache Airflow and dbt to automate data extraction, transformation, and loading. On top of this, I leveraged over 50 monitoring metrics and deployed on GCP via Terraform to ensure data quality and pipeline reliability.",
      },
      {
        title: "Impact",
        content:
          "The natural language query system improved data query accuracy by 5% over existing open-source alternatives. The automated data orchestration system reduced manual effort by 95%, allowing the data team to focus on more strategic initiatives.",
      },
      {
        title: "Lessons Learned",
        content:
          "I learned to build and deploy end-to-end data products, from creating NLP-powered interfaces to architecting robust and scalable data pipelines. This project solidified my skills in data engineering and MLOps, and it also taught me the importance of workflow automation and observability in maintaining stable model deployment.",
      },
    ],
    links: [],
  },
  {
    title: "Teaching Assistant",
    client: "NTU Machine Learning Course",
    period: "Jan. 2025 - Present",
    description:
      "Developed and deployed an AI-driven grading system. This system automates seven different model evaluation pipelines. I also performed load testing and monitored the system to ensure its stability.",
    thumbnail: JudgeBoi,
    tags: [
      "AI Grading System",
      "n8n",
      "Load Testing",
      "System Design",
      "API Integration",
      "Docker",
    ],
    role: "Teaching Assistant",
    duration: "Ongoing",
    details: [
      {
        title: "Challenge",
        content:
          "Managing the grading process for over 1100 students in a graduate-level Machine Learning course, which required evaluating diverse models and ensuring system stability under high load.",
      },
      {
        title: "Solution",
        content:
          "I developed an AI-driven grading system automating 7 evaluation pipelines with third-party API integration and self-trained models. I also performed load testing by Locust to optimize throughput and latency. To ensure system stability, I deployed an n8n workflow that will back up the system weekly and monitor system metrics. including resource allocation and Docker container logs.",
      },
      {
        title: "Impact",
        content:
          "The system successfully served over 1100 students with reliable performance. The automated monitoring and backup workflows ensured system stability and effective resource management.",
      },
      {
        title: "Lessons Learned",
        content:
          "This experience strengthened my ability to design AI systems and ensure their reliability and effectiveness for production environments.",
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
  {
    title: "Instructor",
    client: "NTUEE Camp Teaching Group",
    period: "2022 Summer",
    description:
      "Taught more than a hundred of students of training their automated speech recognition model using CNN, and later be incorporated into a robot dog to perform actions based on the speech.",
    tags: ["ASR", "CNN", "Robot Dog", "Speech Recognition", "Teaching"],
    role: "Instructor",
    duration: "2 months",
    details: [
      {
        title: "Challenge",
        content:
          "Teaching complex ASR concepts to students and integrating them with hardware.",
      },
      {
        title: "Solution",
        content:
          "I guided students through the entire pipeline of building an automated speech recognition system. This included audio preprocessing techniques such as converting raw audio into Mel-spectrograms, designing and training Convolutional Neural Networks (CNNs) using Cross-Entropy Loss, and finally deploying the trained models onto robot dogs to execute commands based on recognized speech.",
      },
      {
        title: "Impact",
        content:
          "100+ students successfully trained models and controlled robot dogs.",
      },
      {
        title: "Lessons Learned",
        content:
          "I gained experience in AI model training and communicating complex concepts to high school students.",
      },
    ],
    links: [],
  },
];
