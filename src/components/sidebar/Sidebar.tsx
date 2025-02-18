import Link from "next/link";
import { CiGrid32 } from "react-icons/ci";
import { FiCalendar } from "react-icons/fi";
import { LuClipboardCheck } from "react-icons/lu";
import { BsPeople } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { BsBarChart } from "react-icons/bs";
import { FiHelpCircle } from "react-icons/fi";

const Sidebar = () => {
  const menuItems = [
    { label: "Dashboard", icon: <CiGrid32 />, link: "/dashboard" },
    { label: "Schedule", icon: <FiCalendar />, link: "/dashboard/schedule" },
    { label: "Tasks", icon: <LuClipboardCheck />, link: "/dashboard/tasks" },
    { label: "Messages", icon: <BsPeople />, link: "/dashboard/messages" },
    { label: "Analytics", icon: <GoMail />, link: "/dashboard/analytics" },
    { label: "Settings", icon: <BsBarChart />, link: "/dashboard/settings" },
    { label: "Support", icon: <FiHelpCircle />, link: "/dashboard/support" },
  ];

  return (
    <aside className="w-64 bg-gray-100 p-4 border-r border-gray-200">
      <div className="font-[100] text-gray-500 mb-4">MENU</div>
      <ul>
        {menuItems.map((item) => (
          <li key={item.label} className="mb-2">
            <Link
              href={item.link}
              className="flex gap-2 p-2 rounded hover:bg-gray-200 text-gray-700"
            >
              {item.icon && (
                <span className="text-xl font-bold">{item.icon}</span>
              )}
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
