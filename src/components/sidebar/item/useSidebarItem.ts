import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


const useSidebarItem = (link:string, label:string) => {
    const [noti, setNoti] = useState(0);
    const dispatch = useAppDispatch();
    const messages = useAppSelector((store) => store.notification.notifications);
    const pathname = usePathname();
    const isActive = pathname === link;

    useEffect(() => {
        if (label === "Notification") {
            const unReadCount = messages.filter((msg) => msg.isRead === false);
            setNoti(unReadCount.length);
        }
    }, [dispatch]);

    return { noti, setNoti, dispatch, messages, pathname, isActive }
}

export default useSidebarItem;