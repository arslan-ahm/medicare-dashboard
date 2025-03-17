import React from "react";
import Text from "../../Text";
import { ListHeaderProps } from "@/types/componentsTypes/listHeader";
import ListSideHeader from "./ListSideHeader";

const ListHeader: React.FC<ListHeaderProps> = ({
  title,
  icon,
  subtext,
  handleClick,
}) => {
  return (
    <div className="flex flex-col min-[400px]:flex-row justify-between items-between min-[400px]:items-center border-b border-gray-200 pb-2 mb-4">
      <Text text={title} type="h6" className="font-semibold" />
      <ListSideHeader subtext={subtext} icon={icon} handleClick={handleClick} />
    </div>
  );
};

export default ListHeader;
