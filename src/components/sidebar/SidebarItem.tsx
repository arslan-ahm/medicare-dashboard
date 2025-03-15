"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarItemProps } from "@/types/componentsTypes/menuTypes";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";

const SidebarItem = ({ label, icon, link, handleText }: SidebarItemProps) => {
  const [noti, setNoti] = useState(0);
  const dispatch = useAppDispatch();
  const messages = useAppSelector((store) => store.notification.notifications);
  const pathname = usePathname();
  const isActive = pathname === link;

  useEffect(() => {
    if (label === "Notification") {
      const unReadCount = messages.filter((msg) => msg.isRead === false);
      setNoti(unReadCount.length);
    }
  }, [dispatch]);

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
