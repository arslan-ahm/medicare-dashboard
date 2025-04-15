import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export const useRegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    organization: "",
    specialization: "",
  });
  const [extraData, setExtraData] = useState({
    industry: "",
    employCount: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const router = useRouter();

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
    const { name, email, password, organization, specialization } = formData;

    if (!name || !email || !password) {
      return toast.error("Important fields are missing... 😶");
    }

    if (!emailRegex.test(email)) {
      return toast.error("Email is not valid... 😯");
    }

    if (password.length < 8) {
      return toast.error("Password is too short... 😌");
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          name,
          specialization,
          organization,
        }),
      });

      if (res.ok) {
        router.push("/login");
        toast.success("User Registered Successfully... 😊");
        return;
      }
    } catch (error) {
      console.error(error);
      return toast.error("Something went wrong... 😟");
    } finally {
      setLoading(false);
    }
  };

  return {
    extraData,
    setExtraData,
    formData,
    handleChange,
    handleRegister,
    error,
    loading,
  };
};
