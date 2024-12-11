import React from "react";

interface Word {
  text: string;
  className?: string;
}

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

interface WorkStep {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const heroWords: Word[] = [
  { text: "Academic", className: "text-blue-500" },
  { text: "Resources", className: "text-purple-500" },
  { text: "Organized", className: "text-cyan-500" },
];

const features: Feature[] = [
  {
    title: "Semester Access",
    description: "Browse notes by semester and year",
    icon: "🚀",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    title: "Smart Navigation",
    description: "AI-integrations - Coming Soon",
    icon: "🤖",
    gradient: "from-green-400 to-cyan-500",
  },
  {
    title: "Secure Platform",
    description: "Quantum-encrypted resource hub",
    icon: "🔐",
    gradient: "from-pink-500 to-red-500",
  },
];

const workSteps: WorkStep[] = [
  {
    number: 1,
    title: "Select Semester",
    description: "Intelligent semester selection",
    icon: "🌐",
  },
  {
    number: 2,
    title: "AI Subject Match",
    description: "Smart course material finder",
    icon: "🧠",
  },
  {
    number: 3,
    title: "Instant Access",
    description: "Quantum-speed downloads",
    icon: "⚡",
  },
];

export { heroWords, features, workSteps };