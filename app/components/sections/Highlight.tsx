import React from "react";


interface HighlightProps {
  children: React.ReactNode;
  className?: string;
}

export default function Highlight({ children, className = "" }: HighlightProps) {
    return (
      <span
        className={`bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500 ${className}`}
      >
        {children}
      </span>
    );
  }