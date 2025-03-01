import React from "react";
import { QuickIconProps } from "@/types/componentsTypes/quickIcon";

const QuickIcon: React.FC<QuickIconProps> = ({
  icon,
  handleClick,
  cursor = "pointer",
}) => {
  return (
    <span onClick={handleClick} className={`text-2xl cursor-${cursor}`}>
      {icon}
    </span>
  );
};

export default QuickIcon;
