"use client";

import { useSelector } from "react-redux";
import { signOut } from "next-auth/react";
import { RootState } from "@/store/store";

export function useAuth() {
  const user = useSelector((state: RootState) => state.auth.doctor);
  return { user, signOut };
}
