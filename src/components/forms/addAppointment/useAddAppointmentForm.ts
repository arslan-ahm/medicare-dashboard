import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "@/hooks/useAuth";

export const useAddAppointmentForm = () => {
  useAuth(true);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    specialization: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const { name, email, specialization } = formData;

    if (!name || !email || !specialization) {
      console.log("Please fill all the fields");
      return toast.error("Please fill all the fields");
    }

    if (!emailRegex.test(email)) {
      return toast.error("Invalid email address");
    }

    try {
      console.log("Updated... OK", formData);

      toast.success("Account created successfully");
    } catch (error) {
      console.error(error);
      return toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { formData, handleChange, handleSubmit, error, loading };
};
