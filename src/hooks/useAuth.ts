"use client"; 

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { RootState } from "@/store/store";
import { logout, setUser } from "@/store/slices/auth.slice";

export function useAuth(redirect = false) {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.doctor);

  useEffect(() => {
    if (session?.user) {
      dispatch(setUser({ id: session.user?.id ?? "", name: session.user.name ?? "", email: session.user.email ?? "" }));
      if (redirect) router.push("/dashboard");
    } else {
      dispatch(logout());
    }
  }, [session, dispatch]);

  return { user, signOut };
}