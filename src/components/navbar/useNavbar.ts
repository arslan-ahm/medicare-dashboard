import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { fetchAppointments } from "@/store/slices/appointment.slice";
import { fetchDoctor, logout } from "@/store/slices/auth.slice";
import { fetchNotifications } from "@/store/slices/notification.slice";
import { fetchPatients } from "@/store/slices/patient.slice";
import { fetchTasks } from "@/store/slices/task.slice";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const useNavbar = () => {
    const dispatch = useAppDispatch();
    const [isNotificationShow, setIsNotificationShow] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const buttonRef = useRef<HTMLSpanElement | null>(null);
    const doctor = useAppSelector((store) => store.auth.doctor);
    const messages = useAppSelector((store) => store.notification.notifications);
    const router = useRouter();

    const hasUnreadMessages = messages.some((msg) => !msg.isRead);

    useEffect(() => {
        if (isNotificationShow && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const dropdownHeight = 80;

            let top = rect.bottom + 5;
            const left = rect.left - 150;

            if (rect.bottom + dropdownHeight > viewportHeight) {
                top = rect.top - dropdownHeight - 5;
            }

            setPosition({ top, left });
        }
    }, [isNotificationShow]);

    useEffect(() => {
        if (!doctor) {
            dispatch(fetchDoctor());
        }
        console.log("=>", process.env.NEXTAUTH_URL);
    }, [dispatch, doctor]);

    useEffect(() => {
        dispatch(fetchPatients());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchAppointments());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchNotifications());
    }, [dispatch]);

    const handleLogout = async () => {
        try {
            await signOut({ redirect: false });
            toast.success("Logged out... Successfully! 😊");
            dispatch(logout());
            router.push("/login");
        } catch (error) {
            console.error("Failed to sign out", error);
            toast.error("Failed to sign out... 😟");
        }
    };

    return { isNotificationShow, setIsNotificationShow, position, buttonRef, doctor, hasUnreadMessages, handleLogout, messages };
}

export default useNavbar;