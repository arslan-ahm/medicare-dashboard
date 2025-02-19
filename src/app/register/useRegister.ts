import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useRegister = () => {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    const specialization = formData.get("specialization") as string;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
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
    }
  };
  return { handleSubmit };
};
export default useRegister;
