"use client";

import { IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";
import IconButton from "./IconButton";
import { useAppDispatch } from "@/hooks/useRedux";
import toast from "react-hot-toast";
import { deleteAllNotifications } from "@/store/slices/notification.slice";

const NotificationActions = () => {
  const dispatch = useAppDispatch();

  const removeAllNotifications = async () => {
    try {
      await dispatch(deleteAllNotifications()).unwrap();
      toast.success("Notification deleted successfully... 😎");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete notification... 😟");
    }
  };

  const NotificationHeaderComponents = [
    {
      icon: <MdOutlineDeleteOutline className="text-xl text-red" />,
      handleClick: () => removeAllNotifications(),
    },
    {
      icon: <IoHelpCircleOutline className="text-xl" />,
      handleClick: () => {},
    },
  ];

  return (
    <ul className="flex space-x-2">
      {NotificationHeaderComponents.map(({ icon, handleClick }, ind) => (
        <li key={ind}>
          <IconButton icon={icon} handleClick={handleClick} />
        </li>
      ))}
    </ul>
  );
};

export default NotificationActions;
