import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useAppDispatch } from "@/hooks/useRedux";
import {
  addAppointment,
  updateAppointment,
} from "@/store/slices/appointment.slice";
import { AppointmentFormData } from "@/types/componentsTypes/form";
import { Appointment } from "@/types/slices/appointment";

const initialFormData: AppointmentFormData = {
  patientName: "",
  purpose: "",
  start_time: new Date().toISOString(),
  end_time: null,
  status: "CONFIRMED",
  type: "FIRST_TIME",
  isOnline: false,
};

export const useAddAppointmentForm = (
  existingAppt?: Appointment,
  onSuccess?: () => void
) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      setFormData((prevData) => ({
        ...prevData,
        start_time: new Date().toISOString(),
      }));
    }, 3 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

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
  const [isChecked, setIsChecked] = useState(formData.isOnline);

  const handleCheck = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    setFormData((prevData) => ({
      ...prevData,
      isOnline: newCheckedState,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, type, value } = e.target;

    const newValue =
      type === "checkbox" && e.target instanceof HTMLInputElement
      ? e.target.checked
      : type === "datetime-local" && name === "start_time" && value === ""
      ? new Date().toISOString()
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
      return toast.error("Important fields are missing... 🙄");
    }

    try {
      if (existingAppt) {
        await dispatch(
          updateAppointment({ ...existingAppt, ...formData })
        ).unwrap();
        toast.success("Your appointment updated, Successfully... 😉");
      } else {
        await dispatch(addAppointment(formData)).unwrap();
        toast.success("Appointment Added, Successfully... 😋");
      }

      setFormData(initialFormData);
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error(error);
      return toast.error("Something went wrong... 😔");
    } finally {
      setFormData(initialFormData);
      setLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    handleCheck,
    isChecked,
    error,
    loading,
  };
};
