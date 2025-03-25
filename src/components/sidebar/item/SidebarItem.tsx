"use client";
import Link from "next/link";
import { SidebarItemProps } from "@/types/componentsTypes/menuTypes";
import useSidebarItem from "./useSidebarItem";

const SidebarItem = ({ label, icon, link, handleText }: SidebarItemProps) => {
  const { isActive, noti } = useSidebarItem(link, label);

  return (
    <li className="mb-2 flex justify-between items-center">
      <Link
        href={link}
        className={` flex items-center gap-2 p-2 rounded transition-all ${
          isActive
            ? "text-primary font-semibold after:content-[''] after:w-1 after:h-[60%] after:bg-primary relative after:absolute after:top-[9px] after:rounded-full after:left-0"
            : "text-gray-700"
        }`}
      >
        <span
          className={`text-xl ${
            isActive ? "text-primary font-semibold" : "text-gray-700"
          }`}
        >
          {icon}
        </span>
        <span className={`${!handleText ? "invisible" : "lg:inline-block"}`}>
          {label}
        </span>
      </Link>
      {noti > 0 && (
        <span className="bg-red rounded-full text-white px-[0.45rem] ">
          {noti}
        </span>
      )}
    </li>
  );
};

export default SidebarItem;
