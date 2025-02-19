"use client";
import LoginForm from "@/components/loginForm/LoginForm";
import Link from "next/link";



export default function SignInPage() {
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* <p>{data?.user?.email || "No User Found"}</p> */}
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Sign In
        </h2>

        <LoginForm /> 

        <Link
          className="block w-full px-4 py-2 text-center text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50"
          href="/register"
        >
          Register Me
        </Link>
      </div>
    </div>
  );
}
