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

export const usePatientForm = (existingPatient?: Patient, onSuccess?: () => void) => {
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

  const handleUploadImage = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      })

      if (!res.ok) {
        toast.error("Not able to upload image... 😶");
        throw new Error("'handleUploadImage'... failed");
      }
      const data = await res.json();
      return data.url;
    } catch (error) {
      toast.error("Opps, Something went wrong");
      console.error(error);
    }
  }


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
      return toast.error("Important fields are missing... 🙄");
    }


    try {
      let uploadedImageUrl = formData.image;

      if (formData.image && formData.image.startsWith("blob")) {
        const file = await fetch(formData.image).then((res) => res.blob());
        uploadedImageUrl = await handleUploadImage(file as File);
      }

      const updatedPatientData = {
        ...formData,
        image: uploadedImageUrl,
        upcomingAppointment: formData.upcomingAppointment
          ? new Date(formData.upcomingAppointment).toISOString()
          : null,
      };

      if (existingPatient) {
        await dispatch(updatePatient({ ...existingPatient, ...updatedPatientData })).unwrap();
        toast.success("Patient updated, Successfully... 😉");
      } else {
        await dispatch(addPatient(updatedPatientData)).unwrap();
        toast.success("Patient Added, Successfully... 😋");
      }

      setFormData(initailState);
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error(error);
      return toast.error("Something went wrong... 😔");
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
