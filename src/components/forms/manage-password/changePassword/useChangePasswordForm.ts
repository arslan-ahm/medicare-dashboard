import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAppDispatch } from "@/hooks/useRedux";
import { changePassword } from "@/store/slices/auth.slice";

const initialState = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export const useChangePasswordForm = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState(initialState);
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
    const { oldPassword, newPassword, confirmPassword } = formData;

    if (!oldPassword || !newPassword || !confirmPassword) {
      return toast.error("Important fields are missing... 🙄");
    }

    if (newPassword !== confirmPassword) {
      return toast.error("Password & Confirm Password are different... 🤔");
    }

    try {
      const res = await dispatch(changePassword({ oldPassword, newPassword }));
      if (changePassword.fulfilled.match(res)) {
        toast.success("Just Updated your Password... 🤗");
        setFormData(initialState);
      } else if (changePassword.rejected.match(res)) {
        toast.error("Password is not Updated... 🤐");
      }
    } catch (error) {
      console.error("[useChangePasswordForm.ts] => ", error);
      toast.error("Something went wrong... 😔");
    } finally {
      setLoading(false);
    }
  };

  return { formData, handleChange, handleRegister, error, loading };
};
