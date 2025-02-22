"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  label: string;
  icon: React.ReactNode;
  link: string;
  handleText?: boolean | null;
}

const SidebarItem = ({ label, icon, link, handleText }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <li className="mb-2">
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
    </li>
  );
};

export default SidebarItem;
