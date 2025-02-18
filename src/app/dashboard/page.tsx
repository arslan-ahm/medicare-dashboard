"use client";
import React from "react";
import { useSession } from "next-auth/react";

const Page = () => {
  const { data } = useSession();
  console.log('Session => ',data);
  return <div>Dashboard</div>;
};

export default Page;
