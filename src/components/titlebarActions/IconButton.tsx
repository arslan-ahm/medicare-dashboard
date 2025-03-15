"use client";
import React from "react";
import { IconButtonProps } from "@/types/iconButton";


const IconButton: React.FC<IconButtonProps> = ({ icon, handleClick, size="md" }) => {
  return (
    <button
      onClick={handleClick}
      className={`${
      size === "sm"
        ? "px-1 py-1 text-sm"
        : size === "lg"
        ? "px-3 py-3 text-2xl"
        : "px-2 py-2 text-xl"
      } border border-sm_gray hover:bg-light_gray/10 rounded-md cursor-pointer`}
    >
      {icon}
    </button>
  );
};

export default IconButton;
