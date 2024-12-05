import { useAppDispatch } from "@/hooks/useRedux";
import { deleteAppointment } from "@/store/slices/appointment.slice";
import { Appointment } from "@/types/slices/appointment";
import { useState } from "react";
import toast from "react-hot-toast";


const useAppointmentListItem = (appt: Appointment) => {
    const dispatch = useAppDispatch();
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const [modelOpen, setModelOpen] = useState(false);
    const isCurrent = true;

    const handleDelete = async () => {
        try {
            await dispatch(deleteAppointment(appt.id)).unwrap();
            toast.success("Appointment Removed, Successfully... 🙂");
        } catch (error) {
            console.error(error);
            toast.error("Cannot delete appointment, Please try again... 😟");
        }
    };

    const handleEdit = () => {
        setModelOpen(true);
    };

    return {
        isCurrent,
        isAccordionOpen,
        setIsAccordionOpen,
        modelOpen,
        setModelOpen,
        handleDelete,
        handleEdit,
    };
}

export default useAppointmentListItem;