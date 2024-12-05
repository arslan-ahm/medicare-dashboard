import { BsPrinter } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";
import { IoAddOutline, IoHelpCircleOutline, IoSearchOutline } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";

export const NOTIFICATION_HEADER_BUTTONS = [
  {
    icon: <MdOutlineDeleteOutline className="text-xl text-red" />,
    action: true,
  },
  {
    icon: <IoHelpCircleOutline className="text-xl" />,
  },
];

export const PATIENT_BAR_ACTIONS = [
  {
    icon: <IoAddOutline />,
    action: true,
    hide: false,
  },
  {
    icon: <CiFilter />,
    hide: false,
  },
  {
    icon: <BsPrinter />,
    hide: true,
  },
  {
    icon: <IoHelpCircleOutline />,
    hide: true,
  },
];

export const SETTINGS_HEADER = [
  {
    icon: <IoHelpCircleOutline className="text-xl" />,
  },
];

export const PATIENT_PAGE_ACTIONS = [
  {
    icon: <IoAddOutline />,
    hide: false,
  },
  {
    icon: <IoSearchOutline />,
    hide: true,
  },
  {
    icon: <CiFilter />,
    hide: true,
  },
];