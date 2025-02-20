import { useState } from "react";
// import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useAuth } from "@/hooks/useAuth";

export const useForgetPasswordForm = () => {
  useAuth(true);

  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError(null);
  };

  const handleForgetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email) {
      setError("You forgot to enter Email... 😅");
      toast.error("Enter email... We'll mail you... 😉");
      return;
    }

    setLoading(true);
    console.log(email);

    // if (response?.error) {
    //   setError("Invalid credentials. Please try again.");
    //   toast.error("Invalid credentials. Please try again.");
    //   setLoading(false);
    //   return;
    // }

    toast.success("Successfully 🎉... Check you mail... 😊");
    router.push("/dashboard");
  };

  return { email, handleChange, handleForgetPassword, error, loading };
};
