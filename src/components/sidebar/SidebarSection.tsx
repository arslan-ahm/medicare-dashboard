import { SidebarSectionProps } from "@/types/componentsTypes/menuTypes";
import SidebarItem from "./item/SidebarItem";

const SidebarSection = ({ title, items, toShow }: SidebarSectionProps) => {
  return (
    <div>
      <div
        className={`${
          toShow ? "lg:inline-block" : "invisible"
        } lg:inline-block font-semibold text-gray-500 mb-4`}
      >
        {title}
      </div>
      <ul>
        {items.map((item) => (
          <SidebarItem handleText={toShow} key={item.label} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarSection;
