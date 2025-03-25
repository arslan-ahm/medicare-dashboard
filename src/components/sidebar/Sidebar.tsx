"use client";
import SidebarSection from "./SidebarSection";
import { generalItems, menuItems } from "@/constants/menu";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import IconButton from "../titlebarActions/IconButton";
import useSidebar from "@/hooks/useSidebar";

const Sidebar = () => {
  const { hasMounted, isMobile, isOpen, setIsOpen } = useSidebar();

  if (!hasMounted) return null;

  return (
    <aside
      className={`
        ${isOpen ? "w-[200px] lg:w-[250px]" : "w-[53px] sm:w-[60px]"} 
        ${isMobile && "sm:shadow-lg z-50"}
        bg-gray-100 p-4 border-r border-gray-200 transition-all duration-300 sticky min-h-[400px] left-0 top-[77px]
      `}
    >
      <div className="hidden sm:inline-block bg-white absolute top-4 right-[-5px] md:right-[0px] lg:hidden">
        <IconButton
          handleClick={() => setIsOpen(!isOpen)}
          icon={isOpen ? <IoIosArrowBack /> : <IoIosArrowForward />}
        />
      </div>

      <SidebarSection title="MENU" toShow={isOpen} items={menuItems} />
      <hr
        className={`w-[80%] bg-md_gray ${isOpen && "ml-2"} my-4 sm:mx-auto`}
      />
      <SidebarSection title="GENERAL" toShow={isOpen} items={generalItems} />
    </aside>
  );
};

export default Sidebar;
