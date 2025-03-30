import { useState } from "react";
import toast from "react-hot-toast";

const useContactUs = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      toast.error("Enter Email... You won't regret... 😉");
      return;
    }

    try {
      const res = await fetch("/api/join-wishlist", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      toast.success("Thanks for you Interest... 😊");
      if (!res.ok) {
        throw new Error(data.message || "Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to send email. Try again! 🤐");
    }
  };

  return {
    email,
    handleChange,
    onSubmit,
  };
};

export default useContactUs;
