"use client";

import { signOut } from "next-auth/react";
import InputField from "../InputField";
import { IoIosSearch } from "react-icons/io";
import toast from "react-hot-toast";
import { logout } from "@/store/slices/authSlice";
import { useAppDispatch } from "@/hooks/useRedux";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const disptch = useAppDispatch();
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await signOut({ redirect: false });
      toast.success("Successfully logged out!");
      disptch(logout());
      router.push("/login");
    } catch (error) {
      console.error("Failed to sign out", error);
      toast.error("Successfully logged out!");
    }
  };

  return (
    <nav className="bg-white py-4 px-8 flex justify-between items-center border-b border-gray-200">
      {/* Logo or Title */}
      <div className="text-xl text-gray-500 font-bold">
        <span className="text-blue-500">M</span> Medicare
      </div>

      {/* Search Bar (Optional) */}
      <div className="hidden md:flex">
        <InputField
          label={<IoIosSearch />}
          fieldType="search"
          inputType="secondary"
          placeholder="Search"
          value=""
          setValue={() => {}}
        />
      </div>

      
      <div className="flex items-center text-gray-500 space-x-4">
        <button
          className="bg-rose-400 px-6 py-2 rounded-3xl text-white"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
