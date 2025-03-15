import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAppDispatch } from "@/hooks/useRedux";
import { addAppointment, updateAppointment } from "@/store/slices/appointment.slice";
import { AppointmentFormData } from "@/types/componentsTypes/form";
import { Appointment } from "@/types/slices/appointment";

const initialFormData: AppointmentFormData = {
  patientName: "",
  purpose: "",
  start_time: null,
  end_time: null,
  status: "CONFIRMED",
  type: "FIRST_TIME",
  isOnline: false,
};

export const useAddAppointmentForm = (existingAppt?: Appointment, onSuccess?: () => void) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<AppointmentFormData>(
    existingAppt
      ? {
        patientName: existingAppt.patientName,
        purpose: existingAppt.purpose,
        start_time: existingAppt.start_time
          ? new Date(existingAppt.start_time + ":00Z")
            .toISOString()
            .slice(0, 16)
          : null,
        end_time: existingAppt.end_time
          ? new Date(existingAppt.end_time + ":00Z")
            .toISOString()
            .slice(0, 16)
          : null,
        status: existingAppt.status,
        type: existingAppt.type || "FIRST_TIME",
        isOnline: existingAppt.isOnline,
      }
      : initialFormData
  );


  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, type, value } = e.target;

    const newValue = type === "checkbox" && e.target instanceof HTMLInputElement
      ? e.target.checked
      : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));

    setError(null);
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const { patientName, purpose, start_time, end_time } = formData;

    if (!patientName || !purpose || !start_time || !end_time) {
      console.log("Please fill all the fields");
      return toast.error("Please fill all the fields");
    }

    try {
      if (existingAppt) {
        await dispatch(updateAppointment({ ...existingAppt, ...formData })).unwrap();
        toast.success("Appointment updated successfully");
      } else {
        await dispatch(addAppointment(formData)).unwrap();
        toast.success("Appointment added successfully");
      }

      setFormData(initialFormData);
      if (onSuccess) { onSuccess(); }
    } catch (error) {
      console.error(error);
      return toast.error("Something went wrong");
    } finally {
      setFormData(initialFormData);
      setLoading(false);
    }
  };

  return { formData, handleChange, handleSubmit, handleCheck, isChecked, error, loading };
};
