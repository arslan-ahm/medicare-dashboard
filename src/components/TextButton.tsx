"use client";

import React from "react";

interface ButtonProps {
  variant?: "outline" | "filled";
  text: string;
  onClick?: () => void;
  className?: string;
}

const TextButton: React.FC<ButtonProps> = ({
  variant = "filled",
  text,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        border-2 border-primary py-1 px-3 text-md rounded-md flex justify-center items-center
        transition-all duration-300
        ${
          variant === "filled"
            ? "bg-primary text-white hover:bg-white hover:text-primary"
            : "text-primary hover:bg-primary hover:text-white"
        }
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default TextButton;
