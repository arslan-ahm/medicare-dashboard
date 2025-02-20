"use client";

import React from "react";
import Text from "../Text";

type PageTitleBarProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

const PageTitleBar: React.FC<PageTitleBarProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-start">
        <Text text={title} type="h4" />
        {subtitle && (
          <Text
            text={subtitle}
            type="p"
            className="ml-4  text-xl text-md_gray"
          />
        )}
      </div>

      {children}
    </div>
  );
};

export default PageTitleBar;
