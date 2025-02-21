"use client";
import { useState } from "react";
import SidebarSection from "./SidebarSection";
import { generalItems, menuItems } from "@/constants/menu";
import { IoIosArrowBack } from "react-icons/io";
import IconButton from "../pageTitlebar/IconButton";
import { IoIosArrowForward } from "react-icons/io";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <aside
      className={`${
        !isOpen ? "w-[53px]" : "w-[200px]"
      } lg:w-[250px] bg-gray-100 p-4 border-r border-gray-200`}
    >
      <div className="inline-block lg:hidden">
      <IconButton
        handleClick={() => setIsOpen(!isOpen)}
        icon={!isOpen ? <IoIosArrowBack /> : <IoIosArrowForward />}
        />
        </div>

      <SidebarSection title="MENU" toShow={isOpen}  items={menuItems} />
      <hr className="w-[80%] bg-md_gray my-4 mx-auto" />
      <SidebarSection title="GENERAL" toShow={isOpen} items={generalItems} />
    </aside>
  );
};

export default Sidebar;
