import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import landsatImg from "/projects/landsat.png";
import caRPG from "/projects/CaRPG.png";
import llmDBMS from "/projects/LLM_DBMS.png";
import waterIntake from "/projects/WaterIntake.png";
import PreVision from "/projects/PreVision.png";
import eyeOS from "/projects/eyeOS_thumbnail.png";

export interface Project {
  id: string;
  title: string;
  period: string;
  description: string;
  thumbnail?: string;
  tags: string[];
  award?: string;
  readme?: string;
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

export const projects: Project[] = [
  {
    id: "eyeos",
    title: "eyeOS: AI Eye-Habit Coach for macOS",
    period: "Sep. 2026 - Oct. 2026",
    description:
      "Built a macOS menu-bar app that reduces digital eye strain by coaching the habits behind it. It tracks blinking, staring, screen distance, posture, and eye rubbing on-device via webcam, and uses an LLM agent to choose the smallest useful intervention without interrupting focused work.",
    thumbnail: eyeOS,
    tags: [
      "Swift",
      "SwiftUI",
      "Python",
      "MediaPipe",
      "OpenCV",
      "LLM Agents",
      "Ollama",
      "Computer Vision",
    ],
    role: "Developer",
    client: "Personal Project",
    duration: "2 months",
    details: [
      {
        title: "Challenge",
        content:
          "People with long screen time, such as students, engineers, and accountants, often suffer from computer vision syndrome caused by infrequent blinking, leaning in, and rubbing their eyes. Existing break reminders are rigid and interrupt focused work, so they tend to be ignored.",
      },
      {
        title: "Solution",
        content:
          "eyeOS pairs a SwiftUI menu-bar app with a Python sidecar over a localhost WebSocket. MediaPipe turns each webcam frame into blink, stare, distance, posture, and rub metrics, combined into a live 0–100 eye score, and camera frames never leave the Mac. Small nudges happen in the moment: the screen blurs during prolonged staring until you blink, edges dim when you lean in, and eye rubbing prompts palming instead. For larger actions, a Claude agent picks the smallest useful step, such as adjusting brightness, contrast, dark mode, or Do Not Disturb, or guiding a voice-coached eye exercise. A local Gemma model via Ollama checks focus every ~30 seconds so nudges wait during deep work.",
      },
      {
        title: "Impact",
        content:
          "eyeOS adapts to the user rather than interrupting them. A learning loop measures each action against how the user's eyes responded, turns the outcomes into memory rules, and runs a reflection pass after each session. An Agent tab shows every decision and its reasoning for full transparency.",
      },
      {
        title: "Lessons Learned",
        content:
          "I learned to design an agentic system that balances on-device and cloud models for privacy and latency, to build real-time computer vision pipelines, and to ship a native macOS app that bundles its own Python runtime and models.",
      },
    ],
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/walkerhsu/eyeOS",
        icon: GitHubIcon,
      },
    ],
  },
  {
    id: "enterprise-llm-platform",
    title: "Enterprise LLM Platform",
    period: "Sep. 2026 - May 2027 (Expected)",
    description:
      "Building an on-premises LLM platform that enables enterprises to securely deploy, manage, and customize LLMs without sending sensitive data to external cloud providers.",
    tags: ["LLM", "On-Premise", "finetuning", "RAG", "MLOps", "Docker"],
    role: "Developer",
    client: "Industry-Sponsored Capstone",
    duration: "9 months",
    details: [
      {
        title: "Challenge",
        content:
          "Enterprises want the benefits of large language models but often cannot send proprietary or regulated data to third-party cloud APIs. Building and operating their own LLM stack requires specialized expertise most teams lack.",
      },
      {
        title: "Solution",
        content:
          "We developed an on-premise platform that gives enterprises an end-to-end workflow to build their own LLMs, from preparing internal data to finetuning, serving, and integrating models, all running on infrastructure they control.",
      },
      {
        title: "Impact",
        content:
          "The platform lowers the barrier for enterprises to adopt LLMs while keeping data private and under their own governance.",
      },
      {
        title: "Lessons Learned",
        content:
          "I gained experience in designing LLM infrastructure for enterprise constraints such as data privacy, limited compute, and on-premise deployment.",
      },
    ],
    links: [],
  },
  {
    id: "landsat",
    title: "Landsat Data Management System",
    period: "2024 Fall",
    description:
      "Developed a management system for Landsat Surface Reflectance Data. The project involved building a web application to visualize and analyze satellite data, receiving notifications when the satellite passes over specific regions.",
    thumbnail: landsatImg,
    tags: [
      "Python",
      "FastAPI",
      "Next.js",
      "GCP",
      "Firebase",
      "Data Engineering",
    ],
    award: "Honorable Mention of NASA International Space Apps Challenge 2024",
    role: "Full-Stack Developer",
    client: "NASA Space Apps Challenge",
    duration: "2 months",
    details: [
      {
        title: "Challenge",
        content:
          "Managing and interpreting vast amounts of satellite data from Landsat missions is a complex task for researchers and environmental analysts. There was a need for a user-friendly platform to visualize this data and get timely updates.",
      },
      {
        title: "Solution",
        content:
          "I and my team developed a full-stack web application with a Python FastAPI backend and a Next.js frontend. The system allows users to select regions of interest on a map and subscribe to notifications for new satellite imagery. The backend performs data ETL and calculates the relevant statistics, while the frontend provides interactive visualizations.",
      },
      {
        title: "Impact",
        content:
          "The project won an Honorable Mention at the NASA International Space Apps Challenge 2024. It provides a valuable tool for researchers to access and analyze Landsat data more efficiently.",
      },
      {
        title: "Lessons Learned",
        content:
          "Technically, I gained hands-on experience in designing the pipeline of performing data ETL and creating interactive visualizations. I also gained knowledge on deploying my projects on Google Cloud Platform (GCP). Additionally, collaborating with a team on this project enhanced my communication and project management skills.",
      },
    ],
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/walkerhsu/Landsat-app",
        icon: GitHubIcon,
      },
    ],
  },
  {
    id: "carpg",
    title: "CaRPG: in-car RPG game with shooting gameplay",
    period: "Mar. 2024 - June 2024",
    description:
      "Led a 5-member team to develop an AI-powered in-car RPG system with shooting gameplay and gesture detection, achieving 90% recognition accuracy and winning 1st Place of the AUO Enterprise Award at the 2024 MakeNTU Hackathon.",
    thumbnail: caRPG,
    tags: ["Python", "Pytorch", "PyGame", "FastAPI", "Flutter", "NLP"],
    award: "1st place of AUO Enterprise Award in MakeNTU 2024",
    role: "Full-Stack Engineer | Team Leader",

    client: "AUO",
    duration: "3 months",
    details: [
      {
        title: "Challenge",
        content:
          "Long car rides can be boring for passengers. The challenge was to create an engaging in-car entertainment experience that is interactive and context-aware with the environment.",
      },
      {
        title: "Solution",
        content:
          "I led the development of an in-car RPG game where the story is dynamically generated by a Large Language Model (LLM) based on the car's surroundings. The game also features shooting gameplay using gesture detection by training a custom model. This provides an immersive experience for passengers during long journeys.",
      },
      {
        title: "Impact",
        content:
          "The project won the 1st place of the AUO Enterprise Award at MakeNTU 2024. It demonstrated a novel application of AI and gesture recognition for in-vehicle entertainment.",
      },
      {
        title: "Lessons Learned",
        content:
          "This project enhanced my leadership skills as I coordinated a team of developers to achieve our goals. Technically, I gained experience in integrating LLMs with real-time applications and implementing gesture recognition systems into a game system.",
      },
    ],
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/walkerhsu/makeNTU2024",
        icon: GitHubIcon,
      },
    ],
  },
  {
    id: "prevision",
    title: "Multimodal Perceptron in Autonomous Driving",
    period: "2024 Fall",
    description:
      "Developed a multimodal perceptron model to enhance perception in autonomous driving. The project involved finetuning LLaVA with LoRA and integrating YOLO and Depth Anything model to improve the object detection and the overall image QA accuracy.",
    thumbnail: PreVision,
    tags: [
      "Python",
      "Pytorch",
      "LLaVA",
      "YOLO",
      "Depth Anything",
      "Computer Vision",
      "finetuning",
    ],
    role: "Team Leader | Developer",

    client: "Deep Learning for Computer Learning Course",
    duration: "1 Semester",
    details: [
      {
        title: "Challenge",
        content:
          "The challenge was to improve the perception capabilities of autonomous vehicles by leveraging multimodal data and the overall image QA accuracy.",
      },
      {
        title: "Solution",
        content:
          "We introduce a new module that effectively combines various visual information, including the YOLO object detection results and depth maps from the Depth Anything model, with the LLaVA framework. By finetuning LLaVA using LoRA techniques, we enhanced its ability to process and understand complex driving scenes, leading to improved accuracy in object recognition and situational awareness.",
      },
      {
        title: "Impact",
        content:
          "The project significantly improved the perception capabilities of autonomous vehicles, enabling them to better understand and react to their environment. This advancement has the potential by boosting the accuracy with about 60%.",
      },
      {
        title: "Lessons Learned",
        content:
          "This project enhanced my skills in multimodal learning and model finetuning techniques. I learned how to effectively integrate different data modalities to improve model performance in complex tasks such as autonomous driving.",
      },
    ],
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/walkerhsu/PreVision",
        icon: GitHubIcon,
      },
    ],
  },
  {
    id: "water-intake",
    title: "Water Intake Tracking System",
    period: "2024 Fall",
    description:
      "Developed a system to track and encourage water intake using embedded systems and a mobile application. The project involved creating a smart device that can monitors consumption and provides reminders through the application.",
    thumbnail: waterIntake,
    tags: ["C", "Algorithm", "Embedded Systems", "Flutter"],
    role: "Software Engineer",
    client: "Course Project",
    duration: "1 Semester",
    details: [
      {
        title: "Challenge",
        content:
          "Many people struggle to maintain proper hydration throughout the day. The challenge was to create a lightweight system that not only tracks water intake but also encourages users to drink more water.",
      },
      {
        title: "Solution",
        content:
          "I developed a system that uses a combination of embedded systems and a mobile application to track water intake. The smart device first detected the sip events through analyzing the gyroscope data using threshold-based algorithms. Then, it calculates the consumption based on the series of angles with proper filters and parameter tuning. Finally, the device communicates with the mobile app via BLE to log the intake and send reminders to the user.",
      },
      {
        title: "Impact",
        content:
          "The system helps users maintain proper hydration by providing real-time feedback and reminders. It also serves as a valuable tool for health monitoring and data collection.",
      },
      {
        title: "Lessons Learned",
        content:
          "This project enhanced my skills in embedded systems programming and mobile app development. I learned how to process sensor data effectively, implement the consumption algorithm appropriately, and establish Bluetooth communication between devices. Additionally, I gained insights into user experience design for IoT devices and health-related applications.",
      },
    ],
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/walkerhsu/Water_Intake_Tracking_System",
        icon: GitHubIcon,
      },
    ],
  },
  {
    id: "llm-dbms",
    title: "LLM-Enhanced Database Management System",
    period: "2024 Spring",
    description:
      "Developed a database management system enhanced with LLM capabilities. The project involved integrating natural language processing features to allow users to interact with the database using natural languages. Also, it allows extracting information from audios and pdfs.",
    thumbnail: llmDBMS,
    tags: ["Python", "LLM", "Whisper", "LangChain", "SQL", "MongoDB"],
    role: "AI Engineer",
    client: "Course Project",
    duration: "1 Semester",
    details: [
      {
        title: "Challenge",
        content:
          "Traditional database systems require users to know a query language like SQL to retrieve information. This can be a barrier for non-technical users. Also, unstructured data like audio and PDFs are hard to query.",
      },
      {
        title: "Solution",
        content:
          "I developed a system that uses a Large Language Model (LLM) to translate natural language questions into database queries including SQL and MongoDB. It also uses OpenAI's Whisper to transcribe audio files and applies LangChain to process both audio and PDF documents, allowing the system to wisely extract the information in these unstructured data and upload to te database.",
      },
      {
        title: "Impact",
        content:
          "The system makes database interaction more accessible to a wider range of users and unlocks the information stored in unstructured data formats. It serves as a powerful tool for data analysis and retrieval.",
      },
      {
        title: "Lessons Learned",
        content:
          "This project enhanced my skills in database management, natural language processing (NLP), and working with unstructured data. I learned how to effectively integrate various technologies to create a cohesive system that improves user interaction with databases.",
      },
    ],
    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/walkerhsu/LLM-Enhanced-DBMS",
        icon: GitHubIcon,
      },
    ],
  },
];
