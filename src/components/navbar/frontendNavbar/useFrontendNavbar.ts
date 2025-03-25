import { useRouter } from "next/router";

const useFrontendNavbar = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/dashboard");
  };

  return { handleClick };
};

export default useFrontendNavbar;
