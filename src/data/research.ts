import React from "react";
import ArticleIcon from "@mui/icons-material/Article";
import AEGIS from "/research/AEGIS.png";
import EVLM from "/research/EVLM.png";

export interface Research {
  title: string;
  authors?: string;
  venue?: string;
  description: string;
  period: string;
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

export const research: Research[] = [
  {
    title:
      "AEGIS : Automated Co-Evolutionary Framework for Guarding Prompt Injections Schema",
    authors: "Ting-Chun Liu, Ching-Yu Hsu, Kuan-Yi Lee, Chi-An Fu, Hung-yi Lee",
    venue: "Paper Under Review",
    description:
      "Devised a GAN-like framework to automatically generate prompts to defend against malicious prompt injection attacks. Tested the framework on real-world articles across various LLMs, achieving a 20% in True Positive Rate (TPR) with only 2% decrease in True Negative Rate (TNR).",
    period: "2023 Fall ~ Present",
    thumbnail: AEGIS,
    tags: ["Python", "LLM", "GAN", "Prompt Injection"],
    role: "AI Researcher",
    client: "Academic Research",
    duration: "2 years",
    details: [
      {
        title: "Challenge",
        content:
          "Prompt injection attacks pose significant security risks to Large Language Models (LLMs), as they can manipulate the model's behavior through maliciously crafted inputs. There is a need for effective defense mechanisms to safeguard LLMs against such attacks.",
      },
      {
        title: "Solution",
        content:
          "We proposed AEGIS, an automated co-evolutionary framework that employs a GAN-like approach to generate and defend against prompt injection attacks. AEGIS enables both attackers and defenders to evolve automatically through iterative prompt optimization. By iteratively tuning the prompts, the defense mechanism becomes more robust against various attack strategies.",
      },
      {
        title: "Impact",
        content:
          "The AEGIS framework was tested on 100+ real-world prompt injection attacks across various LLMs, demonstrating its effectiveness in enhancing model security. The results showed a 20% improvement in True Positive Rate (TPR) for detecting prompt injections, with only a 2% decrease in True Negative Rate (TNR), indicating that the defense mechanism effectively balances security and performance. The paper is published and currently under review.",
      },
      {
        title: "Lessons Learned",
        content:
          "Through this research, I gained insights that Large Language Models (LLMs) must not only be intelligent but also robust to be widely used, therefore facing into the challenges of how to secure them against prompt injection attacks. Moreover, I broadened my horizons on the possibility of defending against various attacks by automating the prompt generation process.",
      },
    ],
    links: [
      {
        label: "arXiv paper",
        url: "https://arxiv.org/abs/2509.00088",
        icon: ArticleIcon,
      },
    ],
  },
  {
    title: "Efficient Visual Language Model (VLM)",
    description:
      "Researching efficient Visual Language Models (VLMs) for Visual Question Answering (VQA) on images and videos. Focusing on integrating motion vectors and token pruning methods to enhance model efficiency and balance model performance.",
    period: "2024 Fall ~ Present",
    thumbnail: EVLM,
    tags: ["Python", "Pytorch", "Hugging Face", "LLaVA", "Video LLM"],
    role: "AI Researcher",
    client: "Academic Research",
    duration: "1 year",
    details: [
      {
        title: "Challenge",
        content:
          "The high computational cost of traditional Visual Language Models (VLMs) makes them unsuitable for real-time applications on devices with limited resources. There is a need to balance model performance with efficiency.",
      },
      {
        title: "Solution",
        content:
          "I first researched online to find the possible solutions, then implemented the one that integrates motion vectors into the model. This approach allows the model to reduce the sampling rate of the video while preserving great understanding of dynamic scenes in videos, which can greatly enhance its efficiency while maintaining performance.",
      },
      {
        title: "Impact",
        content:
          "The implemented methods showed a significant reduction in computational overhead (about 90% reduction) while maintaining competitive performance on several VQA benchmarks. ",
      },
      {
        title: "Lessons Learned",
        content:
          "From this project, I learned how to perform research systematically. I started from understanding the problem, surveying existing literature, implementing and experimenting with different approaches, and finally analyzing the results. This experience has enhanced my research skills and deepened my understanding of Visual Language Models.",
      },
    ],
    links: [],
  },
];
