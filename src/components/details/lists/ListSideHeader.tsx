import IconButton from "@/components/pageTitlebar/IconButton";
import Text from "@/components/Text";
import React from "react";
import { FiPlus } from "react-icons/fi";

type ListSideHeaderProps = {
  subtext?: string;
  icon?: React.ReactNode;
  handleClick: () => void;
};

const ListSideHeader: React.FC<ListSideHeaderProps> = ({
  subtext,
  icon,
  handleClick,
}) => {
  return (
    <>
      <div className="flex items-center gap-4">
        {subtext && (
          <Text
            text={subtext}
            type="span"
            className="inline-block sm:hidden xl:inline-block text-primary font-semibold"
          />
        )}
        <IconButton
          icon={icon || <FiPlus className="text-primary" />}
          size="sm"
          handleClick={handleClick}
        />
      </div>
    </>
  );
};

export default ListSideHeader;
