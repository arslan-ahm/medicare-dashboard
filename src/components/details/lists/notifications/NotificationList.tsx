"use client";
import React, { useEffect } from "react";
import NotificationListItem from "./NotificationListItem";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { Notification } from "@/types/slices/notification";
import { markAllNotificationsAsRead } from "@/store/slices/notification.slice";

const NotificationList = () => {
  const { notifications } = useAppSelector((store) => store.notification);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timeout = setTimeout(async () => {
      try {
        await dispatch(markAllNotificationsAsRead()).unwrap();
      } catch (error) {
        console.error(error);
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [dispatch]);

  return (
    <ul>
      {notifications.length > 0 ? (
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
