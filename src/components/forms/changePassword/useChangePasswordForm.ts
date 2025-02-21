import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "@/hooks/useAuth";

export const useChangePasswordForm = () => {
  useAuth(true);

  const [formData, setFormData] = useState({
    currentPassword: "",
    changePassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const { currentPassword, changePassword, confirmPassword } = formData;

    if (!currentPassword || !changePassword || !confirmPassword) {
      console.log("Please fill all the fields");
      return toast.error("Please fill all the fields");
    }

    if (changePassword !== confirmPassword) {
      return toast.error("Passwords do not match");
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

  return { formData, handleChange, handleRegister, error, loading };
};
