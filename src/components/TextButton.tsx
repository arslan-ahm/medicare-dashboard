"use client";
import React from "react";
import { ButtonProps } from "@/types/componentsTypes/textButtons";

const TextButton: React.FC<ButtonProps> = ({
  variant = "filled",
  text,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      onClick={(e) => {
        if (!onClick) return;
        e.preventDefault();
        onClick();
      }}
      type={type}
      className={`
        border-2 border-primary py-2 px-3 text-sm lg:text-md lg:text-lg rounded-md flex justify-center text-center items-center
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
