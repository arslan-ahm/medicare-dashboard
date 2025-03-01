import { useAppDispatch } from "@/hooks/useRedux";
import { addTask } from "@/store/slices/task.slice";
import { TaskStatus } from "@prisma/client";
import { useState } from "react";
import { toast } from "react-hot-toast";

const initialState = {
  title: "",
  description: "",
  date: "",
  status: "" as TaskStatus,
};

export const useAddTaskForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState(initialState);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const { title, description, date, status } = formData;

    if (!title || !description || !date || !status) {
      console.log("Please fill all the fields");
      return toast.error("Please fill all the fields");
    }
    try {
      await dispatch(addTask(formData)).unwrap();
      toast.success("Account created successfully");

      setFormData(initialState);
    } catch (error) {
      console.error(error);
      return toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { formData, handleChange, handleSubmit, error, loading };
};
