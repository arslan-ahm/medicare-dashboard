import { useAppSelector } from "@/hooks/useRedux";
import { useAddAppointmentForm } from "../useAppointmentForm";
import { useRef } from "react";

const useFormHeaderItem = () => {
  const doctor = useAppSelector((state) => state.auth.doctor);
  const {formData, handleChange} = useAddAppointmentForm();

  const dateTimeInputRef = useRef<HTMLInputElement>(null);

    const handleOpenPicker = () => {
        if (dateTimeInputRef.current) {
            dateTimeInputRef.current.showPicker(); 
        }
    };

  const formattedDate = formData?.start_time
    ? new Date(formData.start_time).toLocaleDateString("en-GB", {
        weekday: "short",
        day: "2-digit",
        month: "long",
      })
    : undefined;

  const timeWithPeriod = formData?.start_time
    ? new Date(formData.start_time).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
    : undefined;

  return { doctor, formattedDate, timeWithPeriod, handleOpenPicker, dateTimeInputRef, handleDateChange:handleChange };
};

export default useFormHeaderItem;
