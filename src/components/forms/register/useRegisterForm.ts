import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useAuth } from "@/hooks/useAuth";

export const useRegisterForm = () => {
  useAuth(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    organization: "",
    specialization: "",
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
      console.log("Please fill all the fields");
      return toast.error("Please fill all the fields");
    }

    if (!emailRegex.test(email)) {
      return toast.error("Invalid email address");
    }

    if (password.length < 8) {
      return toast.error("Password should be at least 8 characters long");
    }

    try {
      console.log("Registering...");
      const res = await fetch("/api/register", {
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
        toast.success("Account created successfully");
        router.push("/login");
        return;
      }
    } catch (error) {
      console.error(error);
      return toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { formData, handleChange, handleRegister, error, loading };
};
