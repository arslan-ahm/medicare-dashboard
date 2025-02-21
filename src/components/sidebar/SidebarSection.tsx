import SidebarItem from "./SidebarItem";
import { MenuItem } from "@/constants/menu";

type SidebarSectionProps = {
  title: string;
  items: MenuItem[];
  toShow?: boolean;
};

const SidebarSection = ({ title, items, toShow }: SidebarSectionProps) => {
  return (
    <div>
      <div className={`${toShow ? "inline-block" : "hidden"} lg:inline-block font-semibold text-gray-500 mb-4`}>{title}</div>
      <ul>
        {items.map((item) => (
          <SidebarItem key={item.label} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarSection;
