import { useAppDispatch } from "@/hooks/useRedux";
import { formatDate } from "@/lib/timeHandler";
import { deleteTask, toggleTaskStatus } from "@/store/slices/task.slice";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";


const useTaskItem = ({
    id,
    status,
    date,
}: { id: string, status: boolean, date: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDeleteLoading, setIsDeleteLoading] = useState(false);
    const [isChecked, setIsChecked] = useState(status);
    const [updateTaskState, setUpdateTaskState] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const buttonRef = useRef<HTMLDivElement | null>(null);
    const [formattedDate, setFormattedDate] = useState(formatDate(date));
    const dispatch = useAppDispatch();

    const toggleStatus = async () => {
        const newStatus = !isChecked;
        setIsChecked(newStatus);
        await dispatch(toggleTaskStatus({ id, status: newStatus }));
    };

    useEffect(() => {
        if (isOpen && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const dropdownHeight = 80;

            let top = rect.bottom + 5;
            const left = rect.left - 100;

            if (rect.bottom + dropdownHeight > viewportHeight) {
                top = rect.top - dropdownHeight - 5;
            }

            setPosition({ top, left });
        }
    }, [isOpen]);

    useEffect(() => {
        const interval = setInterval(() => {
            setFormattedDate(formatDate(date));
        }, 60000);

        return () => clearInterval(interval);
    }, [date]);

    const handleDelete = async () => {
        try {
            setIsDeleteLoading(true);
            setIsOpen(false);
            await dispatch(deleteTask(id)).unwrap();
            toast.success("Task Removed, Successfully... 🙂");
        } catch (error) {
            console.error(error);
            toast.error("Cannot delete task, Please try again... 😟");
        } finally {
            setIsDeleteLoading(false);
        }
    };

    const handleEdit = () => {
        setUpdateTaskState(true);
        setIsOpen(false);
    };

    return {
        isChecked,
        isDeleteLoading,
        isOpen,
        setIsOpen,
        handleDelete,
        handleEdit,
        toggleStatus,
        updateTaskState,
        setUpdateTaskState,
        position,
        buttonRef,
        formattedDate,
    };
}

export default useTaskItem;