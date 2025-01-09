import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface UseForgetPasswordFormReturn {
  email: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleForgetPassword: (e: React.FormEvent) => Promise<void>;
  error: string | null;
  loading: boolean;
}

export const useForgetPasswordForm = (): UseForgetPasswordFormReturn => {
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
    setLoading(true);

    if (!email) {
      setError("You forgot to enter Email... 😅");
      toast.error("Enter email... We'll mail you... 😉");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/reset-password", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong!");
      }

      toast.success("Successfully 🎉... Check your mail... 😊");
      router.push("/login");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
      toast.error(error || "Failed to send email. Try again! 🤐");
    } finally {
      setLoading(false);
    }
  };

  return { email, handleChange, handleForgetPassword, error, loading };
};
