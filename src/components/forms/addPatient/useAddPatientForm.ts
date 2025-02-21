import { useState } from "react";
import { toast } from "react-hot-toast";

export const useAddPatientForm = () => {
  const [formData, setFormData] = useState({
    forename: "",
    surname: "",
    dateOfBirth: "",
    gender: "",
    diagnosis: "",
    notes: "",
    status: "",
    upcomingAppointmentId: "",
  });
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
    console.log(name, " => ", value);
    setError(null);
  };
  const handleAddPatient = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Starting handleAddPatient...", formData);
    setLoading(true);
    const { forename, diagnosis, gender, upcomingAppointmentId, surname } =
      formData;

    console.log("formData before validation:", formData);
    if (
      !forename ||
      !diagnosis ||
      !gender ||
      !surname ||
      !upcomingAppointmentId
    ) {
      console.log("Validation failed: Please fill all the fields");
      setLoading(false);
      return toast.error("Please fill all the fields");
    }

    console.log("Validation passed: All fields are filled");

    try {
      console.log("Adding...");
      //   const res = await fetch("/api/patient/", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       email,
      //       password,
      //       name,
      //       specialization,
      //     }),
      //   });

      //   if (res.ok) {
      //     toast.success("Account created successfully");
      //     router.push("/login");
      //     return;
      //   }
      console.log("Patient added successfully...", formData);
    } catch (error) {
      console.error(error);
      return toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }

    
  };

  return { formData, handleChange, handleAddPatient, error, loading };
};
