"use client";
import React from "react";
import NotificationListItem from "./item/NotificationListItem";
import { Notification } from "@/types/slices/notification";
import useNotification from "./useNotification";
import Loader from "@/components/loader/Loader";

const NotificationList = () => {
  const { notifications, loading } = useNotification();
  return (
    <ul className="space-y-2">
      {loading ? (
        <Loader size="md" />
      ) : notifications.length > 0 ? (
        notifications.map((notification: Notification) => (
          <li key={notification.id}>
            <NotificationListItem notification={notification} />
          </li>
        ))
      ) : (
        <p className="text-center text-slate-600 capitalize">
          No notifications
        </p>
      )}
    </ul>
  );
};

export default NotificationList;
