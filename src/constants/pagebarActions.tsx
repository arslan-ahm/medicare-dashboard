import { IoHelpCircleOutline } from "react-icons/io5";
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