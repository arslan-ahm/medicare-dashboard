import React from "react";
import Text from "../../Text";
import IconButton from "../../pageTitlebar/IconButton";
import { FiPlus } from "react-icons/fi";
import { ListHeaderProps } from "@/types/componentsTypes/listHeader";

const ListHeader: React.FC<ListHeaderProps> = ({
  title,
  icon,
  subtext,
  handleClick,
}) => {
  return (
    <div className="flex flex-col min-[400px]:flex-row justify-between items-between min-[400px]:items-center border-b border-gray-200 pb-2 mb-4">
      <Text text={title} type="h6" className="font-semibold" />
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
    </div>
  );
};

export default ListHeader;
