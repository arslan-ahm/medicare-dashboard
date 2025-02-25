import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "@/hooks/useAuth";

export const useAddTaskForm = () => {
  useAuth(true);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dateAndTime: "",
    status: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
    const { title, description, dateAndTime, status } = formData;

    if (!title || !description || !dateAndTime || !status) {
      console.log("Please fill all the fields");
      return toast.error("Please fill all the fields");
    }
    try {
      console.log("Updated... OK", formData);
      toast.success("Account created successfully");

      setFormData({
        title: "",
        description: "",
        dateAndTime: "",
        status: "",
      });
    } catch (error) {
      console.error(error);
      return toast.error("Something went wrong");
    } finally {
      setLoading(false);
      
    }
  };

  return { formData, handleChange, handleSubmit, error, loading };
};
