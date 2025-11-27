import React from "react";

import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Cloud as CloudIcon,
  Build as BuildIcon,
  DataObject as DataObjectIcon,
  Psychology as PsychologyIcon,
  AutoGraph as AutoGraphIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  School as SchoolIcon,
  Language as LanguageIcon,
  SmartToy as SmartToyIcon,
  Image as ImageIcon,
  Movie as MovieIcon,
  Mic as MicIcon,
  Web as WebIcon,
  PhoneAndroid as PhoneAndroidIcon,
  Memory as MemoryIcon,
} from "@mui/icons-material";

interface IconMapperProps {
  tag: string;
  className?: string;
}

export const getIconForTag = (tag: string) => {
  const lowerTag = tag.toLowerCase();

  // Programming Languages
  if (lowerTag.includes("python")) return <CodeIcon />;
  if (lowerTag.includes("c") && lowerTag.length < 3) return <CodeIcon />; // C, C++
  if (lowerTag.includes("java")) return <CodeIcon />;
  if (lowerTag.includes("sql")) return <StorageIcon />;

  // Frameworks & Libraries
  if (lowerTag.includes("react")) return <WebIcon />;
  if (lowerTag.includes("next")) return <WebIcon />;
  if (lowerTag.includes("fastapi")) return <WebIcon />;
  if (lowerTag.includes("flutter")) return <PhoneAndroidIcon />;
  if (lowerTag.includes("pytorch")) return <PsychologyIcon />;
  if (lowerTag.includes("tensorflow")) return <PsychologyIcon />;
  if (lowerTag.includes("hugging")) return <PsychologyIcon />; // Hugging Face
  if (lowerTag.includes("langchain")) return <PsychologyIcon />;

  // Cloud & DevOps
  if (lowerTag.includes("gcp")) return <CloudIcon />;
  if (lowerTag.includes("cloud")) return <CloudIcon />;
  if (lowerTag.includes("firebase")) return <CloudIcon />;
  if (lowerTag.includes("docker")) return <CloudIcon />;
  if (lowerTag.includes("kubernetes")) return <CloudIcon />;
  if (lowerTag.includes("airflow")) return <AutoGraphIcon />;
  if (lowerTag.includes("n8n")) return <AutoGraphIcon />;
  if (lowerTag.includes("dbt")) return <DataObjectIcon />;
  if (lowerTag.includes("bigquery")) return <StorageIcon />;
  if (lowerTag.includes("mongo")) return <StorageIcon />;

  // AI & ML
  if (lowerTag.includes("llm")) return <PsychologyIcon />;
  if (lowerTag.includes("rag")) return <PsychologyIcon />;
  if (lowerTag.includes("nlp")) return <LanguageIcon />;
  if (lowerTag.includes("cv") || lowerTag.includes("vision"))
    return <ImageIcon />;
  if (lowerTag.includes("image")) return <ImageIcon />;
  if (lowerTag.includes("video")) return <MovieIcon />;
  if (
    lowerTag.includes("audio") ||
    lowerTag.includes("speech") ||
    lowerTag.includes("whisper")
  )
    return <MicIcon />;
  if (lowerTag.includes("gan")) return <PsychologyIcon />;
  if (lowerTag.includes("agent")) return <SmartToyIcon />;
  if (lowerTag.includes("robot")) return <SmartToyIcon />;
  if (lowerTag.includes("finetuning")) return <BuildIcon />;
  if (lowerTag.includes("mlops")) return <SpeedIcon />;

  // General
  if (lowerTag.includes("automation")) return <AutoGraphIcon />;
  if (lowerTag.includes("security") || lowerTag.includes("injection"))
    return <SecurityIcon />;
  if (lowerTag.includes("data")) return <DataObjectIcon />;
  if (lowerTag.includes("embedded")) return <MemoryIcon />;
  if (lowerTag.includes("algorithm")) return <CodeIcon />;
  if (lowerTag.includes("teaching") || lowerTag.includes("grading"))
    return <SchoolIcon />;
  if (lowerTag.includes("testing")) return <BuildIcon />;

  return null;
};

export const IconMapper: React.FC<IconMapperProps> = ({ tag, className }) => {
  const icon = getIconForTag(tag);

  if (!icon) return null;

  return <span className={className}>{icon}</span>;
};
