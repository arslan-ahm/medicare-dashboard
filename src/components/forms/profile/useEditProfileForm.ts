import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { updateProfile } from "@/store/slices/auth.slice";

export const useEditProfileForm = () => {
  const { doctor } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    name: doctor?.name,
    email: doctor?.email,
    organization: doctor?.organization,
    specialization: doctor?.specialization,
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    const { name, email, specialization, organization } = formData;

    if (!name || !email || !specialization || !organization) {
      console.log("Please fill all the fields");
      return toast.error("Important fields are missing... 😶");
    }

    if (!emailRegex.test(email)) {
      return toast.error("Email is not valid... 😯");
    }

    try {
      await dispatch(updateProfile(formData));
      console.log("Profile Updated Successfully");
      toast.success("Edit Profile Successfully... 😊");
    } catch (error) {
      console.error(error);
      return toast.error("Something went wrong... 😟");
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    error,
    loading,
  };
};
