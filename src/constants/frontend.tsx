import { MdOutlineMarkEmailRead, MdWorkHistory } from "react-icons/md";
import { IMAGES } from "./imgs";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaChrome } from "react-icons/fa6";
import { TbLocationCheck, TbLockAccess } from "react-icons/tb";

export const SERVICES_CARDS = [
  {
    title: "Online Appointment",
    description:
      "Book an appointment with your doctor online and get a reminder before the appointment.",
    image: IMAGES.AuthScreenDashboardPreview,
  },
  {
    title: "Patient Management",
    description:
      "Manage your patient's data, appointments, prescriptions and more in one place.",
    image: IMAGES.HeroSectionBanner,
  },
  {
    title: "Medication Reminder",
    description:
      "Get a reminder for your medication and never miss a dose of your medicine.",
    image: IMAGES.blob,
  },
];

export const SPECIALITY_TABS = [
  {
    icon: <MdWorkHistory />,
    title: "Reduce Administrative",
    text: "Reduce burden, save time.",
    color: "bg-light_varient_blue",
  },
  {
    icon: <MdAdminPanelSettings />,
    title: "Easy Management",
    text: "Easy and Attractive",
    color: "bg-light_varient_yellow",
  },
  {
    icon: <TbLockAccess />,
    title: "Access Control",
    text: "Authorized & Secure",
    color: "bg-light_varient_green",
  },
];

export const SUPPORT_LIST = [
  {
    title: "Healthcare Facilities",
    text: "You can manage your healthcare facilities with ease and efficiency.",
  },
  {
    title: "Patient Data",
    text: "You can manage your patient data with ease and efficiency.",
  },
  {
    title: "Appointment Scheduling",
    text: "You can manage your appointment scheduling with ease and efficiency.",
  },
];

export const CONTACT_US_CARDS = [
  {
    title: "Email",
    description: "You can proceed via email",
    icon: <MdOutlineMarkEmailRead />,
    content: "admin@gmail.com",
    color: "bg-light_varient_red",
  },
  {
    title: "Website",
    description: "Visit our website for more information",
    icon: <FaChrome />,
    content: "https://www.example.com",
    color: "bg-light_varient_blue",
  },
  {
    title: "Address",
    description: "You can visit us at our office",
    icon: <TbLocationCheck />,
    content: "1234 Street Name, City, Country",
    color: "bg-light_varient_green",
  },
];
