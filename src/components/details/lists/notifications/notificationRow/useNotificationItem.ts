import { useAppDispatch } from "@/hooks/useRedux";
import { deleteNotification } from "@/store/slices/notification.slice";
import { Notification } from "@/types/slices/notification";
import { useState } from "react";
import toast from "react-hot-toast";

const useNotificationItem = (notification: Notification) => {
    const isUnread = !notification.isRead;
    const dispatch = useAppDispatch();
    const [isloading, setIsLoading] = useState(false);

    const handleDelete = async () => {
        try {
            setIsLoading(true);
            await dispatch(deleteNotification(notification.id)).unwrap();
            toast.success("Notification Removed, Successfully... 🙂");
        } catch (error) {
            console.error(error);
            toast.error("Cannot delete notification, Please try again... 😟");
        } finally {
            setIsLoading(true);
        }
    };

    return { isUnread, isloading, handleDelete };
}

export default useNotificationItem;