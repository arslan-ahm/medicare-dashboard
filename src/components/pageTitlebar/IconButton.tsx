"use client";
import React from "react";
import { IconButtonProps } from "@/types/iconButton";


const IconButton: React.FC<IconButtonProps> = ({ icon, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="px-2 py-2 border border-sm_gray text-xl hover:bg-light_gray/10 rounded-md cursor-pointer"
    >
      {icon}
    </button>
  );
};

export default IconButton;
