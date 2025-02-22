import React from "react";

type QuickIconProps = {
  icon: React.ReactNode;
  handleClick: () => void;
  cursor?: "pointer" | "not-allowed";
};

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
