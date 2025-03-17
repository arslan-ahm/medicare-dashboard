import { useAppDispatch } from "@/hooks/useRedux";
import { addTask, editTask } from "@/store/slices/task.slice";
import { TaskFormEditProp } from "@/types/componentsTypes/taskListItem";
import { useState } from "react";
import { toast } from "react-hot-toast";

const initialState = {
  title: "",
  description: "",
  date: "",
  status: false,
};

export const useTaskForm = (existingTask?: TaskFormEditProp, onSuccess?: () => void) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState(existingTask
    ? {
      title: existingTask.title,
      description: existingTask.description,
      date: existingTask.date ? new Date(existingTask.date).toISOString().slice(0, 16) : "",
      status: existingTask.status,
    }
    : initialState);

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
    const { title, date } = formData;

    if (!title || !date) {
      console.log("Please fill all the fields", formData);
      return toast.error("Please fill all the fields");
    }
    try {
      if (existingTask) {
        await dispatch(editTask({ ...existingTask, ...formData })).unwrap();
        toast.success("Task updated successfully");
      } else {
        await dispatch(addTask(formData)).unwrap();
        toast.success("Task added successfully");
      }

      setFormData(initialState);

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error(error);
      return toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };


  return { formData, handleChange, handleSubmit, error, loading };
};
