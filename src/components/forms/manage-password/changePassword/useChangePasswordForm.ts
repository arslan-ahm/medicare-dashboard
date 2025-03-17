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
      console.log("Please fill all the fields");
      return toast.error("Please fill all the fields");
    }

    if (newPassword !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      const res = await dispatch(changePassword({ oldPassword, newPassword }));
      if (changePassword.fulfilled.match(res)) {
        toast.success("Updated Your New Password... 🤗");
        setFormData(initialState);
      } else if (changePassword.rejected.match(res)) {
        console.log(
          "%cError (useChangePasswordForm.ts) =>",
          "font-size:16px;color:red;",
          res.payload
        );
        toast.error("Password Update Failed");
      }
    } catch (error) {
      console.log("=>", error);
    } finally {
      setLoading(false);
    }
  };

  return { formData, handleChange, handleRegister, error, loading };
};
