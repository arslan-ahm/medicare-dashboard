"use client";
import React from "react";
import { PageTitleBarProps } from "@/types/componentsTypes/pageComponentType";

const PageTitleBar: React.FC<PageTitleBarProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-start gap-1 sm:gap-2">
        <h4 className="text-md sm:text-lg md:text-xl font-[500]">{title}</h4>
        {subtitle && (
          <p className="text-sm text-md sm:text-lg text-md_gray">{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  );
};

export default PageTitleBar;
