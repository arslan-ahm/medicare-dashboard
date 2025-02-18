import { signOut } from "next-auth/react";
import Link from "next/link";
import InputField from "../InputField";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-8 flex justify-between items-center border-b border-gray-200">
      {/* Logo or Title */}
      <div className="text-xl text-gray-500 font-bold">
        <span className="text-blue-500">M</span> Medicare
      </div>

      {/* Search Bar (Optional) */}
      <div>
        <InputField
          label={<IoIosSearch />}
          fieldType="search"
          inputType="secondary"
          placeholder="Search"
        />
      </div>

      {/* User Info */}

      <div className="flex items-center text-gray-500 space-x-4">
        <Link
          className="bg-cyan-400 px-6 py-2 rounded-3xl text-white"
          href="/login"
        >
          Login
        </Link>
      </div>
      <div className="flex items-center text-gray-500 space-x-4">
        <button
          className="bg-rose-400 px-6 py-2 rounded-3xl text-white"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
