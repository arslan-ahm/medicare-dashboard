import { useAppDispatch } from "@/hooks/useRedux";
import { addPatient, updatePatient } from "@/store/slices/patient.slice";
import { Patient } from "@/types/slices/patient";
import { useState } from "react";
import { toast } from "react-hot-toast";

type PatientForm = {
  image?: string;
  forename: string;
  surname: string;
  dateOfBirth: string
  notes: string;
  diagnosis: string;
  gender: "MALE" | "FEMALE";
  status: "RECOVERED" | "AWAITING_SURGERY" | "ON_TREATMENT" | "OTHER";
  upcomingAppointment: string | null;
}

const initailState: PatientForm = {
  image: "",
  forename: "",
  surname: "",
  dateOfBirth: "",
  gender: "MALE",
  diagnosis: "",
  notes: "",
  status: "OTHER",
  upcomingAppointment: null,
}

export const usePatientForm = (existingPatient?: Patient) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<PatientForm>(existingPatient ? {
    forename: existingPatient.forename,
    surname: existingPatient.surname || "",
    dateOfBirth: existingPatient.dateOfBirth,
    gender: existingPatient.gender,
    notes: existingPatient.notes || "",
    image: existingPatient.image || "",
    diagnosis: existingPatient.diagnosis,
    status: existingPatient.status,
    upcomingAppointment: existingPatient.upcomingAppointment
      ? new Date(existingPatient.upcomingAppointment).toISOString().slice(0, 16)
      : null,
  } : initailState);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError(null);
  };
  const handleAddPatient = async () => {
    setLoading(true);
    const { forename, diagnosis, gender, upcomingAppointment, dateOfBirth, status } =
      formData;

    if (
      !forename ||
      !dateOfBirth ||
      !gender ||
      !diagnosis ||
      !status ||
      !upcomingAppointment
    ) {
      setLoading(false);
      return toast.error("Please fill all the fields");
    }


    try {
      if (existingPatient) {
        await dispatch(updatePatient({
          ...existingPatient,
          ...formData,
          upcomingAppointment: formData.upcomingAppointment
            ? new Date(formData.upcomingAppointment).toISOString()
            : null

        })).unwrap();
        toast.success("Patient updated successfully");
      } else {
        await dispatch(addPatient({
          ...formData,
          upcomingAppointment: formData.upcomingAppointment ? new Date(formData.upcomingAppointment) : null
        })).unwrap();
        toast.success("Patient added successfully");
      }

      setFormData(initailState);
    } catch (error) {
      console.error(error);
      return toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }


  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prevData) => ({
        ...prevData,
        image: URL.createObjectURL(file),
      }));
    }
  };

  return { formData, handleChange, handleAddPatient, handleImageChange, error, loading };
};
