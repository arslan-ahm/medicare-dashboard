"use client";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { deleteAllNotifications, markAllNotificationsAsRead } from "@/store/slices/notification.slice";

const useNotification = () => {
  const dispatch = useAppDispatch();
  const { notifications, loading } = useAppSelector((store) => store.notification);

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

  const removeAllNotifications = async () => {
    try {
      await dispatch(deleteAllNotifications()).unwrap();
      toast.success("Notification deleted successfully... 😎");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete notification... 😟");
    }
  };

  return { notifications, loading, removeAllNotifications };
}

export default useNotification;