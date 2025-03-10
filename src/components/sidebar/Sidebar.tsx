"use client";
import { useState, useEffect } from "react";
import SidebarSection from "./SidebarSection";
import { generalItems, menuItems } from "@/constants/menu";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import IconButton from "../pageTitlebar/IconButton";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const handleResize = () => {
      const mobileView = window.innerWidth < 640;
      setIsMobile(mobileView);
      setIsOpen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <hr className={`w-[80%] bg-md_gray ${isOpen && "ml-2"} my-4 sm:mx-auto`} />
      <SidebarSection title="GENERAL" toShow={isOpen} items={generalItems} />
    </aside>
  );
};

export default Sidebar;
