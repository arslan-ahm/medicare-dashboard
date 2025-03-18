"use client";
import React from "react";
import Text from "../Text";
import { PageTitleBarProps } from "@/types/componentsTypes/pageComponentType";

const PageTitleBar: React.FC<PageTitleBarProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-start gap-1 sm:gap-2">
        <Text text={title} type="h4" />
        {subtitle && (
          <Text
            text={subtitle}
            type="p"
            className="text-md sm:text-xl text-md_gray"
          />
        )}
      </div>
      {children}
    </div>
  );
};

export default PageTitleBar;
