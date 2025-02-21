import React from "react";
import { BsPeople } from "react-icons/bs";
import { FiCalendar } from "react-icons/fi";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { LuClipboardCheck, LuLayoutDashboard } from "react-icons/lu";

export type MenuItem = {
  label: string;
  icon: React.ReactNode;
  link: string;
};

export const menuItems: MenuItem[] = [
  { label: "Dashboard", icon: <LuLayoutDashboard />, link: "/dashboard" },
  { label: "Schedule", icon: <FiCalendar />, link: "/dashboard/schedule" },
  { label: "Tasks", icon: <LuClipboardCheck />, link: "/dashboard/tasks" },
  { label: "Patients", icon: <BsPeople />, link: "/dashboard/patients" },
  {
    label: "Notification",
    icon: <IoNotificationsOutline />,
    link: "/dashboard/messages",
  },
];

export const generalItems: MenuItem[] = [
  {
    label: "Settings",
    icon: <IoSettingsOutline />,
    link: "/dashboard/settings",
  },
];

export const SETTINGS_TABS = [
  { id: "profile", label: "Update Profile" },
  { id: "password", label: "Change Password" },
];
