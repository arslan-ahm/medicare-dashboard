"use client";

import React from "react";

type ButtonProps = {
  variant?: "outline" | "filled";
  text: string;
  onClick?: () => void;
  className?: string;
};

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
        border-2 border-primary py-2 px-3 text-md lg:text-lg rounded-md flex justify-center items-center
        transition-all duration-300 w-full
        ${
          variant &&
          (variant === "filled"
            ? "bg-primary text-white hover:bg-white hover:text-primary"
            : "text-primary hover:bg-primary hover:text-white")
        }
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default TextButton;
