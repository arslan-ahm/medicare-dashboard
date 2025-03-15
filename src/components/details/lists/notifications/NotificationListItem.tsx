"use client";

import React from "react";
import IconButton from "@/components/titlebarActions/IconButton";
import Text from "@/components/Text";
import { LuDelete } from "react-icons/lu";
import { Notification } from "@/types/slices/notification";
import { formatDate } from "@/lib/timeHandler";
import { deleteNotification } from "@/store/slices/notification.slice";
import { useAppDispatch } from "@/hooks/useRedux";
import toast from "react-hot-toast";

type NotificationListItemProps = {
  notification: Notification;
};

const NotificationListItem: React.FC<NotificationListItemProps> = ({
  notification,
}) => {
  const isUnread = !notification.isRead;
  const dispatch = useAppDispatch();

  const handleDelete = async () => {
      try {
        console.log("Deleting notification with id: ", notification.id);
        await dispatch(deleteNotification(notification.id)).unwrap();
        toast.success("Notification deleted successfully");
      } catch (error) {
        console.error(error);
        toast.error("Failed to delete notification");
      }
    };
    
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between md:items-center rounded-lg shadow-sm px-4 py-2">
      <div
        className={`px-4 py-1 w-full md:w-[70%] ${
          isUnread && "border-l-4 border-rose-500/70"
        }`}
      >
        <Text
          type="h4"
          className={`font-semibold ${
            isUnread ? "text-rose-500" : "text-slate-700"
          }`}
          text={notification.title}
        />
        <Text
          type="h6"
          className={`text-sm md:text-md xl:text-lg sm:text-justify font-medium text-slate-500`}
          text={notification.text}
        />
      </div>
      <div className="flex self-end md:self-auto gap-5 items-center">
        <span className="text-sm md:text-md xl:text-lg text-gray-400">
          {formatDate(notification.time)}
        </span>
        <IconButton
          icon={<LuDelete className="text-red" />}
          handleClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default NotificationListItem;
