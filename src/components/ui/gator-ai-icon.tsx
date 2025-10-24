import React from 'react';

interface GatorAIIconProps {
  className?: string;
  size?: number;
}

export function GatorAIIcon({ className = "w-6 h-6", size }: GatorAIIconProps) {
  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* AI Circuit Pattern */}
      <path
        d="M3 12L7 8L11 12L15 8L19 12L21 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      
      {/* Neural Network Nodes */}
      <circle cx="7" cy="8" r="1.5" fill="currentColor" opacity="0.8" />
      <circle cx="11" cy="12" r="1.5" fill="currentColor" opacity="0.8" />
      <circle cx="15" cy="8" r="1.5" fill="currentColor" opacity="0.8" />
      <circle cx="19" cy="12" r="1.5" fill="currentColor" opacity="0.8" />
      
      {/* Gator Head Shape */}
      <path
        d="M8 4C6 4 4 6 4 8C4 10 6 12 8 12C10 12 12 10 12 8C12 6 10 4 8 4Z"
        fill="currentColor"
        opacity="0.1"
        stroke="currentColor"
        strokeWidth="1"
      />
      
      {/* Gator Eye */}
      <circle cx="7" cy="6" r="1" fill="currentColor" opacity="0.9" />
      
      {/* AI Sparkles */}
      <path
        d="M16 4L17 2L18 4L20 5L18 6L17 8L16 6L14 5L16 4Z"
        fill="currentColor"
        opacity="0.5"
      />
      <path
        d="M4 16L5 14L6 16L8 17L6 18L5 20L4 18L2 17L4 16Z"
        fill="currentColor"
        opacity="0.5"
      />
      
      {/* Circuit Connections */}
      <path
        d="M2 8L4 6L6 8"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M18 8L20 6L22 8"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}
