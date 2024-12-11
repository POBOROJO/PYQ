import React from "react";

interface HeroHighlightProps {
    children: React.ReactNode;
}

export default function HeroHighlight({ children }: HeroHighlightProps) {
    return <div className="relative">{children}</div>;
  }