import { MenuItem } from "@/types/componentsTypes/menuTypes";
import React from "react";
import { BsPeople } from "react-icons/bs";
import { FiCalendar } from "react-icons/fi";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { LuClipboardCheck, LuLayoutDashboard } from "react-icons/lu";

export const menuItems: MenuItem[] = [
  { label: "Dashboard", icon: <LuLayoutDashboard />, link: "/dashboard" },
  { label: "Schedule", icon: <FiCalendar />, link: "/dashboard/schedule" },
  { label: "Tasks", icon: <LuClipboardCheck />, link: "/dashboard/tasks" },
  { label: "Patients", icon: <BsPeople />, link: "/dashboard/patients" },
  {
    label: "Notification",
    icon: <IoNotificationsOutline />,
    link: "/dashboard/notifications",
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

export const TODAYS_DATE = new Date().toLocaleDateString("en-US", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export const FRONTEND_NAVLIST = [
  { text: "Home", link: "#home" },
  { text: "About", link: "#about" },
  { text: "Contact", link: "#contact" },
  { text: "Our Work", link: "#our_work" },
];
