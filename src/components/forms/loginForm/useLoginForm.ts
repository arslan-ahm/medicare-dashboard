import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export const useLoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.email || !formData.password) {
      setError("Email and password are required.");
      return;
    }

    setLoading(true);
    const response = await signIn("credentials", {
      ...formData,
      redirect: false,
    });

    if (response?.error) {
      setError("Invalid credentials. Please try again.");
      toast.error("Email or password is incorrect. Please recheck... 😅");
      setLoading(false);
      return;
    }
    toast.success("Logged in successfully... 😎");
    router.push("/dashboard");
  };

  return { formData, handleChange, handleLogin, error, loading };
};