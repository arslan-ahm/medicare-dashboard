import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

const initialState = {
  password: "",
  confirmPassword: "",
};

export const useResetPasswordForm = () => {
  const router = useRouter();
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

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const { password, confirmPassword } = formData;

    if (!password || !confirmPassword) {
      console.log("Please fill all the fields");
      return toast.error("Please fill all the fields");
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      const res = await fetch("/api/reset-password/", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password,
          token: new URLSearchParams(window.location.search).get("token"),
        }),
      });
  
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Password update failed");
      }
      setFormData(initialState);
      router.push("/login");
      toast.success("Password updated successfully 🎉");
      } catch (error) {
        console.log("=>", error);
        toast.error("Password Update Failed");
    } finally {
      setLoading(false);
    }
  };

  return { formData, handleChange, handleRegister: handleResetPassword, error, loading };
};
