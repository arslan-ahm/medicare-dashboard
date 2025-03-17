import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useAuth } from "@/hooks/useAuth";

export const useLoginForm = () => {
  useAuth(true);

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
    console.log("Starting handleLogin...", formData);
    
    if (!formData.email || !formData.password) {
      setError("Email and password are required.");
      return;
    }
    console.log("Clicked ... 1");
    
    setLoading(true);
    const response = await signIn("credentials", {
      ...formData,
      redirect: false,
    });
    
    console.log("Clicked ... 2");
    if (response?.error) {
      setError("Invalid credentials. Please try again.");
      toast.error("Invalid credentials. Please try again.");
      setLoading(false);
      return;
    }
    
    console.log("Clicked ... 3");
    toast.success("Successfully logged in!");
    router.push("/dashboard");
  };

  return { formData, handleChange, handleLogin, error, loading };
};