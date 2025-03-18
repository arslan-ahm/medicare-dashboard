"use client";
import useNotification from "../details/lists/notifications/useNotification";
import IconButton from "./IconButton";
import { NOTIFICATION_HEADER_BUTTONS } from "@/constants/pagebarActions";

const NotificationActions = () => {
  const { removeAllNotifications } = useNotification();
  return (
    <ul className="flex space-x-2">
      {NOTIFICATION_HEADER_BUTTONS.map(({ icon, action }, ind) => (
        <li key={ind}>
          <IconButton icon={icon} handleClick={action ? () => removeAllNotifications() : () => {}} />
        </li>
      ))}
    </ul>
  );
};

export default NotificationActions;
